const EmployeeCard = ({
  id,
  name,
  age,
  salary,
  imageUrl
}) => {
  return (
    <div className={"employee-pool-card"}>
      <img
        src={imageUrl}
        alt={name}/>

      <span style={{
        display: "flex",
        flexDirection: "column" }}>
        <p><strong>ID:     </strong>{id}</p>
        <p><strong>NAME:   </strong>{name}</p>
        <p><strong>Age:    </strong>{age}</p>
        <p><strong>Salary: </strong>{salary}</p>
      </span>
    </div>
  );
};

export default EmployeeCard;
