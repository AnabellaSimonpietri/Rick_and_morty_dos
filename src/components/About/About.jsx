import React from "react";
import style from "./About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.content}>
        <figure>
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/808/d12e88167218423.Y3JvcCwxMDgwLDg0NCwwLDExNw.png"
            alt="Dibujo de chica programadora."
          />
        </figure>
      </div>
    );
  }
}

export default About;
