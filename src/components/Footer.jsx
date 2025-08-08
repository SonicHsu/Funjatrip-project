import Logo from "../assets/images/index/Logo.svg";
import weiXinZhiFu from "../assets/images/index/weixinzhifu.png";
import aliPay from "../assets/images/index/alipay.png";


export default function Footer() {
  return (
    <footer className="bg-[#E5E5E5] flex justify-center">
      <div className=" w-[1280px] h-auto py-16 flex">
        <img src={Logo} alt="美國" className="w-auto h-[110px]" />

        <div className="container mx-auto px-14">
          <div className="flex ">
            {/* 左側導航區塊容器 */}
            <div className="flex space-x-12">
              {/* 認識放假趣 */}
              <div>
                <h4 className="font-bold mb-2">認識放假趣</h4>
                <ul>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      關於放假趣
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      常見問題與幫助
                    </a>
                  </li>
                </ul>
              </div>

              {/* 網站條款 */}
              <div>
                <h4 className="font-bold mb-2">網站條款</h4>
                <ul>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      服務條款
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      隱私政策
                    </a>
                  </li>
                </ul>
              </div>

              {/* 聯絡我們 */}
              <div>
                <h4 className="font-bold mb-2">聯絡我們</h4>
              </div>

              {/* 右側支付方式區塊 */}
              <div className="flex flex-col items-center">
                <h4 className="font-bold mb-2">支付方式</h4>
                <div className="flex space-x-2">
                  {/* 支付圖示 */}
                  <img
                    src={weiXinZhiFu}
                    alt="Payment Method 1"
                    className="h-9 w-9 filter invert-[35%] sepia saturate-[900%] hue-rotate-[100deg] brightness-20"
                  />
                  <img
                    src={aliPay}
                    alt="Payment Method 2"
                    className="h-9 w-9"
                  />
                </div>
              </div>
            </div>


          </div>

          {/* 底部版權資訊 */}
          <div className="mt-8 pt-4 border-t border-gray-300 text-center text-gray-500 text-sm">
            <p>COPYRIGHT © 2018 FUNJATRIP All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
