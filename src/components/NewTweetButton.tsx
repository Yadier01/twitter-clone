import { Link } from "react-router-dom";
import { FaFeatherPointed } from "react-icons/fa6";

export const NewTweetButton = () => {
  return (
    <div className="fixed p-4 bg-blue-500 flex my-14  rounded-full bottom-0 right-0 m-4">
      <Link to="/newtweet" className=" text-white font-bold rounded-full ">
        <FaFeatherPointed size="25" />
      </Link>
    </div>
  );
};
