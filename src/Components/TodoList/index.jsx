// src/components/Hello.tsx

import React, { Component } from 'react';
import { Input, Button } from 'antd';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ],
      task: '',
    };
    this.updateTask = this.updateTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  updateTask(e) {
    this.setState({
      task: e.target.value,
    });
  }

  addTask() {
    let newData = [...this.state.data, this.state.task];
    this.setState({
      data: newData,
    });
  }

  completeTask(e) {}

  render() {
    let data = this.state.data;
    return (
      <div className="todolist">
        <Input value={this.state.task} onChange={this.updateTask} />
        <List data={data} />
        <Button onClick={this.addTask}>添加</Button>
      </div>
    );
  }
}

export default TodoList;

function List(props) {
  const listItems = props.data.map(item => <li>{item}</li>);
  return <ul>{listItems}</ul>;
}