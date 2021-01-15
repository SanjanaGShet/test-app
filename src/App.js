import React, { Component } from 'react';
import { CardList } from '../src/components/card-list/card-list.component'
import { SearchBox } from '../src/components/search-box/search-box.component'

import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {  // setState is asynchronous status call
      // Asynchronous - it will take definite amount of time to react so javascript will continue to executing rest of the code then when the event is finished it will return that finished event
      // Synchronous - something that happens immediately.
      // and js know the amount of time it takes to complete and wait until it finish before it continues running the rest of the code
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
        .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
