import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./collectionDetails.module.css";
import CompletedTasksContainer from "./TasksContainer/CompletedTasksContainer";
import TasksContainer from "./TasksContainer/TasksContainer";
import { IoIosArrowBack } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";

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
          <IoIosArrowBack className={styles["navigate-back"]} /> <h3>{name}</h3>
          <HiDotsHorizontal className={styles.menu} />
        </div>
        <button className={`btn border ${styles["add-task"]}`}>
          <FaPlus style={{ backgroundColor: color }} />
          add a task
        </button>
        <TasksContainer />
        <CompletedTasksContainer />
      </div>
    </div>
  );
}

export default CollectionDetails;
