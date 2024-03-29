import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class WildBerries extends Component {
    render() {
        //you get to this component by going right down the right path
        return (
            <div>
                
                <h3>You continue down the right path and stumble upon some berry bushes</h3>
                <img src='https://image.shutterstock.com/image-vector/set-garden-bushes-flat-design-260nw-1053876182.jpg' alt='forked path image' style={{height: '700px', width: '70%'}}/>
                <div className='button-container'>
              <Link to='/die'> <button>Eat the berries</button></Link>
                <Link to='/bear'><button>Gather the berries</button></Link>
                </div>
            </div>
        )
    }
}
