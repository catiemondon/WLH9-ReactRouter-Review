import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Start from './Components/Start/Start';
import AForkedPath from './Components/AForkedPath/AForkedPath'
import WildBerries from './Components/WildBerries/WildBerries';
import APileOfGold from './Components/APileOfGold/APileOfGold'
import Leprechaun from './Components/Leprechaun/Leprechaun';
import Dragon from './Components/Dragon/Dragon';
import Dead from './Components/Dead/Dead'
import Love from './Components/Love/Love'
import Bear from './Components/ABear/ABear'
import ForestKing from './Components/ForestKing/ForestKing';
export default <Switch>
                <Route exact path='/' component={Start}/>
                <Route path='/forked-path' component={AForkedPath}/>
                <Route path='/wild-berries' component={WildBerries}/>
                <Route path='/pile-of-gold' component={APileOfGold}/>
                <Route path='/leprechaun' component={Leprechaun}/>
                <Route path='/dragon' component={Dragon}/>
                <Route path='/die' component={Dead}/>
                <Route path='/love' component={Love} />
                <Route path='/bear' component={Bear}/>
                <Route path='/forest-king' component={ForestKing}/>
                </Switch>