import style from "./dashboard.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";
import icons from "../../assets/icons/icons";
import { ArrowForward } from "@mui/icons-material";
import Task from "/src/components/Task/Task";
import ExpansionList from "../../components/Expansion Tasks List/ExpansionList";
import { getTodayTasks } from "../../utils/getTodayTasks";
import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const MainBody = ({ iconComponent: Icon, color, name }) => {
  return (
    <div>
      <Icon style={{ backgroundColor: color }} />
      <p style={{ fontWeight: "500" }}>{name}</p>
    </div>
  );
};

const Massage = ({ massage }) => {
  return <p className={style["no-tasks"]}>{massage}</p>;
};

function Dashboard() {
  const { collections } = useSelector((store) => store.collections);
  const dropDownListElements = collections.map((collection) => {
    const Icon = icons.find(
      (icon) => icon.name === collection.iconName
    ).component;
    return (
      <ExpansionList
        key={collection.id}
        mainComponentClassNames={{
          normal: style.head,
        }}
        mainItem={{
          iconComponent: Icon,
          color: collection.color,
          name: collection.name,
        }}
        mainComponent={MainBody}
        subItems={getTodayTasks(collection).map((task) => {
          return {
            ...task,
            taskBody: TaskBody,
            classesNames: { task: style.task },
          };
        })}
        subComponent={Task}
        massageComponent={Massage}
        massageItem={{ massage: "No Tasks Today" }}
      >
        <Link to={`/collections/${collection.id}`} className={style["go-to"]}>
          <p className="small-medium">Go to Collection</p> <ArrowForward />
        </Link>
      </ExpansionList>
    );
  });

  return (
    <div className={style.dashboard}>
      <div className={`${style.container} container`}>
        <div className={style.header}>
          <h3>Dashboard</h3>
          <MoreHorizIcon className={style["menu-icon"]} />
        </div>
        <div className={style.title}>
          <h2 className="large">Good morning,</h2>
          <h2 className="large">Jane Deo</h2>
        </div>
        <div className={style.buttons}>
          <button className={style.active}>Daily Overview</button>
          <button>Statistics</button>
        </div>
        <div className={style.content}>{dropDownListElements}</div>
      </div>
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
const TaskBody = (prop) => {
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
          <p className="small">
            {doneNestedTasksLen}/{nestedTasksLen}
          </p>
        </React.Fragment>
      )}
      {endDate ? (
        <React.Fragment>
          <p className="small" style={{ color: `${deadLineColor}` }}>
            {deadLine}
          </p>
        </React.Fragment>
      ) : null}
    </StyledMainTaskBody>
  );
};

export default Dashboard;
