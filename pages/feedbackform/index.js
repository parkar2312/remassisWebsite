import React, { useState, useEffect } from "react";
import { Frown, Meh, Smile } from "react-feather";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
// require("../../models");
function FeedbackForm() {
  const router = useRouter();
  const [checked, setChecked] = useState([]);
  const [imgfeed, setImgfeed] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [isActivea, setIsActivea] = useState(false);
  const [isActiveb, setIsActiveb] = useState(false);

  const checkList = ["Bug", "Suggestion", "Other"];

  const handleClick = () => {
    setIsActive((current) => !current);
    setIsActivea(false);
    setIsActiveb(false);
  };
  const handleClicka = () => {
    setIsActivea((current) => !current);
    setIsActive(false);
    setIsActiveb(false);
  };
  const handleClickb = () => {
    setIsActiveb((current) => !current);
    setIsActivea(false);
    setIsActive(false);
  };
  const handleSmile = (event) => {
    setImgfeed("smile");
  };
  const handleMeh = (event) => {
    setImgfeed("meh");
  };
  const handleFrown = (event) => {
    setImgfeed("frown");
  };
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      Description: event.target.desc.value,
      Desctype: checkedItems,
      Emoji: imgfeed,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/feedbackformapi";

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();

    console.log(JSONdata);
    // router.push("../ThanksPage");
  };

  return (
    <div className="feedback_form mt-2">
      <h2>Feedback Form</h2>

      <div className="feedback_form_content">
        <form onSubmit={handleSubmit}>
          <div className="feedback_form_text">
            <span
              className="mb-3"
              style={{ fontSize: "larger", fontWeight: "bolder" }}
            >
              Send us your feedback!
              <br />
            </span>
            <span style={{ fontSize: "small" }}>
              Do you have a suggestion or found some bug ? let us know in the
              field below
            </span>
          </div>
          <div className="feedbackform_main">
            <h8>How was your experience ?</h8>
            <div className="feedback_form_emojies mb-4 mt-3">
              <div
                className="emoji_iconsa"
                style={{
                  color: isActive ? "green" : "",
                }}
                onClick={handleClick}
              >
                <a onClick={handleSmile}>
                  <Smile />
                </a>
              </div>
              <div
                className="emoji_icons"
                style={{
                  color: isActivea ? "orange" : "",
                }}
                onClick={handleClicka}
              >
                <a onClick={handleMeh}>
                  <Meh />
                </a>
              </div>
              <div
                className="emoji_icons"
                style={{
                  color: isActiveb ? "red" : "",
                }}
                onClick={handleClickb}
              >
                <a onClick={handleFrown}>
                  {" "}
                  <Frown />
                </a>
              </div>
              {/* <div>{`Items checked are: ${checkedItems}`}</div> */}
            </div>
            <div className="feedback_form_textfield">
              <Form.Group className="mb-3">
                <Form.Control
                  placeholder="Describe your experience here..."
                  as="textarea"
                  rows={3}
                  id="desc"
                  name="desc"
                  //     onChange={handleChange}
                />
              </Form.Group>
            </div>

            <div className="mb-3">
              <div className="feedback_form_checkboxes">
                <div className="checkList">
                  <div className="list-container" style={{ display: "flex" }}>
                    {checkList.map((item, index) => (
                      <div key={index}>
                        <input
                          style={{ marginLeft: "1.6rem" }}
                          value={item}
                          type="checkbox"
                          onChange={handleCheck}
                        />
                        <span
                          className={isChecked(item)}
                          style={{
                            marginLeft: ".2rem",
                            fontWeight: "600",
                            fontSize: "medium",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="mt-2 "
            style={{ width: "20rem", height: "4rem" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
