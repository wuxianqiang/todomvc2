import React, { Component } from 'react'
import {connect} from 'react-redux'
import action from '../../store/actions'

class Body extends Component {
  constructor(props) {
    super()
    this.state = {
      current: '',
      title: ''
    }
  }
  handleTitle = (e) => {
    this.setState({title: e.target.value})
  }
  handleChange = (item) => {
    this.props.changeOneTodo(item.id)
  }
  handleClick = (item) => {
    this.props.deleteOneTodo(item.id)
  }
  render() {
    return (
      <div className='container'>
        <ul>
          {
            this.props.todos.length ? <li className='list-group-item'>
              <input type='checkbox'
                     onChange={(e)=>{this.props.changeAllTodo(e.target.checked)}} 
                     checked={this.props.activeCount===0} />
              {this.props.activeCount === 0 ? '取消全选':'全部选中'}
            </li> : null
          }
          {
            this.props.todos.map((item, index) => {
              return <li key={index} className='list-group-item'>
                <div onDoubleClick={()=>{
                  this.setState({current: item, title: item.title})
                }} style={{display: this.state.current===item?'none':'block'}}>
                <input type='checkbox'
                       onChange={() => {this.handleChange(item)}} 
                       checked={item.completed} />
                <span style={{marginRight: '5px', textDecoration: item.completed?'line-through':''}}>
                  {item.title}
                </span>
                <span className='pull-right'>
                  <button className='btn btn-danger btn-xs' 
                          onClick={()=>{this.handleClick(item)}}>
                    X
                  </button>
                </span>
                </div>
                <div>
                  <input type='text'
                         style={{display: this.state.current===item?'block':'none'}} 
                         value={this.state.title} 
                         onChange={this.handleTitle} 
                         onBlur={()=>{
                           this.props.changeTitle(this.state.current.id, this.state.title)
                          this.setState({current: ''})
                         }} />
                </div>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(state => {
  return {
    todos: (state.todos).filter(item => {
        switch (state.filters) {
            case 'active':
                return !item.completed;
            case 'completed':
                return item.completed;
            default :
                return true;
        }
    }),
    activeCount: state.todos.filter(item => !item.completed).length
}
}, action.todos)(Body)
