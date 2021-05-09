import React from 'react'

//this is a simple component only containing the header info
const TableHeader = () => {
  return (
    <thead>
		<tr>
			<th>Task Name</th>
			<th>Task Description</th>
			<th></th>
		</tr>
    </thead>
  )
}

//this is a simple component only containing table body property (props)
const TableBody = (props) => {
  const rows = props.tasksData.map((row, index) => {
    return (
      <tr key={index}>
		<td>{row.name}</td>
		<td>{row.desc}</td>
		<td>
			<button id="completeButton" onClick={() => props.removeTask(index)}>X</button>
		</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const {tasksData, removeTask} = props

  return (
    <table>
      <TableHeader />
      <TableBody tasksData={tasksData} removeTask={removeTask} />
    </table>
  )
}

export default Table