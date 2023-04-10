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
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/89fae4167840535.642fce499dc92.png"
            alt="Dibujo de chica."
          />
        </figure>
      </div>
    );
  }
}

export default About;
