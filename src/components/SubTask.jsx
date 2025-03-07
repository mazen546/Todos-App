import React from "react";
import { useSelector } from "react-redux";
import CheckBox from "./CheckBox";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyledTask = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: start;
  background: #21212b;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 10px;
`;
const Task = ({ taskId, subTaskId }) => {
  const param = useParams();
  const {
    color,
    tasks,
    id: collectionId,
  } = useSelector((store) => store.collections).collections.find(
    (collection) => collection.id === param.id
  );

  const { title, done } = tasks
    .find((task) => task.id === taskId)
    .nestedTasks.find((task) => task.id === subTaskId);
  const handelChange = (e) => {
    dispatch(update({ collectionId, taskId, checked: e.target.checked }));
  };
  return (
    <StyledTask>
      <CheckBox
        {...{
          color,
          checked: done,
          handelChange,
        }}
      />
      <p>{title}</p>
    </StyledTask>
  );
};

export default Task;
