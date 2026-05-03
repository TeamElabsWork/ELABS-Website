import { useState, useEffect } from "react";
import FeedbackCard from "../subComponents/FeedbackCard";
import { dummyFeedbacks } from "../../constants/dummyFeedbacks";
import "../../styles/FloatingFeedback.css";

function Feedback() {
  const [staticFeedbacks, setStaticFeedbacks] = useState([]);

  useEffect(() => {
    // Show only first 9 feedbacks in a static grid
    setStaticFeedbacks(dummyFeedbacks.slice(0, 9));
  }, []);

  return (
    <div className="feedback-section-container">
      <h1 className="md:text-5xl text-4xl text-balance font-black text-textColor1 mb-12 text-center">
        Feedback from our Students
      </h1>

      <div className="static-feedback-grid">
        {staticFeedbacks.map((feedback, index) => (
          <div key={index} className="static-feedback-card">
            <FeedbackCard
              name={feedback.user}
              feedback={feedback.feedback}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
