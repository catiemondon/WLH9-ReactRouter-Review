import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Dead extends Component {
    render() {
        return (
            <div>
                <h3>Oh no! You died!</h3>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhA8T3sJQaM6u25ilCyGdSVX4tl-E5x7VOR1s17e2pU_qWnbkRkA' alt='skull' style={{height: '500px', width: '30%'}}/>
                <div>
                 <Link to='/'> <button>Start Again</button></Link>
                </div>
            </div>
        )
    }
}
