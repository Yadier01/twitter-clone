import { FaTwitter } from "react-icons/fa";
export const TopSection = () => {
  return (
    <div className="flex flex-col p-4 justify-around py-6 ">
      <div className="w-full flex items-center ">
        <img
          src="../../public/twitter.png"
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <div className="w-full  flex items-center justify-center">
          <FaTwitter />
        </div>
      </div>
      <div className="flex justify-around">
        <p className="inline">For you</p>
        <p className="inline">Following</p>
      </div>
    </div>
  );
};
