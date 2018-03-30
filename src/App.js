import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ko-KR";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <ReactSummernote
        value="Default value"
        options={{
          lang: "ko-KR",
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview"]]
          ]
        }}
        onChange={this.onChange}
      />
    );
  }
}

export default App;
