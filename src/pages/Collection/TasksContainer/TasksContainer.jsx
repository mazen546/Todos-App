import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import Task from "../../../components/Task";
import { IoCalendarClearOutline } from "react-icons/io5";
import { TbSubtask } from "react-icons/tb";
import ExpansionListV3 from "../../../components/Expansion Tasks List/ExpansionListV3";
import SubTask from "../../../components/SubTask";
import SubTasks from "../../../components/SubTasks";

const TasksContainer2 = () => {
  const param = useParams();
  const { collections } = useSelector((store) => store.collections);
  const { tasks, undone } = collections.find(
    (collection) => collection.id === param.id
  );

  return (
    <div className={styles.tasks}>
      <p className="medium">Tasks - {undone}</p>
      {tasks.map((task) => (
        <ExpansionListV3 key={task.id}>
          <Task key={task.id} taskId={task.id} />
          <SubTasks>
            {task.nestedTasks.map((nestedTask) => (
              <SubTask
                key={nestedTask.id}
                taskId={task.id}
                subTaskId={nestedTask.id}
              />
            ))}
          </SubTasks>
        </ExpansionListV3>
      ))}
    </div>
  );
};

export default TasksContainer2;
