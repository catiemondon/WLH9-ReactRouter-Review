import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ABear extends Component {
    render() {
        return (
            <div>
                <h3>You gather the berries and begin to continue down the path when a bear appears!</h3>
                <img src='https://cdn5.vectorstock.com/i/1000x1000/29/84/grizzly-brown-bear-cute-cartoon-funny-kawaii-vector-18802984.jpg' alt='bear' style={{height: "700px"}}/>
                <div className='button-container'>
               <Link to='/forest-king'><button>Fight the bear</button></Link>
               <Link to='/die'><button>Give the berries to the bear</button></Link>
                </div>
            </div>
        )
    }
}
