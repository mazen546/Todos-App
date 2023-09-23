import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { getDoneNestedTasksLen } from "/src/utils/getDoneNestedTasksLen";
import {
  updateNestedTask,
  updateTask,
} from "/src/feature/collections/collectionsSlice";
import { styled } from "styled-components";
import subTaskIcon from "src/assets/images/subTasksIcon.svg";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Task from "../../../components/Task/Task";
import React from "react";
import ExpansionList2 from "../../../components/Expansion Tasks List/ExpansionList2";

function TasksContainer2() {
  const param = useParams();
  const { collections } = useSelector((store) => store.collections);
  const {
    tasks,
    color,
    id: collectionId,
    undone,
  } = collections.find((collection) => collection.id === param.id);

  const TasksList = tasks.map((task) => {
    const subTaskItems = task.nestedTasks.map((subTask) => {
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
    });
    return (
      <ExpansionList2
        key={task.id}
        headComponentClassNames={{ normal: styles.task }}
        headComponent={Task}
        headItem={{
          ...task,
          mainTaskId: task.id,
          checkBoxColor: color,
          collectionId,
          update: updateTask,
          nestedTasksLen: task.nestedTasks.length,
          doneNestedTasksLen: getDoneNestedTasksLen(task.nestedTasks),
          taskBody: MainTaskBody,
        }}
        bodyComponent={Task}
        bodyItems={subTaskItems.length ? [] : subTaskItems}
      />
    );
  });
  return (
    <div className={styles.tasks}>
      <p className="medium">Tasks - {undone}</p>
      {TasksList}
    </div>
  );
}

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
