import React, { Component } from 'react'
import Heading from '../heading/heading';
import Body from '../body/body'
import Footer from '../footer/footer'

class Todo extends Component {
  render() {
    return (
      <div className='container' style={{marginTop: '10px'}}>
        <div className='row'>
          <div className='col-6 col-offset-3'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <Heading />
              </div>
              <div className='panel-body'>
                <Body />
              </div>
              <div className='panel-footer'>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Todo
