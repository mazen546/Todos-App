import React, { createContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledExpansionList = styled.div`
  transition: 0.5s;
`;
export const ExpansionContext = createContext();
const ExpansionListV3 = ({ children }) => {
  children = Array.isArray(children) ? children : [children];
  const [height, setHeight] = useState(0);
  const subTaskRef = useRef(null);
  const [open, setOpen] = useState(false);
  const firstChild = children[0];
  const secondChild = children[1];
  const handleOpening = () => {
    setHeight(subTaskRef.current.offsetHeight);
    setOpen(!open);
  };
  const onResize = () => {
    if (subTaskRef.current !== null) {
      setHeight(subTaskRef.current.offsetHeight);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => onResize());
    return () => window.removeEventListener("resize", () => onResize());
  }, []);
  useEffect(() => {
    onResize();
  }, []);
  return (
    <ExpansionContext.Provider value={{ open, handleOpening }}>
      <StyledExpansionList>
        {firstChild}
        <div
          style={{
            overflow: "hidden",
            height: open ? `${height}px` : "0",
            transition: "0.5s",
          }}
        >
          <div ref={subTaskRef}>{secondChild}</div>
        </div>
      </StyledExpansionList>
    </ExpansionContext.Provider>
  );
};

export default ExpansionListV3;
