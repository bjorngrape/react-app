import React, { Component } from 'react'

/* Goal
Our goal for this form will be to update the state of Form every time a field is changed in the form,
and when we submit, all that data will pass to the App state, which will then update the Table
================================================================================================== */

class Form extends Component {
  initialState = { // sets the initial state of the Form to be an object with some empty properties
    name: '',
    description: '',
}
    state = this.initialState // assigns that initial state to this.state
  

  /* function that will run every time a change is made to an input.
  The event will be passed through, and we'll set the state of Form to have the name (key)
  and value of the inputs.
  */
  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  /* call the handleSubmit function, and pass the Form state through as the character parameter.
  It will also reset the state to the initial state, to clear the form after submit.
  */
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, description } = this.state;
  
    return ( // gets our two properties from state, and assign them as the values that correspond to the proper form keys
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