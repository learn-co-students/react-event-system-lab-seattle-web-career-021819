// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {
  log(){
    console.log("Entering password...")
  }
  render(){
    return <input onKeyUp={this.log} type="password" />
  }
}
export default Keypad;
