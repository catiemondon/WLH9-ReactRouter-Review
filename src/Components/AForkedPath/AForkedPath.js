import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Choice1 extends Component {
    render() {
        return (
            <div>
                <h3>It's a warm summer day, you're on a pleasant summer stroll in the woods and come upon a fork in the path...</h3>
                <img src='https://media.gettyimages.com/vectors/fork-in-the-road-two-vector-id165900810?s=2048x2048' alt='forked path image' style={{height: '800px', width: '70%'}}/>
                <div className='button-container'>
                <Link to='/pile-of-gold'><button>Go Left</button></Link>
               <Link to='/wild-berries'> <button>Go Right</button></Link>
                </div>
            </div>
        )
    }
}
