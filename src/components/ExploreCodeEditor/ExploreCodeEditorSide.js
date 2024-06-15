import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { SelectedViewContext } from "../../context/SelectedView";
import { useLocation } from "react-router-dom";

export default function ExploreCodeEditorSide() {
  const { selectedView } = React.useContext(SelectedViewContext);

  const location = useLocation();
  const [html, setHtml] = useState(location.state.html);
  const [css, setCss] = useState(location.state.css);
  const [js, setJs] = useState(location.state.js);

  const TopView = () => {
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
            defaultValue="/* some comment"
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
  };

  const SideView = () => {
    return (
      <div className="code-editor1">
        <div style={{ height: "25%", width: "100%" }}>
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
        <div style={{ height: "25%", width: "100%" }}>
          <div className="code-editor-header">
            <div className="code-editor-header-items">
              <h2 className="code-editor-header-heading">CSS</h2>
            </div>
          </div>
          <Editor
            height="100%"
            theme="vs-dark"
            defaultLanguage="css"
            defaultValue="/* some comment"
            value={css}
            onChange={setCss}
          />
        </div>
        <div style={{ height: "25%", width: "100%" }}>
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
  };

  return <>{selectedView === "top" ? TopView() : SideView()}</>;
}
