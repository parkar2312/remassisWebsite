import React, { useState } from "react";
import { Frown, Meh, Smile } from "react-feather";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FeedbackForm() {
  const [checked, setChecked] = useState([]);
  const [imgfeed, setImgfeed] = useState("");
  const checkList = ["Bug", "Suggestion", "Other"];

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
      Checkdata: checkedItems,
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
  };

  return (
    <div className="feedback_form">
      <h2>Feedback Form</h2>
      <div className="feedback_form_content">
        <form onSubmit={handleSubmit}>
          <div className="feedback_form_text">
            <h4>Send us your feedback!</h4>
            <h6>
              Do you have a suggestion or found some bug ? let us know in the
              field below
            </h6>
          </div>
          <div className="feedbackform_main">
            <h5>How was your experience ?</h5>
            <div className="feedback_form_emojies">
              <div className="emoji_icons" style={{ color: "green" }}>
                <a onClick={handleSmile}>
                  <Smile />
                </a>
              </div>
              <div className="emoji_icons" style={{ color: "orange" }}>
                <a onClick={handleMeh}>
                  <Meh />
                </a>
              </div>
              <div className="emoji_icons" style={{ color: "red" }}>
                <a onClick={handleFrown}>
                  {" "}
                  <Frown />
                </a>
              </div>
              {/* <div>{`Items checked are: ${checkedItems}`}</div> */}
            </div>
            <div className="feedback_form_textfield">
              <Form.Group className="mb-3">
                <Form.Label>Describe your experience here...</Form.Label>
                <Form.Control
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
                          style={{ marginLeft: "1rem" }}
                          value={item}
                          type="checkbox"
                          onChange={handleCheck}
                        />
                        <span className={isChecked(item)}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                className="mt-2 "
                style={{ width: "18rem" }}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
