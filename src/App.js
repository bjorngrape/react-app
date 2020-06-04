import React, { Component } from 'react'
import Table from './Table'
import Form from './Form';

/* State
State can update private data from a component.
You can think of state as any data that should be saved and modified without necessarily being added to
a database for example, adding and removing items from a shopping cart before confirming your purchase.
==================================================================================================== */

class App extends Component { // En class component. Laddar in Component som en property till React. Stor bokstav för att skilja från vanliga HTML-element
  state = {
    characters: [], // En array av objects
  }

  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => { // updates the state by taking the existing this.state.characters and adding the new character parameter, using the ES6 spread operator
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() { // React DOM-metod för att rendera DOM nodes. Måste finnas i en class component
    const { characters } = this.state;

    return ( // return kan bara returnera ett parent element
      <div className="container">
        <h1>Good day!</h1>
        <p>Add something with a cool description to the table</p>
        <Table // Table är en child component med propertyn "characterData" och "removeCharacter". Variabeln "characters" och "this" skickar vidare datan
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add something fun</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }

}

export default App // Exportera component "App" in i "index.js"


/* Går att skriva såhär för hard-coded data

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
*/