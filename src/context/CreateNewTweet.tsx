import { createContext, useEffect, useState } from "react";
export type CreateNewTweetContextType = {
  userInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  tweet: string[];
  tweetsHandlerSubmit: (e: any) => void;
  input: boolean;
};

export const CreateNewTweet = createContext<CreateNewTweetContextType | null>(
  null
);
const CreateNewTweetProvider = ({ children }: any) => {
  const [userInput, setUserInput] = useState<string>("");
  const [tweet, setTweet] = useState<string[]>([]);
  const [input, setInput] = useState(false);
  const handleInputChange = (e: any) => {
    setUserInput(e.target.value);
  };
  useEffect(() => {
    setInput(userInput.trim().length === 0);
  }, [handleInputChange]);

  const tweetsHandlerSubmit = (e: any) => {
    e.preventDefault();

    if (userInput.trim().length === 0) {
      return;
    }
    setTweet((prevState) => [...prevState, userInput]);
    setUserInput("");
  };

  const contextValue: CreateNewTweetContextType = {
    userInput,
    handleInputChange,
    tweet,
    tweetsHandlerSubmit,
    input,
  };
  return (
    <CreateNewTweet.Provider value={contextValue}>
      {children}
    </CreateNewTweet.Provider>
  );
};

export default CreateNewTweetProvider;
