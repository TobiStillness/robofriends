import React, {Component} from 'react';
import CardList from './CardList';
// import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll.js';

class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    //Connecting to the API
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }
    onSearchChange = (event) =>{
        //Any time when you want to change state write this.setSate()
        this.setState( {searchfield: event.target.value})
        //Targeting the value of input
        // console.log(event.target.value);
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if( this.state.robots.length === 0){
            return <h1 className="tc">Loading...</h1>
        }else{
        return (
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}
}
export default App;