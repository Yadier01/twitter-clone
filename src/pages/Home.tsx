import Button from "../components/button";
import { Link } from "react-router-dom";
import {
  CreateNewTweet,
  CreateNewTweetContextType,
} from "../context/CreateNewTweet";
import { useContext } from "react";
function Home() {
  const { userInput, tweet } = useContext(
    CreateNewTweet
  ) as CreateNewTweetContextType;
  return (
    <main className="h-screen">
      <div className="h-14">
        {/* img appears in mobile but not in tablets/Desktop */}
        <img src="" alt="" />
      </div>
      <div className="flex justify-around ">
        <Button text="For you" />
        <Button text="Following" />
      </div>
      <div className="">
        <Link
          to="/newtweet"
          className="bg-blue-400 text-center items-center flex justify-center z-10 my-16 absolute bottom-0 right-0 h-16 w-16 "
        >
          Tweet
        </Link>
      </div>
      {tweet.map((tweet: any, idx: any) => (
        <div key={idx}>
          <h1>{tweet}</h1>
        </div>
      ))}
    </main>
  );
}

export default Home;
