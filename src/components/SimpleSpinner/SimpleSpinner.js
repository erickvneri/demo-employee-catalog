import "./loading-spinner.css";

const SimpleSpinner = ({ style }) => {
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <div
        className={"loading-spinner"}>
      </div>
    </div>
  );
};

export default SimpleSpinner;