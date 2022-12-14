import React from 'react'

const Navbar = ({setPage}) => {
  return (
    <div>
        <button onClick={ () => setPage('allstudent')}>All Student</button>
        <button onClick={ () => setPage('one')}>One</button>
        <button onClick={ () => setPage('two')}>Two</button>
        <button onClick={ () => setPage('three')}>Three</button>
        <button onClick={ () => setPage('four')}>Four</button>
        <button onClick={ () => setPage('five')}>Five</button>

        <br />
        <br />

        <select name="" id="" onChange={(e) => setPage(e.target.value)}>
            <option value="allstudent">All Student</option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
            <option value="five">Five</option>
        </select>
    </div>
  )
}

export default Navbar