import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { getDoneNestedTasksLen } from "/src/utils/getDoneNestedTasksLen";
import {
  updateNestedTask,
  updateTask,
} from "/src/feature/collections/collectionsSlice";
import { styled } from "styled-components";
// import subTaskIcon from "src/assets/images/subTasksIcon.svg";

import Task from "../../../components/Task/Task";
import ExpansionList from "../../../components/Expansion Tasks List/ExpansionList";
import { IoCalendarClearOutline } from "react-icons/io5";
import { TbSubtask } from "react-icons/tb";

const TasksContainer2 = () => {
  const param = useParams();
  const { collections } = useSelector((store) => store.collections);
  const {
    tasks,
    color,
    id: collectionId,
    undone,
  } = collections.find((collection) => collection.id === param.id);

  const ListElements = tasks.map((task) => (
    <ExpansionList
      key={task.id}
      mainComponentClassNames={{ normal: styles.task }}
      mainComponent={Task}
      mainItem={{
        ...task,
        mainTaskId: task.id,
        checkBoxColor: color,
        collectionId,
        update: updateTask,
        nestedTasksLen: task.nestedTasks.length,
        doneNestedTasksLen: getDoneNestedTasksLen(task.nestedTasks),
        taskBody: MainTaskBody,
      }}
      subComponent={Task}
      subItems={task.nestedTasks.map((subTask) => {
        const { id: subTaskId, ...otherProp } = subTask;
        return {
          ...otherProp,
          subTaskId,
          checkBoxColor: color,
          collectionId,
          mainTaskId: task.id,
          update: updateNestedTask,
          taskBody: NestedTaskBody,
          classesNames: { task: styles["nested-task"] },
        };
      })}
    ></ExpansionList>
  ));
  return (
    <div className={styles.tasks}>
      <p className="medium">Tasks - {undone}</p>
      {ListElements}
    </div>
  );
};

const StyledMainTaskBody = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  & p:first-child {
    flex-grow: 1;
    flex-basis: 100%;
  }
  & img {
    width: 25px;
    margin: 0;
  }
`;
const MainTaskBody = (prop) => {
  const {
    doneNestedTasksLen,
    nestedTasksLen,
    deadLine,
    deadLineColor,
    title,
    completed,
    endDate,
  } = prop;
  return (
    <StyledMainTaskBody>
      <p
        className={`small-medium`}
        style={{ textDecoration: completed ? "line-through" : "unset" }}
      >
        {title}
      </p>
      {nestedTasksLen === 0 ? null : (
        <>
          <TbSubtask style={{ fontSize: "25px", color: "lightslategray" }} />
          <p className="small">
            {doneNestedTasksLen}/{nestedTasksLen}
          </p>
        </>
      )}
      {endDate ? (
        <>
          <IoCalendarClearOutline style={{ color: `${deadLineColor}` }} />
          <p className="small" style={{ color: `${deadLineColor}` }}>
            {deadLine}
          </p>
        </>
      ) : null}
    </StyledMainTaskBody>
  );
};

const NestedTaskBody = (props) => {
  const { completed, title } = props;
  return (
    <div>
      <p
        className={`small-medium`}
        style={{ textDecoration: completed ? "line-through" : "unset" }}
      >
        {title}
      </p>
    </div>
  );
};

export default TasksContainer2;
