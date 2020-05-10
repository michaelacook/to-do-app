import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = this.getSavedState();
    }


    render() {
        const { items } = this.state;
        return (
            <div className="small-container">
                <div className="margin-bottom">
                    <h1>To Do List</h1>
                </div>
                <Table toDoItems={items} removeItem={this.removeItem} completeItem={this.completeItem} count={this.state.count} />
                {this.state.count === 0 ? <p>You have no items yet.</p> : ""}
                <Form addItem={this.addItem} />
            </div>
        )
    }


    completeItem = index => {
        const newItems = this.state.items.slice();
        newItems.forEach((item, i) => {
            if (index === i) {
                item.complete = true;
            }
        });
        this.setState({ items: newItems }, this.saveState);
    }


    addItem = item => {
        this.setState({ items: [...this.state.items, {item}] });
        const newCount = this.state.count+=1;
        this.setState({ count: newCount }, this.saveState)
    }


    removeItem = index => {
        const { items } = this.state;
        const newItems = items.filter((item, i) => i !== index);
        this.setState({ items: newItems });
        const newCount = this.state.count-=1;
        this.setState({ count: newCount }, this.saveState);
    }


    saveState() {
        localStorage.clear();
        const newState = JSON.stringify(this.state);
        localStorage.setItem('state', newState);
    }


    getSavedState() {
        const state = localStorage.getItem('state');
        if (state) {
            return JSON.parse(state);
        } else {
            return {
                items: [],
                count: 0
            }
        }
    }
}

export default App