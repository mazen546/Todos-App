import { getDeadLine, getDeadLineColor } from "/src/utils/getDeadline";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import CheckBox from "../CheckBox";
const StyledTask = styled.div`
  display: flex;
  gap: 15px;
`;
function Task({
  disable,
  checkBoxColor: color,
  title,
  isDone,
  collectionId,
  mainTaskId,
  nestedTasksLen = 0,
  doneNestedTasksLen,
  subTaskId = null,
  endDate,
  taskBody: TaskBody,
  update,
  completed = false,
  classesNames = { task: "" },
}) {
  const deadLine = getDeadLine(endDate);
  const deadLineColor = getDeadLineColor(endDate);
  const dispatch = useDispatch();
  const handelChange = (e) => {
    dispatch(
      update({ collectionId, mainTaskId, subTaskId, checked: e.target.checked })
    );
  };
  return (
    <StyledTask className={`${classesNames.task}`}>
      <CheckBox
        {...{
          color,
          disable,
          checked: isDone,
          handelChange,
        }}
      />
      <TaskBody
        {...{
          deadLine,
          deadLineColor,
          title,
          nestedTasksLen,
          doneNestedTasksLen,
          completed,
          endDate,
        }}
      />
    </StyledTask>
  );
}

export default Task;
