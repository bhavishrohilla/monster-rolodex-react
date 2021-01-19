import React,{ Component } from 'react' ;
import './App.css';

class App extends Component {
constructor() {
  super();         //super()

  this.state = {
    monsters : []
  };
}
//now using lifecycle method
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  //taking a response and converting it into json that javascript can understand
  .then(response => response.json())
  //taking that users that wer got back then and setting out monsters to that arrtay of users
  .then(users => this.setState({monsters : users}));
}

  render() {
    return(
      <div className="App">
        {this.state.monsters.map(monsters => (
          <h1 key={monsters.id}> { monsters.name } </h1>))}
    </div>
    );

  }
}

export default App;
