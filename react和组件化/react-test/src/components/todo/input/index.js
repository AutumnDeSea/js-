import React, {Component } from 'react';
export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    changeHandle(event) {
        this.setState({
            title: event.target.value
        })
    }
    clickHandle() {
        const title = this.state.title;
        const addTitle = this.props.addTitle;
        addTitle(title);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.changeHandle.bind(this)} />
                <button onClick={() => this.clickHandle()}>submit</button>
            </div>
        )
    }
}