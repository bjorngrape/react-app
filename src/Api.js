import React, { Component } from 'react'

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() { // En React lifecycle method. Mounting insertar ett item i DOM, lifecycle bestämmer ordningen metoderna anropas av React. 
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Broder+Daniel&format=json&origin=*'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const { data } = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
  }
}

export default App