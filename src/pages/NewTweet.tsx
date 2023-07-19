import { Link } from "react-router-dom";
import Textarea from "../components/textarea";
import Button from "../components/button";
import {
  CreateNewTweet,
  CreateNewTweetContextType,
} from "../context/CreateNewTweet"; // Import the CreateNewTweetContextType
import { useContext } from "react";

const NewTweet = () => {
  const { handleInputChange, tweetsHandlerSubmit } = useContext(
    CreateNewTweet
  ) as CreateNewTweetContextType; // Add the type assertion

  return (
    <>
      <form
        onSubmit={(e) => tweetsHandlerSubmit(e)}
        className="flex flex-col justify-between"
      >
        <div className="flex items-center justify-between gap-4 px-4 ">
          <Link to={"/"}>back</Link>
          <div>
            <Button
              text="tweet"
              styles="bg-blue-400 py-1 text-white px-5 text-center rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <Textarea
            placeholder="What's happening?"
            onChange={(e) => handleInputChange(e)}
            styles="w-screen h-28 resize-none"
          />
          <div>
            <p>everyone can reply</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewTweet;
