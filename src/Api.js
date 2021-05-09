import React from 'react'

//this is an example of an API component
class Api extends React.Component {
	state = {
		data: [],
	}
	
	//below function is invoked at API class
	componentDidMount() {
		const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

		fetch(url)
			.then((result) => result.json())
			.then((result) => {
				this.setState({
					data: result,
			})
		})
	}
		
	render() {
		const {data} = this.state

		const result = data.map((entry, index) => {
			return <li key={index}>{entry}</li>
		})

		//return li object nested under ul
		return <ul>{result}</ul>
	}
}

export default Api