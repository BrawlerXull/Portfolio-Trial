import React from "react";
import "../App.css";
import { useRef,useEffect,useState } from "react";
import { useSpring, animated } from "react-spring";
function Intro() {
  var text = useRef();
  const [show, setShow] = useState(false);
  const fade = useSpring({ opacity: show ? 1 : 0 });
  const animation = useSpring({
    from: {
      transform: 'scale(0) rotate(-180deg)',
      opacity: 0,
    },
    to: {
      transform: 'scale(1) rotate(0deg)',
      opacity: 1,
    },
    config: {
      tension: 200,
      friction: 20,
      delay: 500,
    },
    reset: show,
  });

  useEffect(() => {
    setShow(true);
  }, []);
  function buttonClicked() {
    fetch("https://anonymous-message-pi.vercel.app/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // data to be sent in the request body
        message: text.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    var x = text.current.value;
    console.log(x);
    text.current.value="";
    alert(`Message '${x}' sent successfully`);
  }
  return (
    <div className="intro" id="intro">
      <animated.div className="intro-left" style={fade}>
        <h4 className="name">Tech Enthusiast</h4>
        <h2 className="intro-name">
          <div>
            <div>Hello, myself </div>
            <div className="intro-inside-name">Chinmay Chaudhari</div>
          </div>
        </h2>
        <h5 className="intro-text">
          I am First Year Engineering student currently pursing majors in
          Information Technology
        </h5>
      </animated.div>
      <animated.div className="intro-right" style={animation}>
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
      </animated.div>
    </div>
  );
}

export default Intro;
