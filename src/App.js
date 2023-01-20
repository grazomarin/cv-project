import React, { Component } from "react";
import General from "./components/General";
import "./styles/App.scss";
import uniqid from "uniqid";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: [
        {
          name: "name",
          value: "",
          display: "Name",
          type: "text",
          id: uniqid(),
        },
        {
          name: "surname",
          value: "",
          display: "Surname",
          type: "text",
          id: uniqid(),
        },
        {
          name: "birthday",
          value: "",
          display: "Birthday",
          type: "date",
          id: uniqid(),
        },
        {
          name: "email",
          value: "",
          display: "Email",
          type: "email",
          id: uniqid(),
        },
        {
          name: "phone",
          value: "",
          display: "Phone Number",
          type: "phone",
          id: uniqid(),
        },
        {
          name: "address",
          value: "",
          display: "Address",
          type: "text",
          id: uniqid(),
        },
      ],
    };
  }

  updateContent = (updated, str) => {
    switch (str) {
      case "general":
        break;

      case "skills":
        break;

      case "education":
        break;

      case "experience":
        break;
    }

    this.setState({});
  };

  render() {
    return (
      <div className="cv">
        <General general={this.state.general} />
        <div className="skills"></div>
        <div className="education"></div>
        <div className="experience"></div>
      </div>
    );
  }
}
