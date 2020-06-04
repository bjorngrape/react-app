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
Props are an effective way to pass existing data to a React component,
however the component cannot change the props - they're read-only
=================================================================== */

const TableBody = props => { // pass the props through as a parameter
  const rows = props.characterData.map((row, index) => { // map through the array to return a table row for each object in the array
    return (
      // always use keys when making lists in React, as they help identify each list item
      // pass the key/index through as a parameter, so the filter function knows which item to remove
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