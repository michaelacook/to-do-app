import React, { Component } from 'react'

class Form extends Component {

    initialState = {
        item: ''
    }

    state = this.initialState;

    render() {
        const { item } = this.state;
        return(
            <form>
                <input 
                    type="text"
                    name="item"
                    value={item}
                    placeholder="New Item"
                    onChange={this.handleChange}
                />
                <input
                    type="button"
                    value="Add"
                    className="full-button"
                    onClick={this.submit}
                />
            </form>
        )
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ item: value, complete: false });
    }

    submit = () => {
        this.props.addItem(this.state.item);
        this.setState(this.initialState);
    }
}

export default Form;