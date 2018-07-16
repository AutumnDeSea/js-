import React, { Component } from 'react';
import List from './list';
import Input from './input'

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
	addTitle(title) {
		const curList = this.state.list;
		this.setState({
			list: curList.concat(title)
		})
	}
    
	render() {
		return (
			<div>
				<Input addTitle={this.addTitle.bind(this)}/>
				<List data={this.state.list}></List>
			</div>
		);
	}
}

export default Todo;
