import React, {Component} from 'react';

export default class EyesOnMe extends Component {

  onBlur = () => console.log('Hey! Eyes on me!')

  onFocus = () => console.log('Good!')

  render() {
    return (
      <div>
        <button onFocus={this.onFocus} onBlur={this.onBlur}>
          Watch me!
        </button>
      </div>
    )
  }

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     eyes: 'focus'
  //   }
  // }
  //
  // toggleEyes = () => {
  //   if (this.state.eyes === 'focus') {
  //     console.log("Hey! Eyes on me!")
  //     return (
  //       this.state.eyes = 'blur'
  //     )
  //   } else {
  //     console.log("Good!")
  //     return (
  //       this.state.eyes = 'focus'
  //     )
  //   }
  //
  // }
  //
  // render(){
  //   return (
  //     <div>
  //       <button onClick={this.toggleEyes}>
  //         Watch me!
  //       </button>
  //     </div>
  //   )
  // }
}
