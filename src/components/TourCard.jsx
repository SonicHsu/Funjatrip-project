import assistantPhoto from "../assets/images/index/assistant_photo.png";
import like from "../assets/images/index/like.svg";
import star from "../assets/images/index/star.svg";

export default function TourCard({ tourItem }) {

    if (!tourItem) {
    return <div className="w-[354px] h-[534px] invisible"></div>;
  }


  const bgPhoto =
    tourItem.photoList && tourItem.photoList.length > 0
      ? tourItem.photoList[0]
      : null;

  const baseUrl = "https://jgdev.jgallop.com/funjatrip/images/";

  const bgImageUrl = bgPhoto
    ? `${baseUrl}${bgPhoto.photoPath}/${bgPhoto.photoName}`
    : "";

  return (
    <div className="w-[354px] h-auto flex flex-col">
      <img
        src={bgImageUrl}
        alt={tourItem.areaList[0].areaName}
        className="w-full h-[260px] object-cover "
      />

      <div className="p-4">
        <div className="flex gap-2 mt-2">
          <div className="flex items-center ">
            <svg
              width="12.5"
              height="16"
              viewBox="0 0 22 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.32812 13.1719C9.07812 13.875 9.96875 14.2266 11 14.2266C12.0313 14.2266 12.8984 13.875 13.6016 13.1719C14.3516 12.4219 14.7266 11.5313 14.7266 10.5C14.7266 9.46875 14.3516 8.60156 13.6016 7.89844C12.8984 7.14844 12.0313 6.77344 11 6.77344C9.96875 6.77344 9.07812 7.14844 8.32812 7.89844C7.625 8.60156 7.27344 9.46875 7.27344 10.5C7.27344 11.5313 7.625 12.4219 8.32812 13.1719ZM3.54688 3.11719C5.60938 1.05469 8.09375 0.0234375 11 0.0234375C13.9062 0.0234375 16.3672 1.05469 18.3828 3.11719C20.4453 5.13281 21.4766 7.59375 21.4766 10.5C21.4766 11.9531 21.1016 13.6172 20.3516 15.4922C19.6484 17.3672 18.7812 19.125 17.75 20.7656C16.7188 22.4062 15.6875 23.9531 14.6562 25.4062C13.6719 26.8125 12.8281 27.9375 12.125 28.7812L11 29.9766C10.7188 29.6484 10.3438 29.2266 9.875 28.7109C9.40625 28.1484 8.5625 27.0703 7.34375 25.4766C6.125 23.8359 5.04688 22.2656 4.10938 20.7656C3.21875 19.2188 2.39844 17.4844 1.64844 15.5625C0.898437 13.6406 0.523438 11.9531 0.523438 10.5C0.523438 7.59375 1.53125 5.13281 3.54688 3.11719Z"
                fill="#99a1af"
              />
            </svg>

            <span className=" px-2 py-1 text-gray-400">
              {tourItem.areaList[0].areaName}{" "}
              {tourItem.areaList[0].cityList[0].cityName}
            </span>
          </div>
        </div>

        <div className="h-[90px] mt-3">
          <h4 className="text-xl">
            {tourItem.travelName}({tourItem.minDays}天)
          </h4>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex space-x-20">
            <div className="flex gap-2">
              <img
                src={assistantPhoto}
                alt="assistantPhoto"
                className="w-[20px] h-auto"
              />
              <span>
                {tourItem.joinCount}
                <small>人已去過</small>
              </span>
            </div>

            <div className="flex gap-2">
              <img src={like} alt="like" className="w-[24px] h-auto" />
              <span>
                {tourItem.favoriteCount}
                <small>人有興趣</small>
              </span>
            </div>
          </div>

          {tourItem.starPeopleCount > 0 ? (
            <div className="flex gap-2">
              <img src={star} alt="star" className="w-[24px] h-auto" />
              <span>{tourItem.starPeopleCount}</span>
            </div>
          ) : (
            <div className=" w-[24px] h-[24px]"></div>
          )}

          <div className="w-full flex justify-end space-x-0.5 items-end">
            <span>CNY</span>
            <span className="text-red-400 text-xl font-bold">
              {tourItem.minPrice}
            </span>
            <span>起</span>
          </div>
        </div>
      </div>
    </div>
  );
}
