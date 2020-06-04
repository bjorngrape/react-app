import React, { Component } from 'react'

/* Mål
Målet med formuläret blir att uppdatera state på Form varje gång ett fält ändras i formuläret,
och när man godkänner skickas all data till App state, som sen uppdaterar Table
================================================================================================== */

class Form extends Component {
  initialState = { // sätter initial state i Form till ett object med tomma properties
    name: '',
    description: '',
}
    state = this.initialState // assignar initial state till this.state
  

  /*
  Function som körs varje gång en ändring sker.
  Eventet sker och state av Form blir name (key) och value av ändringen.
  */
  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  /*
  Call handleSubmit-funtionen och skickar igenom Form state som en parameter.
  Resetar state till initial state för att resan formuläret efteråt.
  */
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, description } = this.state;
  
    return ( // returnerar våra two properties från state och ger dem värderna som matchar med form keys
      <form>

        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />

        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={this.handleChange} />

        <input type="button" value="Submit" onClick={this.submitForm} /> 

      </form>
    );
  }
}

export default Form;