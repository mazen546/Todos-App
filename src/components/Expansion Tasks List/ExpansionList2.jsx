import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useElementMargin } from "../../hooks/useElementMargin";
import { styled } from "styled-components";
const StyledParent = styled.div`
  display: flex;
  align-items: start;
`;
function ExpansionList2({
  headComponentClassNames = { normal: "", hide: "" },
  headItem,
  headComponent: HeadComponent,
  bodyItems = [],
  bodyComponent: BodyComponent,
}) {
  console.log(bodyItems);
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(false);
  const nestedTasksRef = useRef(null);
  const margins = useElementMargin(nestedTasksRef);

  const onResize = useCallback(() => {
    if (nestedTasksRef.current !== null) {
      setHeight(nestedTasksRef.current.offsetHeight + margins[0] + margins[2]);
    }
  }, [margins]);
  useEffect(() => {
    window.addEventListener("resize", () => onResize());
    return () => window.removeEventListener("resize", () => onResize());
  }, [bodyItems, onResize]);
  useEffect(() => {
    onResize();
  }, [bodyItems, onResize]);

  const handelShow = () => {
    onResize();
    setShow((prevState) => !prevState);
  };
  return (
    <div>
      <StyledParent
        className={`${headComponentClassNames.normal} ${
          show ? "" : headComponentClassNames.hide
        }`}
      >
        <HeadComponent {...headItem} />
        {bodyItems.length ? null : (
          <button
            className="btn"
            onClick={handelShow}
            style={{ marginLeft: "auto" }}
          >
            {show ? <ExpandLess /> : <ExpandMore />}
          </button>
        )}
      </StyledParent>
      <div
        style={{
          overflow: "hidden",
          height: show ? `${height}px` : "0",
          transition: "0.5s",
        }}
      >
        <div ref={nestedTasksRef}>
          <BodyComponent />
        </div>
      </div>
    </div>
  );
}

export default ExpansionList2;
