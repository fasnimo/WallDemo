import React, {Component} from "react";
import Title from './Title';
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import {Link, Route} from 'react-router-dom'
import {removePost} from "../redux/actions"

class Main extends Component {
    constructor() {
        super()
    }

    render () {
        console.log(this.props)
      return (
            <div>
                <h1>
                    <Link to="/">Photowall</Link>
                </h1>
                <Route exact path = "/" render = {() => (
                    <Photowall {...this.props}/>
                )}/>
                <Route path = "/AddPhoto" render = {({history}) => (
                    <AddPhoto {...this.props} onHistory={history}/>
                )}/> 
            </div>
        )
    }
  }

export default Main