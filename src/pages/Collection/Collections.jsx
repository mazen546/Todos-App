import style from "./collections.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CollectionCard from "./CollectionCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Collections() {
  const { collections } = useSelector((store) => store.collections);
  const CollectionsElements = collections.map((collection) => (
    <Link to={collection.id} key={collection.id}>
      <CollectionCard {...collection} />
    </Link>
  ));
  return (
    <div className={style.collections}>
      <div className={`${style.container} container`}>
        <div className={style.header}>
          <h3>Collections</h3>
          <MoreHorizIcon className={style["menu-icon"]} />
        </div>
        <div className={style.buttons}>
          <button>Favorites</button>
          <button className={style.active}>All Collections</button>
        </div>
        <div className={style["collections-container"]}>
          {CollectionsElements}
          <button className={style["add-collection"]}>
            <AddRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collections;
