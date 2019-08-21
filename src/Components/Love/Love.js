import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Love extends Component {
    render() {
        return (
            <div>
                <h3>You and the Dragon converse and slowly, you fall in love with the dragon, and they with you. You decide to stay in the forest and be the dragons partner</h3>
                <img src='https://media1.tenor.com/images/efacd5572fdf07d288b92fc717094baa/tenor.gif?itemid=5887794' alt='Shrek&Donkey' style={{height: '400px'}}/>
                <div>
                 <Link to='/'><button>Start Again</button></Link>
                </div>
            </div>
        )
    }
}
