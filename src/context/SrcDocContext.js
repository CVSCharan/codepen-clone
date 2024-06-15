import React, { createContext, useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";

export const SrcDocContext = createContext();

const SrcDocProvider = ({ children }) => {
  const [srcDocVal, setSrcDocVal] = useState("");

  const handleSrcDocContent = useCallback((content) => {
    setSrcDocVal(content);
  }, []);

  const contextValue = useMemo(
    () => ({
      handleSrcDocContent,
      srcDocVal,
    }),
    [handleSrcDocContent, srcDocVal]
  );

  return (
    <SrcDocContext.Provider value={contextValue}>
      {children}
    </SrcDocContext.Provider>
  );
};

SrcDocProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SrcDocProvider;
