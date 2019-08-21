import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ForestKing extends Component {
    render() {
        return (
            <div>
                <h3>You defeated the bear and are now the king of the forest. You have no need to return to society, the wild animals will now take care of you</h3>
                <img src='https://image.shutterstock.com/image-vector/vector-illustration-cute-forest-animals-260nw-1106481293.jpg' style={{height: "600px"}}alt='forest animals' />
                <div>
                    <Link to='/'><button>Start Again</button></Link>
                </div>
            </div>
        )
    }
}
