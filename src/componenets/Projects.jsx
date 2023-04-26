import React from "react";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

function Projects() {
  const [show, setShow] = useState(false);
  const animation2 = useSpring({
    from: {
        color: 'white',
    },
    to: {
        color: 'yellow',
    },
    config: {
      duration: 4000,
    },
  });
  const animation = useSpring({
    from: {
      transform: "translateX(-100%)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0%)",
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
  return (
    <div className="projects" id="projects">
      <h1><animated.span style={{ color: animation2.color }}>Projects</animated.span></h1>
      <animated.div className="project" style={animation}>
        <div className="project-left">
          <h4>Collab Me</h4>
          <h5>
            Realtime Chat Collaboration App made using Flutter ExpressJs and
            MongoDB
          </h5>
        </div>
        <div className="project-right">
          <img
            className="image"
            src="https://user-images.githubusercontent.com/111864031/231532868-01940f26-6064-4abc-a620-c1c6b0937a29.png"
            alt="My Image"
          />
        </div>
      </animated.div>
      <animated.div className="project" style={animation}>
        <div className="project-left">
          <h4>Collab Me</h4>
          <h5>
            Realtime Chat Collaboration App made using Flutter ExpressJs and
            MongoDB
          </h5>
        </div>
        <div className="project-right">
          <img
            className="image"
            src="https://user-images.githubusercontent.com/111864031/231532868-01940f26-6064-4abc-a620-c1c6b0937a29.png"
            alt="My Image"
          />
        </div>
      </animated.div>
      <animated.div className="project" style={animation}>
        <div className="project-left">
          <h4>Collab Me</h4>
          <h5>
            Realtime Chat Collaboration App made using Flutter ExpressJs and
            MongoDB
          </h5>
        </div>
        <div className="project-right">
          <img
            className="image"
            src="https://user-images.githubusercontent.com/111864031/231532868-01940f26-6064-4abc-a620-c1c6b0937a29.png"
            alt="My Image"
          />
        </div>
      </animated.div>
      <animated.div className="project" style={animation}>
        <div className="project-left">
          <h4>Collab Me</h4>
          <h5>
            Realtime Chat Collaboration App made using Flutter ExpressJs and
            MongoDB
          </h5>
        </div>
        <div className="project-right">
          <img
            className="image"
            src="https://user-images.githubusercontent.com/111864031/231532868-01940f26-6064-4abc-a620-c1c6b0937a29.png"
            alt="My Image"
          />
        </div>
      </animated.div>
    </div>
  );
}

export default Projects;
