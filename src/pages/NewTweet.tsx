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
    <div>
      <Link to={"/"}>back</Link>
      <div className="flex py-2 justify-between ">
        <form onSubmit={(e) => tweetsHandlerSubmit(e)}>
          <div className="flex gap-8 px-4">
            <span>Drafts</span>
            <Button text="Tweet" />
          </div>
        </form>
        <div>
          <div className="my-4">
            <div>user img{/*user Image  */}</div>
            <Textarea
              placeholder="Whats is happening?!"
              styles="w-screen h-32 items-start flex "
              onChange={(e) => handleInputChange(e)}
            />
            <div>
              <Button text="Everyone can reply" />
            </div>
            <div>{/* add icons */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
