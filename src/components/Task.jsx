import React, { useContext } from "react";
import { useSelector } from "react-redux";
import CheckBox from "./CheckBox";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ExpansionContext } from "./Expansion Tasks List/ExpansionListV3";
import { TbSubtask } from "react-icons/tb";
import { IoCalendarClearOutline } from "react-icons/io5";
import { getDeadLine, getDeadLineColor } from "../utils/getDeadline";

const StyledTask = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  background: #21212b;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 10px;
  & > svg {
    margin-left: auto;
    font-size: 20px;
    flex-shrink: 0;
  }
`;
const Task = ({ taskId }) => {
  const { open, handleOpening } = useContext(ExpansionContext);
  const param = useParams();
  const {
    color,
    tasks,
    id: collectionId,
  } = useSelector((store) => store.collections).collections.find(
    (collection) => collection.id === param.id
  );
  const { title, done, nestedTasks, endDate } = tasks.find(
    (task) => task.id === taskId
  );
  const nestTasksLen = nestedTasks.length;
  const handelChange = (e) => {
    dispatch(update({ collectionId, taskId, checked: e.target.checked }));
  };
  const deadLine = getDeadLine(endDate);
  const deadLineColor = getDeadLineColor(endDate);
  return (
    <StyledTask>
      <CheckBox
        {...{
          color,
          checked: done,
          handelChange,
        }}
      />
      <div>
        <p>{title}</p>
        <div
          style={{ display: "flex", marginTop: "5px", alignItems: "center" }}
        >
          {nestTasksLen ? (
            <>
              <TbSubtask style={{ color: "#ccc", fontSize: "27px" }} />
              <p style={{ fontSize: "16px", margin: "0px 10px" }}>
                {0}/{0}
              </p>
            </>
          ) : (
            ""
          )}
          <IoCalendarClearOutline style={{ color: `${deadLineColor}` }} />
          <p
            className="small"
            style={{ color: `${deadLineColor}`, marginLeft: "5px" }}
          >
            {deadLine}
          </p>
        </div>
      </div>
      {nestTasksLen ? (
        open ? (
          <IoIosArrowDown onClick={handleOpening} />
        ) : (
          <IoIosArrowUp onClick={handleOpening} />
        )
      ) : (
        ""
      )}
    </StyledTask>
  );
};

export default Task;
