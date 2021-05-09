import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

const message = "TODO List"

class App extends Component {
	state = {
		tasks: [],
	}
	
	removeTask = (index) => {
		const {tasks} = this.state
		this.setState({
			tasks : tasks.filter((task, charIndex) => {
				return charIndex !== index
			}),
		})
	}
	
	handleTask = (task) => {
		this.setState({tasks: [...this.state.tasks, task]})
	}
	
	render() {
	  const { tasks } = this.state

	  return (
		<div className="container">
			<h1>{message}</h1>
			<Form handleTask={ this.handleTask }/>
			<Table tasksData={tasks} removeTask={this.removeTask} />
		</div>
	  )
	}
}

//default for a single class
export default App

//export for multiple classes;
//export {App, App1}; //import { App, App1 } from './ToDo.js'