import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/general/Footer";
import TermsOfService from "./pages/TermsOfServiece";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CommunityPage from "./pages/CommunityPage";
import { AuthContext } from "./authContext/AuthContext";
import { useContext } from "react";
import Videos from "./components/community/Videos";
import Community from "./components/community/CommunitySection";
import DashboardSection from "./components/community/DashboardSection";
import Notifications from "./components/community/Notifications";
import Shop from "./components/community/Shop";
import CreateVideo from "./pages/CreateVideo";
import Conversation from "./components/community/Conversation";
import VideoPreview from "./components/community/VideoSection";

function App() {
  const { user } = useContext(AuthContext).userData;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={user ? <CommunityPage /> : <HomePage />}
          >
            <Route path="/videos" exact element={<Videos />} />
            <Route path="/" exact element={<DashboardSection />} />
            <Route path="/conversation/:id" exact element={<Conversation />} />
            <Route path="/shop" element={<Shop />} />

            <Route
              path="/notifications"
              exact
              element={user ? <Notifications /> : <Login />}
            />

            <Route
              path="/video/:videoId"
              exact
              element={user ? <VideoPreview /> : <Login />}
            />

            <Route
              path="/community/:communityId/:channelName"
              exact
              element={<Community />}
            />
          </Route>
          <Route
            path="/create-video"
            exact
            element={user ? <CreateVideo /> : <Login />}
          />
          <Route
            path="/register"
            exact
            element={user ? <Navigate to={"/"} /> : <Register />}
          />
          <Route
            path="/login"
            exact
            element={user ? <Navigate to={"/"} /> : <Login />}
          />
          <Route path="/terms-of-service" exact element={<TermsOfService />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
