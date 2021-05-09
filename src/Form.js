import React from 'react'

class Form extends React.Component {
	initialState = {
		name: "",
		desc: "",
	}
	
	state = this.initialState
	
	handleChange = (event) => {
		const {name, value} = event.target
		
		this.setState({
			[name]: value
		})
	}
	
	addTask = () => {
		if(this.state.name.length > 0) {
			this.props.handleTask(this.state)
			this.setState(this.initialState)
		}
	}
	
	render() {
		const { name, desc } = this.state;
		
		return (
				<form>
					<table>
						<tr>
							<td id="formDataCell">
								<input
									type="text"
									name="name"
									id="name"
									value={name}
									placeholder="New Task Name"
									onChange={this.handleChange} />
							</td>
							<td id="formDataCell">
								<input
									type="text"
									name="desc"
									id="desc"
									value={desc}
									placeholder="New Task Description (Optional)"
									onChange={this.handleChange} />
							</td>
							<td id="formDataCell">
								<input type="button" value="Add TODO List" onClick={this.addTask} />
							</td>
						</tr>
					</table>
				</form>
		)
	}	
}

export default Form;