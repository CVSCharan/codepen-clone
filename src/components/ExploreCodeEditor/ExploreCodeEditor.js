import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { useLocation } from "react-router-dom";

function ExploreCodeEditorTop() {
  const location = useLocation();
  const [html, setHtml] = useState(location.state.html);
  const [css, setCss] = useState(location.state.css);
  const [js, setJs] = useState(location.state.js);

  return (
    <div className="code-editor">
      <div style={{ height: "100%", width: "33%" }}>
        <div className="code-editor-header">
          <div className="code-editor-header-items">
            <h2 className="code-editor-header-heading">HTML</h2>
          </div>
        </div>
        <Editor
          height="100%"
          theme="vs-dark"
          defaultLanguage="html"
          defaultValue="// some comment"
          onChange={setHtml}
          value={html}
        />
      </div>
      <div style={{ height: "100%", width: "33%" }}>
        <div className="code-editor-header">
          <div className="code-editor-header-items">
            <h2 className="code-editor-header-heading">CSS</h2>
          </div>
        </div>
        <Editor
          height="100%"
          theme="vs-dark"
          defaultLanguage="css"
          defaultValue="body{background-color: black;}"
          value={css}
          onChange={setCss}
        />
      </div>
      <div style={{ height: "100%", width: "33%" }}>
        <div className="code-editor-header">
          <div className="code-editor-header-items">
            <h2 className="code-editor-header-heading">JS</h2>
          </div>
        </div>
        <Editor
          height="100%"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          value={js}
          onChange={setJs}
        />
      </div>
    </div>
  );
}

export default ExploreCodeEditorTop;
