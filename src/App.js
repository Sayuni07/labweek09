import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentInfo from './StudentInfo';

function App() {
  // Data kept in the component's state object
  const [info] = useState({
    title: 'Welcome to Fullstack Development - I',
    subtitle: 'React JS Programming Week09 Lab exercise',
    studentId: '101563313',
    studentName: 'Sayuni Wimaladharma',
    college: 'George Brown Polytechnic, Toronto',
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* State values are passed down to the child component as props */}
        <StudentInfo
          title={info.title}
          subtitle={info.subtitle}
          studentId={info.studentId}
          studentName={info.studentName}
          college={info.college}
        />
      </header>
    </div>
  );
}

export default App;
