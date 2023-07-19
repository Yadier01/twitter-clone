import { createContext, useState } from "react";
export type CreateNewTweetContextType = {
  userInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  tweet: string[];
  tweetsHandlerSubmit: (e: any) => void;
};

export const CreateNewTweet = createContext<CreateNewTweetContextType | null>(
  null
);
const CreateNewTweetProvider = ({ children }: any) => {
  const [userInput, setUserInput] = useState("");
  const [tweet, setTweet] = useState<string[]>([]);

  const handleInputChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const tweetsHandlerSubmit = (e: any) => {
    e.preventDefault();
    setTweet((prevTweet) => {
      return [...prevTweet, userInput];
    });
  };

  const contextValue: CreateNewTweetContextType = {
    userInput,
    handleInputChange,
    tweet,
    tweetsHandlerSubmit,
  };
  return (
    <CreateNewTweet.Provider value={contextValue}>
      {children}
    </CreateNewTweet.Provider>
  );
};

export default CreateNewTweetProvider;
