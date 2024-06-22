import { useState } from "react";

import { PrimaryBtn } from "../../constants/Bt.constants/button";
import { FeedbackButtonsConfig } from "./Config";
import { Star } from "../../assets/svg/Star";
import { MainButton } from "../MainButton";
import { Btn } from "../Btn/Btn";

export const FeedbackForm = (props) => {
  const { onSubmit = () => {} } = props;
  const [clicked, setClicked] = useState(false);
  const [feedbackButtons, setFeedbackButtons] = useState(FeedbackButtonsConfig);

  const toggleFavorite = () => {
    setClicked((prev) => !prev);
  };

  const handleFeedback = (value) => {
    setFeedbackButtons((prev) => {
      const clickedBtn = prev.find((btn) => btn.value === value);
      if (clickedBtn.disabled) return prev;
      if (clickedBtn.active) {
        return FeedbackButtonsConfig;
      }
      return prev.map((btn) => ({
        ...btn,
        disabled: clickedBtn.value !== btn.value,
        active: clickedBtn.value === btn.value,
      }));
    });
  };

  const handleSubmit = () => {
    const selectedButton = feedbackButtons.find((btn) => btn.active);
    if (!selectedButton) return;
    onSubmit(selectedButton.value);
  };

  return (
    <>
      <Btn active={clicked} onClick={toggleFavorite}>
        <Star />
      </Btn>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="actions">
        {feedbackButtons.map((btn) => (
          <Btn
            onClick={() => handleFeedback(btn.value)}
            active={btn.active}
            disabled={btn.disabled}
            key={btn.value}
          >
            {btn.value}
          </Btn>
        ))}
      </div>
      <MainButton
        onClick={handleSubmit}
        className={PrimaryBtn.PRIMARY}
        text="SUBMIT"
      />
    </>
  );
};
