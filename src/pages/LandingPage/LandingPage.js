import React from "react";
import "./landingPage.scss";
import { useNavigate } from "react-router-dom";
import { SettingFilled, DownOutlined } from "@ant-design/icons";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClickCodeRoute = () => {
    navigate("/code");
  };

  const handleClickExploreRoute = () => {
    navigate("/explore");
  };

  return (
    <div className="landingPage">
      <div className="landingPage-main-container">
        <div className="landingPage-sub-container1">
          <h2 className="landingPage-heading1">
            A front-end environment made for testing and learning.
          </h2>
          <h2 className="landingPage-heading2">
            The best place to build, test, and discover front-end code.
          </h2>
          <h2 className="landingPage-heading3">
            CodePen is a development environment for front-end designers and
            developers. Build and deploy a website, show off your work, build
            test cases to learn and debug, and find inspiration.
          </h2>
          <div className="landingPage-buttons">
            <button
              onClick={handleClickExploreRoute}
              className="landingPage-btn"
            >
              Explore
            </button>
            <button onClick={handleClickCodeRoute} className="landingPage-btn">
              Start Coding
            </button>
          </div>
        </div>
        <div className="landingPage-sub-container2">
          <div className="editor1">
            <div className="editor1-contents">
              <div className="editor1-content1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SettingFilled className="settings-icon" />
                  <h2 className="editor1-heading">HTML</h2>
                </div>
                <DownOutlined className="arrow-icon" />
              </div>
              <div className="editor1-content2">
                <h2 className="editor1-items brown-span">{"<div"} </h2>
                <h2 className="editor1-items yellow-span">{"class="}</h2>
                <h2 className="editor1-items green-span">{"'rect'"}</h2>
                <h2 className="editor1-items brown-span">{"></div>"}</h2>
              </div>
            </div>
            <div className="editor2-contents">
              <div className="editor1-content1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SettingFilled className="settings-icon" />
                  <h2 className="editor1-heading">CSS</h2>
                </div>
                <DownOutlined className="arrow-icon" />
              </div>
              <div className="editor1-content2">
                <h2 className="editor1-items yellow-span">{`.rect`}</h2>
                <h2 className="editor1-items">{`{`}</h2>
                <h2 className="editor1-items violet-span">{`background-color`}</h2>
                <h2 className="editor1-items">{`:`}</h2>
                <h2 className="editor1-items yellow-span">{`white`}</h2>
                <h2 className="editor1-items">{`}`}</h2>
              </div>
            </div>
            <div className="editor1-contents">
              <div className="editor1-content1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SettingFilled className="settings-icon" />
                  <h2 className="editor1-heading">JS</h2>
                </div>
                <DownOutlined className="arrow-icon" />
              </div>
              <div className="editor1-content2">
                <h2 className="editor1-items yellow-span">{`var`}</h2>
                <h2 className="editor1-items blue-span">{`colors`}</h2>
                <h2 className="editor1-items">{`=`}</h2>
                <h2 className="editor1-items">{`[`}</h2>
                <h2 className="editor1-items green-span">{`"#74B087","#DE7300","#74B087"`}</h2>
                <h2 className="editor1-items">{`];`}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
