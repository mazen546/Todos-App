import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { updateNestedTask } from "/src/feature/collections/collectionsSlice";
import React from "react";
import subTaskIcon from "src/assets/images/subTasksIcon.svg";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { styled } from "styled-components";
import Task from "../../../components/Task/Task";
import ExpansionList from "/src/components/Expansion Tasks List/ExpansionList";

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
        <React.Fragment>
          <img src={subTaskIcon} alt="" />
          <p className="small">
            {doneNestedTasksLen}/{nestedTasksLen}
          </p>
        </React.Fragment>
      )}
      {endDate ? (
        <React.Fragment>
          <CalendarTodayOutlinedIcon />
          <p className="small" style={{ color: `${deadLineColor}` }}>
            {deadLine}
          </p>
        </React.Fragment>
      ) : null}
    </StyledMainTaskBody>
  );
};

function CompletedTasksContainer() {
  const param = useParams();
  const { collections } = useSelector((store) => store.collections);
  const {
    completedTasks,
    color,
    id: collectionId,
    done,
  } = collections.find((collection) => collection.id === param.id);
  const listElements = completedTasks.map((task) => {
    const nestedTasksLen = task.nestedTasks.length;
    const { id: mainTaskId, ...otherProp } = task;

    return (
      <ExpansionList
        key={task.id}
        mainComponentClassNames={{ normal: styles.head }}
        mainComponent={Task}
        mainItem={{
          ...otherProp,
          checkBoxColor: color,
          mainTaskId,
          collectionId,
          disable: true,
          taskBody: MainTaskBody,
          nestedTasksLen,
          completed: true,
          doneNestedTasksLen: task.nestedTasks.length,
        }}
        subComponent={Task}
        subItems={task.nestedTasks.map((subTask) => {
          const { id: subTaskId, ...otherProp } = subTask;
          return {
            completed: true,
            ...otherProp,
            subTaskId,
            checkBoxColor: color,
            collectionId,
            mainTaskId: task.id,
            update: updateNestedTask,
            disable: true,
            taskBody: NestedTaskBody,
            classesNames: { task: styles["nested-task"] },
          };
        })}
      />
    );
  });

  return (
    <div className={styles["completed-tasks"]}>
      <p className="medium">Completed - {done}</p>
      {listElements}
    </div>
  );
}
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

export default CompletedTasksContainer;
