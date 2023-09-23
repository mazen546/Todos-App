import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useElementMargin } from "../../hooks/useElementMargin";
import List from "/src/components/List/List";
import { styled } from "styled-components";
const StyledParent = styled.div`
  display: flex;
  align-items: start;
`;
function ExpansionList({
  mainComponentClassNames = { normal: "", hide: "" },
  mainItem,
  mainComponent: MainComponent,
  subItems,
  subComponent: SubComponent,
  massageItem = null,
  massageComponent: MassageComponent,
  children = [],
}) {
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(false);
  const nestedTasksRef = useRef(null);
  const margins = useElementMargin(nestedTasksRef);

  const onResize = () => {
    if (nestedTasksRef.current !== null) {
      setHeight(nestedTasksRef.current.offsetHeight + margins[0] + margins[2]);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => onResize());
    return () => window.removeEventListener("resize", () => onResize());
  }, [subItems]);
  useEffect(() => {
    onResize();
  }, [subItems]);

  const handelShow = () => {
    onResize();
    setShow((prevState) => !prevState);
  };
  return (
    <div>
      <StyledParent
        className={`${mainComponentClassNames.normal} ${
          show ? "" : mainComponentClassNames.hide
        }`}
      >
        <MainComponent {...mainItem} />
        {subItems.length === 0 && massageItem === null ? null : (
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
          {subItems.length === 0 ? (
            massageItem === null ? null : (
              <MassageComponent {...massageItem} />
            )
          ) : (
            <List items={subItems} itemComponent={SubComponent} />
          )}
        </div>
      </div>
      {children.length === 0 ? null : children}
    </div>
  );
}

export default ExpansionList;
