import React, { Component } from 'react'


export default class APileOfGold extends Component {
    render() {
        //this component is one of the options for path
        return (
            <div>
                 <h3>As you wander down the path, you see a pile of gold. If you took a piece or two it couldn't do THAT much harm...</h3>
                <img src='https://previews.123rf.com/images/lineartestpilot/lineartestpilot1401/lineartestpilot140110031/25269585-cartoon-pile-of-gold.jpg' alt='forked path image' style={{height: '700px', width: '60%'}}/>
                <div className='button-container'>
                <button>Take Some Gold</button>
                <button>Continue On</button>
                </div>
            </div>
        )
    }
}
