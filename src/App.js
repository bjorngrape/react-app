import React, { Component } from 'react'
import Table from './Table'

/* State
State can update private data from a component.
You can think of state as any data that should be saved and modified without necessarily being added to a database
for example, adding and removing items from a shopping cart before confirming your purchase.
=================== */

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
}

removeCharacter = index => {
  const { characters } = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}

/* ta bort kommenentar 
render() {
  const { characters } = this.state

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
    </div>
  )
}
*/


/*

class App extends Component { // En class component. Laddar in Component som en property till React
  render() { // React DOM-metod för att rendera DOM nodes
    const characters = [ // En array av objects
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
    ]

    return ( // Table är en child component med propertyn "characterData". Variabeln "characters" skickar vidare datan
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}

*/

export default App // Exportera component "App" in i "index.js"