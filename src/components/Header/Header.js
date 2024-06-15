import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.scss";
import ViewChangerSVG from "../ViewChanger/ViewChanger";
import FadeMenu from "../Menu/Menu";
import { SelectedViewContext } from "../../context/SelectedView";
import ViewChangerLeftSVG from "../ViewChanger/ViewChangerLeft";
import ViewChangerRightSVG from "../ViewChanger/ViewChangerRight";
import { AutoComplete } from "antd";
import { CloseSquareFilled } from "@ant-design/icons";
import { examplesExplore } from "../../pages/Explore/ExploreFun";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedView } = React.useContext(SelectedViewContext);
  const [viewSvgIcon, setViewSvgIcon] = React.useState(
    <ViewChangerSVG color="white" size="30px" />
  );
  const [searchValue, setSearchValue] = React.useState("");
  const [options, setOptions] = React.useState([]);

  const handleInputChange = (value) => {
    setSearchValue(value);
    if (value !== "") {
      const filteredArr = examplesExplore.filter((item) =>
        item.heading.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );

      const formattedOptions = filteredArr.map((item) => ({
        value: item.heading,
      }));

      setOptions(formattedOptions);
    } else {
      setOptions([]);
    }
  };

  const handleSelect = (value) => {
    navigate("/explore");
    setSearchValue("");
  };

  const handleCodeRoute = () => {
    navigate("/code");
  };

  const handleHomeRoute = () => {
    navigate("/");
  };

  const handleExploreRoute = () => {
    navigate("/explore");
  };

  React.useEffect(() => {
    if (selectedView === "top") {
      setViewSvgIcon(<ViewChangerSVG color="white" size="30px" />);
    } else if (selectedView === "left") {
      setViewSvgIcon(<ViewChangerLeftSVG color="white" size="30px" />);
    } else {
      setViewSvgIcon(<ViewChangerRightSVG color="white" size="30px" />);
    }
  }, [selectedView]);

  return (
    <div className="header">
      <div className="header-main-container">
        <h2 onClick={handleHomeRoute} className="header-logo">
          CODEPEN
        </h2>
        <div className="header-sub-container">
          <AutoComplete
            options={options}
            value={searchValue}
            onChange={handleInputChange}
            onSelect={handleSelect}
            placeholder="Search CodePen..."
            allowClear={{
              clearIcon: <CloseSquareFilled />,
            }}
            className="header-searchBar"
          />
          <div className="header-buttons">
            {location.pathname !== "/explore" && location.pathname !== "/" ? (
              <FadeMenu icon={viewSvgIcon} />
            ) : null}
            {location.pathname !== "/explore" &&
            location.pathname !== "/explore-editor" ? (
              <h2 className="header-start-coding" onClick={handleExploreRoute}>
                Explore
              </h2>
            ) : null}
            {location.pathname !== "/code" ? (
              <h2 className="header-start-coding" onClick={handleCodeRoute}>
                Start Coding
              </h2>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
