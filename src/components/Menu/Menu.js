import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ViewChangerSVG from "../ViewChanger/ViewChanger";
import ViewChangerLeftSVG from "../ViewChanger/ViewChangerLeft";
import ViewChangerRightSVG from "../ViewChanger/ViewChangerRight";
import { SelectedViewContext } from "../../context/SelectedView";

export default function FadeMenu({ icon }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { handleSelectedViewContent } = React.useContext(SelectedViewContext);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectedView = (view) => {
    handleSelectedViewContent(view);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {icon}
      </Button>
      <Menu
        style={{ marginTop: "10px" }}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            padding: "10px 10px",
          }}
        >
          <MenuItem
            onClick={() => handleSelectedView("left")}
            style={{ backgroundColor: "black", borderRadius: "5px" }}
          >
            <ViewChangerLeftSVG
              className="rotate-left"
              color="white"
              size="22px"
            />
          </MenuItem>
          <MenuItem
            onClick={() => handleSelectedView("top")}
            style={{ backgroundColor: "black", borderRadius: "5px" }}
          >
            <ViewChangerSVG color="white" size="22px" />
          </MenuItem>
          <MenuItem
            onClick={() => handleSelectedView("right")}
            style={{ backgroundColor: "black", borderRadius: "5px" }}
          >
            <ViewChangerRightSVG color="white" size="22px" />
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
