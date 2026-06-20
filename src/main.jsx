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


const Home = React.lazy(() => import("./components/mainComponents/Home"));
const About = React.lazy(() => import("./components/mainComponents/About.jsx"));
const Events = React.lazy(() => import("./components/mainComponents/Events.jsx"));
const MembersPage = React.lazy(() => import("./components/mainComponents/MembersPage.jsx"));
// const Achievements = React.lazy(() => import("./components/mainComponents/Achievements.jsx"));
const Feedback = React.lazy(() => import("./components/mainComponents/Feedback.jsx"));
const Domain = React.lazy(() => import("./components/mainComponents/Domain.jsx"));
const StudyMt = React.lazy(() => import("./components/mainComponents/StudyMt.jsx"));
const Materials = React.lazy(() => import("./components/mainComponents/Materials.jsx"));
const PdfView = React.lazy(() => import("./components/mainComponents/PdfView.jsx"));
const Project = React.lazy(() => import("./components/mainComponents/Project.jsx"));
const Gallery = React.lazy(() => import("./components/mainComponents/Gallery.jsx"));
const AddEvent = React.lazy(() => import("./components/mainComponents/AddEvent.jsx"));
const SubmitFeedback = React.lazy(() => import("./components/mainComponents/SubmitFeedback.jsx"));
const Recruitment = React.lazy(() => import("./components/mainComponents/Recruitment.jsx"));
const DomainDetail = React.lazy(() => import("./components/mainComponents/DomainDetail.jsx"));
const InitiativeDetail = React.lazy(() => import("./components/mainComponents/InitiativeDetail.jsx"));

const SplashScreen = React.lazy(() => import("./components/mainComponents/SplashScreen.jsx"));
const Web = React.lazy(() => import("./components/mainComponents/WebDev/WebDev.jsx"));
const GraphicDesign = React.lazy(() => import("./components/mainComponents/GraphicDesign.jsx"));
const CloudComputing = React.lazy(() => import("./components/mainComponents/CloudComputing.jsx"));
const Java = React.lazy(() => import("./components/mainComponents/java/JavaELabs.jsx"));
const UIUX = React.lazy(() => import("./components/mainComponents/UIUX/UIUX.jsx"));
const Aiml = React.lazy(() => import("./components/mainComponents/Aiml/Aiml.jsx"));
const Photography = React.lazy(() => import("./components/mainComponents/photography/Photography.jsx"));
const IoTEmbedded = React.lazy(() => import("./components/mainComponents/IoTEmbedded.jsx"));
const Cyber = React.lazy(() => import("./components/mainComponents/cyber_security/cyber_security.jsx"));
const GameDev = React.lazy(() => import("./components/mainComponents/gamedev/GameDev.jsx"));
const LeadHero = React.lazy(() => import("./components/mainComponents/RunningText.jsx"));
const Android = React.lazy(() => import("./components/mainComponents/android/android.jsx"));
const Data = React.lazy(() => import("./components/mainComponents/data_analytics/DataAnalyticsElabs.jsx"));

const EventRegistration = React.lazy(() => import("./components/subComponents/EventRegistration.jsx"));
const EventDetails = React.lazy(() => import("./components/subComponents/EventDetails.jsx"));
const SubmissionSuccess = React.lazy(() => import("./components/subComponents/SubmissionSuccess.jsx"));
const MarketingPR = React.lazy(() => import("./components/mainComponents/MarketingPR.jsx"));
const ContentWriting = React.lazy(() => import("./components/mainComponents/ContentWriting.jsx"));
const Entrepreneurship = React.lazy(() => import("./components/mainComponents/Entrepreneurship.jsx"));

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="splashscreen" element={<SplashScreen />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="members" element={<MembersPage />}> </Route>
      {/* <Route path="achievements" element={<Achievements />}> </Route> */}
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
      <Route path="graphic" element={<GraphicDesign />}></Route>
      <Route path="cloud" element={<CloudComputing />}></Route>
      <Route path="top-performers" element={<TopPerformers />} />

      <Route path="recruitment" element={<Recruitment />}></Route>
      <Route path="recruitment/:domainId" element={<DomainDetail />}></Route>
      <Route path="initiatives/:id" element={<InitiativeDetail />}></Route>
      <Route path="marketing" element={<MarketingPR />}></Route>
      <Route path="content-writing" element={<ContentWriting />}></Route>
      <Route path="entrepreneurship" element={<Entrepreneurship />}></Route>
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
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
);

