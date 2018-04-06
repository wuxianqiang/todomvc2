import React, { Component } from 'react'
import {connect} from 'react-redux'
import action from '../../store/actions'

class Footer extends Component {
  constructor (props) {
    super()
    console.log(props)
  }
  count = () => {
    return this.props.todos.filter(item => !item.completed).length
  }
  render() {
    return (
      <div className='row'>
        <div className='col' style={{lineHeight: '34px'}}>
          {this.count()?<span>你还有{this.count()}事情要做</span>:null}
        </div>
        <div className='col-8'>
        <button className={'btn '+(this.props.filters === 'all' ? 'btn-success': 'btn-default')}
                onClick={()=>{this.props.changeType('all')}}
        >
          全部
        </button>
        <button className={'btn '+(this.props.filters === 'active' ? 'btn-success': 'btn-default')}
                onClick={()=>{this.props.changeType('active')}}
        >
          未完成
        </button>
        <button className={'btn '+(this.props.filters === 'completed' ? 'btn-success': 'btn-default')}
                onClick={()=>{this.props.changeType('completed')}}
        >
          完成
        </button>

      </div>
      </div>
      
    )
  }
}

export default connect(state => state, action.filters)(Footer)
