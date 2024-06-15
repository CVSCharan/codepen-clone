import React from "react";
import { examplesExplore } from "./ExploreFun";
import "./explore.scss";
import { useNavigate } from "react-router-dom";

function ExplorePage() {
  const navigate = useNavigate();

  const exportModule = (exmp) => {
    const { html, css, js } = exmp;
    return `
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
    </html>`;
  };

  const handleClickExploreItem = (props) => {
    console.log(props);
    navigate("/explore-editor", {state: props});
  };

  return (
    <div className="explorePage">
      <div className="explorePage-main-container">
        {examplesExplore.map((item) => (
          <div
            onClick={() => handleClickExploreItem(item.content)}
            className="explorePage-sub-container"
          >
            <h2 className="explorePage-sub-container-heading">
              {item.heading}
            </h2>
            <iframe
              srcDoc={exportModule(item.content)}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;
