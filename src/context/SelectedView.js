import React, { createContext, useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";

export const SelectedViewContext = createContext();

const SelectedViewProvider = ({ children }) => {
  const [selectedView, setSelectedView] = useState("top");

  const handleSelectedViewContent = useCallback((view) => {
    setSelectedView(view);
  }, []);

  const contextValue = useMemo(
    () => ({
      handleSelectedViewContent,
      selectedView,
    }),
    [handleSelectedViewContent, selectedView]
  );

  return (
    <SelectedViewContext.Provider value={contextValue}>
      {children}
    </SelectedViewContext.Provider>
  );
};

SelectedViewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SelectedViewProvider;
