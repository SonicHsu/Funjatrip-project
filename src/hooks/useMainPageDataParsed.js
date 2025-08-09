import useMainPageData from "./useMainPageData";
import { getHomeMainBlock,getAreaBlocks,getSchoolBlocks, getTripBlocks, getTextBlocks } from "../utils/dataParser";


export default function useMainPageDataParsed() {
  const { data, loading, error } = useMainPageData();

  const homeMainBlock = getHomeMainBlock(data);
  const areaBlocks = getAreaBlocks(data);
  const schoolBlocks = getSchoolBlocks(data);
  const tripBlocks = getTripBlocks(data);
  const textBlocks = getTextBlocks(data);

  return {
    loading,
    error,
    homeMainBlock,
    areaBlocks,
    schoolBlocks,
    tripBlocks,
    textBlocks,
  };
}