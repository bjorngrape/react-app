import React, { Component } from 'react'

/* Simple component
=================== */
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

/* Props
Props are an effective way to pass existing data to a React component,
however the component cannot change the props - they're read-only
=================== */

const TableBody = props => { // pass the props through as a parameter
  const rows = props.characterData.map((row, index) => { // map through the array to return a table row for each object in the array
    return (
      // always use keys when making lists in React, as they help identify each list item
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

/* Simple component
================== */
const Table = props => { 
    const { characterData, removeCharacter } = props

    return ( 
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }

/* Går att skriva sådär eller göra en simple component i en class component som ovan
class Table extends Component { // stor bokstav för att skilja från vanliga HTML-element
  render() { // class component måste innehålla render()
    return ( // return kan bara returnera ett parent element
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
*/

export default Table