import React from 'react';
import * as Utils from '../../util/utils';

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //when a change is registered,
  //  this inner function (event) => {} is invoked
  update (key) {
    if (key === "title") {
      return (e) => {
        e.preventDefault();
        this.setState({title: e.target.value});
      };
    } else if (key === "body") {
      return (e) => {
        e.preventDefault();
        this.setState({body: e.target.value});
      };
    }

  }

  handleSubmit (e) {
    e.preventDefault();
    this.setState({id: Utils.uniqueId()});
    this.props.createTodo(this.state)
      .then(() => this.setState({title: '', body: ''}))
      .then(this.props.clearErrors);
  }

  //can include required in input to do frontend validation for fields
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.update('title')}/>
          <br></br>
          <input type="text" value={this.state.body} onChange={this.update('body')}/>
          <br></br>
          <input type="submit" value="Submit" />
          <br></br>
          <ul>{this.props.errors.map((error, index) => <li key={index}>{error}</li>)}</ul>
          
        </form>
      </div>
    );
  }
}

export default TodoForm;
