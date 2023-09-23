import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./collectionDetails.module.css";
import { NavigateBefore, MoreVert, AddRounded } from "@mui/icons-material";
import CompletedTasksContainer from "./TasksContainer/CompletedTasksContainer";
import TasksContainer from "./TasksContainer/TasksContainer";

function CollectionDetails() {
  const param = useParams();
  const { collections } = useSelector((store) => store.collections);
  const { name, color } = collections.find(
    (collection) => collection.id === param.id
  );

  return (
    <div className={styles["collection-details"]}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <NavigateBefore className={styles["navigate-back"]} /> <h3>{name}</h3>
          <MoreVert className={styles.menu} />
        </div>
        <button className={`btn border ${styles["add-task"]}`}>
          <AddRounded style={{ backgroundColor: color }} />
          add a task
        </button>
        <TasksContainer />
        <CompletedTasksContainer />
      </div>
    </div>
  );
}

export default CollectionDetails;
