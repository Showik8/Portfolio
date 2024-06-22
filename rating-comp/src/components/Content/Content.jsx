import { useState } from "react";

import { FeedbackButtonsConfig } from "../FeedbackForm/Config";
import { FeedbackForm } from "../FeedbackForm";
import { SuccessView } from "../SuccessView";
import { Card } from "../Card";

import "./Content.css";

export const Content = () => {
  const [showSuccessView, setShowSuccessView] = useState(false);
  const [selectedRate, setSelectedRate] = useState(null);

  const submitFeedback = (selected) => {
    setSelectedRate(selected);
    setShowSuccessView(true);
  };

  return (
    <Card>
      {!showSuccessView && <FeedbackForm onSubmit={submitFeedback} />}
      {showSuccessView && (
        <SuccessView
          selected={selectedRate}
          total={FeedbackButtonsConfig.length}
        />
      )}
    </Card>
  );
};
