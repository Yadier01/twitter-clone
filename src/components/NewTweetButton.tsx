import { Link } from "react-router-dom";

export const NewTweetButton = () => {
  return (
    <div className="absolute bottom-0 right-0">
      <Link
        to="/newtweet"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Tweet
      </Link>
    </div>
  );
};

//bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded
//
//        className="bg-blue-400 text-center items-center flex justify-center z-10 my-16 absolute bottom-0 right-0 h-16 w-16 "
