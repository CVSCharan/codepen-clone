import React, { useEffect, useState } from "react";
import CodeOutputSide from "../CodeOutput/CodeOutputSide";
import CodeOutputTop from "../CodeOutput/CodeOutput";
import { SelectedViewContext } from "../../context/SelectedView";
import { useLocation } from "react-router-dom";
import ExploreCodeEditorTop from "../ExploreCodeEditor/ExploreCodeEditor";
import ExploreCodeEditorSide from "../ExploreCodeEditor/ExploreCodeEditorSide";

function ExploreCodingPage() {
  const { selectedView } = React.useContext(SelectedViewContext);
  const location = useLocation();
  const [srcDocVal, setSrcDocVal] = useState(`
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
          <style>${location.state.css}</style>
        </head>
        <body>${location.state.html}</body>
        <script>${location.state.js}</script>
      </html>
      `);

  useEffect(() => {
    setSrcDocVal(` 
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
          <style>${location.state.css}</style>
        </head>
        <body>${location.state.html}</body>
        <script>${location.state.js}</script>
      </html>
      `);
  }, [location.state]);

  const TopView = () => {
    return (
      <div className="codingPage">
        <div className="codingPage-main-container1">
          <ExploreCodeEditorTop />
        </div>
        <div className="codingPage-main-container2">
          <CodeOutputTop srcDoc={srcDocVal} />
        </div>
      </div>
    );
  };

  const LeftView = () => {
    return (
      <div className="codingPage1">
        <div className="codingPage-main-container3">
          <ExploreCodeEditorSide />
        </div>
        <div className="codingPage-main-container4">
          <CodeOutputSide srcDoc={srcDocVal} />
        </div>
      </div>
    );
  };

  const RightView = () => {
    return (
      <div className="codingPage2">
        <div className="codingPage-main-container3">
          <ExploreCodeEditorSide />
        </div>
        <div className="codingPage-main-container4">
          <CodeOutputSide srcDoc={srcDocVal} />
        </div>
      </div>
    );
  };

  return (
    <>
      {selectedView === "top" ? TopView() : null}
      {selectedView === "left" ? LeftView() : null}
      {selectedView === "right" ? RightView() : null}
    </>
  );
}

export default ExploreCodingPage;
