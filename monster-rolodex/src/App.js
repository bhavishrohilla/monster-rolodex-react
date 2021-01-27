import React,{ Component } from 'react' ;
import { CardList } from './components/card-list/card-list.components';

import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    monsters : [],
    searchField: ''
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
        <input type='search' placeholder='Search monster' 
      onChange={e=>{
        this.setState({searchField: e.target.value})
        console.log(thi)
        }}
        />
        <CardList monsters={this.state.monsters}/>
        
    </div>
    );

  }
}

export default App;
