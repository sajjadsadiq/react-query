import React, { useState } from 'react'
import Navbar from './components/Navbar'
import AllStudents from './pages/AllStudents';
import Five from './pages/Five';
import Four from './pages/Four';
import One from './pages/One';
import Three from './pages/Three';
import Two from './pages/Two';

const App = () => {
  const [page, setPage] = useState("allstudent")
  console.log(page);
  return (
    <div>
      <h2>Student List</h2>
      <Navbar setPage={setPage}/>

      <div className="content">
        {page === 'allstudent' && <AllStudents/>}
        {page === 'one' && <One/>}
        {page === 'two' && <Two/>}
        {page === 'three' && <Three/>}
        {page === 'four' && <Four/>}
        {page === 'five' && <Five/>}
      </div>
    </div>
  )
}

export default App