import React from "react";
import "../App.css";
import { useRef } from "react";
function Intro() {
  var text = useRef();
  function buttonClicked() {
    fetch("https://anonymous-message-pi.vercel.app/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // data to be sent in the request body
        message:text.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    var x = text.current.value;
    console.log(x);
  }
  return (
    <div className="intro" id="intro">
      <div className="intro-left">
        <h4 className="name">Tech Enthusiast</h4>
        <h2 className="intro-name">
          <div>
            <div>Hello, myself </div>
            <div className="intro-inside-name">Chinmay Chaudhari</div>
          </div>
        </h2>
        <h5 className="intro-text">
          I am First Year Engineering student currently pursing Information
          Technology
        </h5>
      </div>
      <div className="intro-right">
        <h4 className="intro-right-title">Send me a Anonymous message</h4>
        <div className="intro-right-element">
          <div className="intro-right-input-container">
            <input type="text" className="intro-right-input" ref={text} />
          </div>
          <div className="intro-right-button-container">
            <button
              className="intro-right-button"
              onClick={() => {
                buttonClicked();
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
