import React, { useContext, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { SrcDocContext } from "../../context/SrcDocContext";
import "./codeEditor.scss";
import { SelectedViewContext } from "../../context/SelectedView";

export default function CodeEditorSide() {
  const { handleSrcDocContent } = useContext(SrcDocContext);
  const { selectedView } = React.useContext(SelectedViewContext);

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    handleSrcDocContent(srcDoc);
  }, [srcDoc, handleSrcDocContent]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
       <!DOCTYPE html>
      <html lang="en" style="height: 100%; width: 100%;">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            html, body {
              height: 100%;
              width: 100%;
              margin: 0;
              padding: 0;
            }
          </style>
          <!-- Include any additional head elements here -->
          <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
      </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

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
            defaultValue="body{background-color: black;}"
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
