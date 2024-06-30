import {Route, Routes} from "react-router-dom";
import Collector from "../pages/Collector.jsx";
import HomePage from "../pages/HomePage/index.jsx";
import SearchPage from "../pages/SearchPage/index.jsx";
import VideoPage from "../pages/VideoPage/index.jsx";

const Root = () => {
  return(
      <Routes>
          <Route path="/" element={
              <Collector>
                  <HomePage/>
              </Collector>
          }/>
          <Route path="/search/:searchId" element={
              <Collector>
                  <SearchPage/>
              </Collector>
          }/>
          <Route path="/watch/:videoId" element={
              <Collector>
                  <VideoPage/>
              </Collector>
          }/>
      </Routes>
  )
}
export default Root