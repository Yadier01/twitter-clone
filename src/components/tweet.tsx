import Button from "./button";
import { FaComments, FaRetweet, FaRegHeart, FaShare } from "react-icons/fa";
interface Props {
  tweet: string;
  idx: number;
}
const tweet = ({ tweet, idx }: Props) => {
  return (
    <div
      className="flex flex-col justify-center   items-center bg-red-400"
      key={idx}
    >
      <div className="flex justify-between p-4 w-full ">
        {/* <div className="h-full"> */}
        <img
          src="../../public/twitter.png"
          alt="pfp"
          className="w-10 h-10 block  rounded-full"
        />
        {/* </div> */}
        <div className="w-full justify-around flex flex-col px-4 gap-1">
          <div className="flex justify-between ">
            <div className="flex gap-2">
              <p className="text-white">demond</p>
              <p className="text-grey-800">@demond</p>
            </div>
            <Button
              text="..."
              styles="text-xl align-top	inline text-white text-start"
            />
          </div>
          <div className="">
            <h1 className="text-start px- text-white w-full">{tweet}</h1>
          </div>
          <div className="flex justify-between">
            <FaComments />
            <FaRetweet />
            <FaRegHeart />
            <FaShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default tweet;
