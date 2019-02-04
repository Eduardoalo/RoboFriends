import React from 'react';
import CardList from '../Components/CardList';
import {robots} from '../Components/robot';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import 'tachyons';
import './App.css';

class App extends React.Component {

constructor(){
  super()
  this.state = {
  robots : [],
  searchField: '',
   }
}

componentDidMount(){
 
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({robots: users}));
}

onSearchChange = (event) => {
  this.setState({searchField: event.target.value });
  console.log(event.target.value);
}
render(){
  const filteredRobots = this.state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())});
  if (!this.state.robots.length ){
    return(<h1>Loading</h1>);
  }else{  
  return(
      <div className = 'tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange = {this.onSearchChange}/>
      <ErrorBoundry>
        <Scroll>
          <CardList robots = {filteredRobots}/>
        </Scroll>
      </ErrorBoundry>
      </div>
    );
  }
  }

}

export default App;
