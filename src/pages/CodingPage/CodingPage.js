import React, { useContext } from "react";
import "./codingPage.scss";
import { SrcDocContext } from "../../context/SrcDocContext";
import { SelectedViewContext } from "../../context/SelectedView";
import CodeOutputTop from "../../components/CodeOutput/CodeOutput";
import CodeOutputSide from "../../components/CodeOutput/CodeOutputSide";
import CodeEditorTop from "../../components/CodeEditor/CodeEditor";
import CodeEditorSide from "../../components/CodeEditor/CodeEditorSide";

export default function CodingPage() {
  const { srcDocVal } = useContext(SrcDocContext);
  const { selectedView } = React.useContext(SelectedViewContext);

  const TopView = () => {
    return (
      <div className="codingPage">
        <div className="codingPage-main-container1">
          <CodeEditorTop />
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
          <CodeEditorSide />
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
          <CodeEditorSide />
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
