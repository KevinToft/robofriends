import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import { render } from '@testing-library/react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>

            </div>
        );
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }


}

export default App;