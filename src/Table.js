import React from 'react'

/* Simple component
=================== */
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

/* Props
Props är ett effektivt sätt att skicka existerande data till en React component,
men component kan inte ändra props, de är read-only.
=================================================================== */

const TableBody = props => { // skickar igenom props som en parameter
  const rows = props.characterData.map((row, index) => { // går igenom en array för att returnera en lista med varje object i arrayen
    return (
      // använd alltid key när man gör listor i React, för att hjälpa till att identifiera varje objekt
      // skickar vidare key/index som en parameter, så filtreringsfunktionen vet vilket objekt som ska raderas
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.description}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>
}

/* Simple component
=================== */
const Table = props => { 
  const { characterData, removeCharacter } = props
    return ( 
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
}

export default Table