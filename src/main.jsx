import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layouts/Layout.jsx";
import TopPerformers from "./components/mainComponents/TopPerformers.jsx";


import Home from "./components/mainComponents/Home";
import About from "./components/mainComponents/About.jsx";
import Events from "./components/mainComponents/Events.jsx";
import MembersPage from "./components/mainComponents/MembersPage.jsx";
import Feedback from "./components/mainComponents/Feedback.jsx";
import Domain from "./components/mainComponents/Domain.jsx";
import StudyMt from "./components/mainComponents/StudyMt.jsx";
import Materials from "./components/mainComponents/Materials.jsx";
import PdfView from "./components/mainComponents/PdfView.jsx";
import Project from "./components/mainComponents/Project.jsx";
import Gallery from "./components/mainComponents/Gallery.jsx";
import AddEvent from "./components/mainComponents/AddEvent.jsx";
import SubmitFeedback from "./components/mainComponents/SubmitFeedback.jsx";
import Recruitment from "./components/mainComponents/Recruitment.jsx";
import DomainDetail from "./components/mainComponents/DomainDetail.jsx";

import SplashScreen from "./components/mainComponents/SplashScreen.jsx";
import Web from "./components/mainComponents/WebDev/WebDev.jsx";
import GraphicDesign from "./components/mainComponents/GraphicDesign.jsx";
import CloudComputing from "./components/mainComponents/CloudComputing.jsx";
import Java from "./components/mainComponents/java/JavaELabs.jsx";
import UIUX from "./components/mainComponents/UIUX/UIUX.jsx";
import Aiml from "./components/mainComponents/Aiml/Aiml.jsx";
import Photography from "./components/mainComponents/photography/Photography.jsx";
import IoTEmbedded from "./components/mainComponents/IoTEmbedded.jsx";
import Cyber from "./components/mainComponents/cyber_security/cyber_security.jsx";
import GameDev from "./components/mainComponents/gamedev/GameDev.jsx";
import LeadHero from "./components/mainComponents/RunningText.jsx";
import Android from "./components/mainComponents/android/android.jsx";
import Data from "./components/mainComponents/data_analytics/DataAnalyticsElabs.jsx";

import EventRegistration from "./components/subComponents/EventRegistration.jsx";
import EventDetails from "./components/subComponents/EventDetails.jsx";
import SubmissionSuccess from "./components/subComponents/SubmissionSuccess.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="splashscreen" element={<SplashScreen />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="members" element={<MembersPage />}> </Route>
      <Route path="feedback" element={<Feedback />} />
      <Route path="domain" element={<Domain />} />
      <Route path="leadhero" element={<LeadHero />}></Route>
      <Route path="courses" element={<StudyMt />} />
      <Route path="courses/:sec" element={<Materials />} />
      <Route path="courses/:sec/:pdf" element={<PdfView />} />

      <Route path="events/:eventid" element={<EventDetails />} />
      <Route path="register/:eventid" element={<EventRegistration />} />
      <Route path="submission-success" element={<SubmissionSuccess />} />

      <Route path="java" element={<Java />} />
      <Route path="android" element={<Android />} />
      <Route path="data" element={<Data />} />
      <Route path="web" element={<Web />} />
      {/* <Route path="signup" element={<Signup />}></Route> */}
      {/* <Route path="login" element={<Login />}></Route> */}
      <Route path="projects" element={<Project />}></Route>
      <Route path="gallery" element={<Gallery />}></Route>
      <Route path="addevent" element={<AddEvent />}></Route>
      <Route path="submitfeedback" element={<SubmitFeedback />}></Route>
      <Route path="uiux" element={<UIUX />}></Route>


      <Route path="aiml" element={<Aiml />}></Route>
      <Route path="photography" element={<Photography />}></Route>
      <Route path="IoTEmbedded" element={<IoTEmbedded />}></Route>
      <Route path="cyber" element={<Cyber />}></Route>
      <Route path="gamedev" element={<GameDev />}></Route>
      <Route path="top-performers" element={<TopPerformers />} />

      <Route path="recruitment" element={<Recruitment />}></Route>
      <Route path="recruitment/:domainId" element={<DomainDetail />}></Route>
      <Route
        path="*"
        element={
          <div className="text-5xl font-bold text-textColor1 h-screen w-full flex justify-center items-center">
            Not Found
          </div>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
);

