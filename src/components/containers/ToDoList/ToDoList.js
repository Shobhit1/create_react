import React from 'react'
import { connect } from 'react-redux'
import CheckBox from '../../formFields/CheckBox'

const ToDo = ({ item, index }) => (
  <li key={index}>
    <CheckBox value={item} label={item} name={item} />
    {item}
  </li>
)

const ToDoList = ({ list, className }) => (
  <div className={className}>
    <ul>
      {list.map((item, index) => <ToDo item={item} index={index} />)}
    </ul>
  </div>
)

const mapStateToProps = (state) => ({ list: state.todos.list })

export default connect(mapStateToProps, {})(ToDoList)