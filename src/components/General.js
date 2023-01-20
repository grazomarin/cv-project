import React, { Component } from "react";
import "../styles/General.scss";

export default class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      buttonText: "submit",
      general: [...this.props.general],
    };
  }

  toggleEditMode = () => {
    if (this.state.edit === true) {
      this.setState({
        edit: false,
        buttonText: "edit",
      });
    } else {
      this.setState({
        edit: true,
        buttonText: "submit",
      });
    }
  };

  onInputChange = (id, e) => {
    this.setState({
      general: this.state.general.map((obj) => {
        if (`${obj.id}` === `${id}`) obj.value = e.target.value;
        return obj;
      }),
    });
  };

  renderEdit = () => {
    return (
      <form action="" className="general">
        {this.state.general.map((obj) => {
          return (
            <div key={obj.key}>
              <label htmlFor={obj.name}>{obj.display}: </label>
              <input
                id={obj.name}
                type={obj.type}
                value={obj.value}
                onChange={(e) => this.onInputChange(obj.id, e)}
              />
            </div>
          );
        })}
      </form>
    );
  };

  renderRead = () => {
    return (
      <div className="general">
        {this.state.general.map((obj) => {
          return (
            <div key={obj.id}>
              {obj.display}: {obj.value}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    let content;
    if (this.state.edit) {
      content = this.renderEdit();
    } else {
      content = this.renderRead();
    }

    return (
      <div className="cont">
        {content}
        <button className="toggle" onClick={this.toggleEditMode}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}
