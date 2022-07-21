import { Heart, ThumbsUp } from "react-feather";

function ThanksPage() {
  return (
    <div
      className="feedback_form_text"
      style={{ fontSize: "xxx-large", textAlign: "center" }}
    >
      <Heart size={45} fill={"red"} className="mb-2 ml-2" /> Thanks for
      providing us with your valueable Feedback{" "}
      <Heart size={45} fill={"red"} className="mb-2 ml-2" />
    </div>
  );
}

export default ThanksPage;
