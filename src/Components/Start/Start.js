import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Start extends Component {
    render() {
        return (
            <div>
                <h1>Create your own story: React Router Edition</h1>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79akX_pCOrOqQirjyhag4_r3qlnh9YeZjfiBW2H3gZ1hBe2hQ' alt='book' style={{height: '500px'}} />
                <div>
                <Link to='/forked-path'><button >Lets Start</button></Link>
               </div>
            </div>
        )
    }
}
