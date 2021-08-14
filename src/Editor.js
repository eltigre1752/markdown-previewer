import "./styles/App.scss";
import React from "react";

const Editor = (props) => {
  return (
    <div>
      <textarea onChange={props.onChange} type="text" value={props.markdown} />
    </div>
  );
};
export default Editor;
