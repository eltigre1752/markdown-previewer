import "./styles/App.scss";
import React from "react";
import ToolBar from "./ToolBar";
import Preview from "./Preview";
import Editor from "./Editor";
import { faCompress, faArrowsAlt } from "@fortawesome/free-solid-svg-icons";

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
      ? ["editorWrap maximized", "hide", faCompress] // maximized editor, hide preview
      : this.state.previewMaximized
      ? ["hide", "previewWrap maximized", faCompress] // hide editor, maximized preview
      : ["editorWrap", "previewWrap", faArrowsAlt]; // show editor, show preview
    return (
      <div>
        <div className={classes[0]}>
          <ToolBar
            icon={classes[2]}
            onClick={this.handleEditorMaximize}
            text="Hong Van's Editor"
          />
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>

        <div className={classes[1]}>
          <ToolBar
            icon={classes[2]}
            onClick={this.handlePreviewMaximize}
            text="Hong Van's Previewer"
          />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

const placeholder = `# Welcome to my Markdown Previewer!

## This is a sub-heading
### And this is a smaler sub-heading  

This is some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// This is multi-line code:

function Example(props) {
  if (props == '\`\`\`') {
    return props;
  }
}
\`\`\`

You can make text **bold**...
Or _italic_.
Or... **_both!_**
And ~~crossing text~~.

This is a [links](https://www.facebook.com/), and this is
> Block Quotes!

This is a table:

A Header | B Header | C Header
------------ | ------------- | -------------
Your content | Your content  | Your content
content A | content B | content C

- And this is a lists.
  - Bulleted.
     - 3rd level.
        - 4th level.


1. This is numbered lists.
1. This is the end of demo!`;

export default App;
