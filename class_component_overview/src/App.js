
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // componentDidMount() {
  //   this.setState({ count: this.state.count + 1 });
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (

      <div className="counter">
        <h1 className='border border-radius'>hellooo shobha</h1>
        <h1 className="count">{this.state.count}</h1>
        <div className="btn">
          <button type="button" onClick={this.handleIncrement}>
            Increment
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;



// class Forms extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { name:'',};
//   }

//   SubmitData = () => {
//     this.setState({ });
//   };


//   render() {
//     return (
//       <>
//         <div className="mb-3">
//           <label for="exampleFormControlInput1" className="form-label">Email address</label>
//           <input type="email" className="form-control" name='email' placeholder="name@example.com" />
//         </div>
//         <div className="mb-3">
//           <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//           <textarea className="form-control" name="txtname" rows="3"></textarea>
//         </div>
//         <div className="mb-3">
//           <button type="button" onClick={this.SubmitData}>Submit</button>
//         </div>

//       </>
//     );
//   }
// }

// export default Forms;