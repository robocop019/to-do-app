import React from 'react'

function ToDoItem() {
  const styles = {
    fontSize: '20px',
    color: 'slategrey',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  };

  return (
    <div style={styles}>
      <input type='checkbox' />
      <p> This is to do item. </p>
      <br/>
    </div>
    )
}

export default ToDoItem;



