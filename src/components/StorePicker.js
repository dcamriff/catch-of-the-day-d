import React from 'react'
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
  // constructor() {
  //     super();
  //     this.this.goToStore = this.goToStore.bind(this);
  // }
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    
    // 2. first grab text from the input
    const storeName = this.myInput.value.value;
    
    // 3. Change page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };


  render() {
    return (
    <form className="store-selector" onSubmit={this.goToStore}>
      <h2>Please Enter A Store</h2>
      <input 
        type="text" 
        required 
        placeholder="Store Name" 
        defaultValue={getFunName()} 
        ref={this.myInput}
        />
      <button type="submit">Visit Store →</button>
    </form>
    )
  }
}

// StorePicker.contextTypes = {
//     router: React.PropTypes.object
// }

export default StorePicker;