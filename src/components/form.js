import React from 'react';


const Form = (props) => {
  return(
    <form onSubmit = { event => {
      event.preventDefault();
      const userInput = event.target.userInput.value
      props.updateList(userInput);

    }}>
    <input type="text" name="userInput" />
    <button type="submit">Add</button>
  </form>


  );
}


export default Form;
