import { useState } from "react";
import Button from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          {/* img appears in mobile but not in tablets/Desktop */}
          <img src="" alt="" />
        </div>
        <div className="flex justify-around ">
          <Button text="For you" />
          <Button text="Following" />
        </div>
      </div>
    </>
  );
}

export default App;
