import { useState, useEffect } from "react";
import axios from "axios";

function base64DecodeUnicode(str) {
  try {
    const binaryString = atob(str);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const decoded = new TextDecoder("utf-8").decode(bytes);
    return JSON.parse(decoded);
  } catch (err) {
    console.error("Base64 Unicode 解碼失敗", err);
    return null;
  }
}

export default function useMainPageData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const requestData = {
          langcode: "zh-TW", // 繁體中文
          currency: "TWD"       // 首次使用空字串，讓後端回傳預設值
        };

        const res = await axios.post(
          "https://jgdev.jgallop.com/funjatrip/api/mainPage", 
          requestData
        );
        
        const jsonObj = base64DecodeUnicode(res.data);

        console.log(jsonObj)

        
        if (
          jsonObj &&
          jsonObj.rtCode === "S00" &&
          Array.isArray(jsonObj.rtData?.blocks)
        ) {
          setData(jsonObj.rtData.blocks);
          
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('langcode', 'zh-TW');
            if (jsonObj.currency) {
              sessionStorage.setItem('currency', jsonObj.currency);
            }
          }
        } else {
          setError(new Error("API 回傳格式錯誤或失敗"));
          setData([]);
        }
      } catch (err) {
        console.error("API 請求失敗", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}