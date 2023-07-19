import Header from "../components/header";
import RightSection from "../components/RightSection";
import { NewTweetButton } from "../components/NewTweetButton";
import { TweetMap } from "../components/TweetMap";
import { useEffect, useState } from "react";

function Home() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex h-screen w-full justify-evenly">
      {windowWidth >= 494 && <Header />}
      <div className="w-full md:w-1/3 ">
        <TweetMap />
      </div>

      {windowWidth >= 1006 && <RightSection />}
      <NewTweetButton />
    </div>
  );
}

export default Home;
