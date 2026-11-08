// Presentational component: receives all data through props
function StudentInfo(props) {
  return (
    <div className="Student-info">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>{props.studentId}</h3>
      <h4>{props.studentName}</h4>
      <h5>{props.college}</h5>
    </div>
  );
}

export default StudentInfo;
