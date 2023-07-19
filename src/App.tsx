import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateNewTweetProvider from "./context/CreateNewTweet";
import Home from "./pages/Home";
import NewTweet from "./pages/NewTweet";
const App = () => {
  return (
    <CreateNewTweetProvider>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<NewTweet />} path="/newtweet" />
        </Routes>
      </Router>
    </CreateNewTweetProvider>
  );
};

export default App;
