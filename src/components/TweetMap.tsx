import Tweet from "./tweet";
import {
  CreateNewTweet,
  CreateNewTweetContextType,
} from "../context/CreateNewTweet";
import { useContext } from "react";
import { TopSection } from "./TopSection";

export const TweetMap = () => {
  const { tweet } = useContext(CreateNewTweet) as CreateNewTweetContextType;
  return (
    <div className="">
      <TopSection />
      <div className="">
        {tweet.map((tweet: any, idx: any) => (
          <Tweet tweet={tweet} idx={idx} />
        ))}
      </div>
    </div>
  );
};
