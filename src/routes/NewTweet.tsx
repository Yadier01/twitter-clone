import { Link } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/button";

const NewTweet = () => {
  return (
    <div>
      <div className="flex py-2 justify-between ">
        <Link to={"/"}>back</Link>
        <div className="flex gap-8 px-4">
          <span>Drafts</span>
          <span>Tweet</span>
        </div>
      </div>
      <div>
        <div className="my-4">
          <div>user img{/*user Image  */}</div>
          <Input
            inputType="text"
            placeholder="Whats is happening?!"
            styles="w-screen h-32 items-start flex "
          />
          <div>
            <Button text="Everyone can reply" />
          </div>
          <div>{/* add icons */}</div>
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
