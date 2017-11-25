import React, { Component } from 'react';

const API = 'https://ywc15.ywc.in.th/api/interview';
// const DEFAULT_QUERY = 'redux';

class App extends Component {
  // state = {users: []}
  
  //   componentDidMount() {
  //     fetch('/users')
  //       .then(res => res.json())
  //       .then(users => this.setState({ users }));
  //   }
  
  //   render() {
  //     return (
  //       <div className="App">
  //         <h1>Users</h1>
  //         {this.state.users.map(user =>
  //           <div key={user.id}>{user.username}</div>
  //         )}
  //       </div>
  //     );
  // }
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch(API ) // + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ list: data }));
  }
  render() {
    const { list } = this.state;

    return (
      <div>
        {list.map(li =>
          <div key={li.interviewRef}>
            <p>{li.firstName} </p>
          </div>
        )}
      </div>
    );
  
  }

}

export default App;