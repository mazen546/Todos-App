import CircularProgress from "@mui/joy/CircularProgress";
import icons from "../../assets/icons/icons";
import { useSelector } from "react-redux";

function CollectionCard(prop) {
  const { collections } = useSelector((store) => store.collections);
  const { iconName, color, name, total, done } = collections.find(
    (collection) => collection.id === prop.id
  );
  const Icon = icons.find((icon) => icon.name === iconName).component;
  return (
    <div
      className="collection"
      style={{
        padding: "20px",
        backgroundColor: "#21212b",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        flexBasis: "230px",
        flexGrow: "1",
        cursor: "pointer",
      }}
    >
      <Icon
        style={{
          backgroundColor: color,
          padding: "9px",
          width: "50px",
          height: "50px",
          borderRadius: "15px",
          marginBottom: "25px",
        }}
      />
      <h4>{`${name}`}</h4>
      <div
        className="done"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className="p-medium">
          {done}/{total} done
        </p>
        <CircularProgress
          color="danger"
          determinate
          value={Math.round((done / total) * 100)}
          size="sm"
          variant="soft"
          sx={{
            "--CircularProgress-size": "35px",
            "--CircularProgress-trackThickness": "5px",
            "--CircularProgress-progressThickness": "5px",
            "--CircularProgress-progressColor": `${color}`,
          }}
        />
      </div>
    </div>
  );
}

export default CollectionCard;
