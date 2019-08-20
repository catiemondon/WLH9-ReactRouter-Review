import React, { Component } from 'react'

export default class Dragon extends Component {
    render() {
        return (
            <div>
                 <h3>A wild Dragon appears... you need to get past it on the trail. Do you...</h3>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfWXEXgzwIbTKpBce4Gj8sGCYk9CdyW7BfEkOx2Pokkrr_xhkzw' alt='forked path image' style={{height: '700px', width: '40%'}}/>
                <div className='button-container'>
                <button>Flatter the Dragon</button>
                <button>Attack the Dragon</button>
                </div>
            </div>
        )
    }
}
