import "./SuccessView.css";

export const SuccessView = (props) => {
  const { selected = null, total = null } = props;
  return (
    <div className="successCont">
      <img src="/src/assets/img/feedbackImage.png" />
      <span>
        You selected {selected} out of {total}
      </span>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
