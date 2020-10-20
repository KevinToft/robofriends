import React from 'react';
import Scroll from '../components/Scroll'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { render } from '@testing-library/react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}))
    }

    render() {
        const {searchfield, robots} = this.state;
        const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return (!robots.length) ? <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }


}

export default App;