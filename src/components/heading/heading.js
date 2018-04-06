import React, { Component } from 'react'
import {connect} from 'react-redux'
import action from '../../store/actions'

class Heading extends Component {
  constructor (props) {
    super()
    this.state = {
      title: ''
    }
  }
  handleKey = (e) => {
    if (e.keyCode === 13) {
      if (!this.state.title) return
      this.props.addTodo(this.state.title)
      this.setState({
        title: ''
      })
    }
  }
  handleChange = (e) => {
    this.setState({title: e.target.value})
  }
  render() {
    return (
      <div>
        <input type='text'
               className='form-control' 
               value={this.state.title} 
               onKeyUp={this.handleKey} 
               onChange={this.handleChange}/>
      </div>
    )
  }
}

export default connect(state => state, action.todos)(Heading)
