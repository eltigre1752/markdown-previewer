import "./App.scss";
import React from "react";
import marked from "marked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrin,
  faCompress,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value,
    });
  }

  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized,
    });
  }
  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized,
    });
  }
  render() {
    const classes = this.state.editorMaximized
      ? ["editorWrap maximized", "previewWrap hide", faCompress]
      : this.state.previewMaximized
      ? ["editorWrap hide", "previewWrap maximized", faCompress]
      : ["editorWrap", "previewWrap", faArrowsAlt];
    return (
      <div>
        <div className={classes[0]}>
          <ToolBar
            icon={classes[2]}
            onClick={this.handleEditorMaximize}
            text="Editor"
          />
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>

        <div className={classes[1]}>
          <ToolBar
            icon={classes[2]}
            onClick={this.handlePreviewMaximize}
            text="Previewer"
          />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

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

const Editor = (props) => {
  return (
    <div>
      <textarea
        id="editor"
        onChange={props.onChange}
        type="text"
        value={props.markdown}
      />
    </div>
  );
};

const Preview = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown),
      }}
      id="preview"
    />
  );
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. yeah this is the end of demo!`;

export default App;
