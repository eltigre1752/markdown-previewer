import "./styles/App.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrin } from "@fortawesome/free-solid-svg-icons";

const ToolBar = (props) => {
  return (
    <div className="toolbar">
      <FontAwesomeIcon className="ico" icon={faGrin} />
      {props.text}
      <FontAwesomeIcon
        className="ico ico2"
        icon={props.icon}
        onClick={props.onClick}
      />
    </div>
  );
};

export default ToolBar;
