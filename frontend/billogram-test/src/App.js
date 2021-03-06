import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {API} from './constants';
import Customer from './components/Customer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    const options = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };
    axios.get(`${API}/customers`, {}, options)
      .then(res => {
        const customers = res.data;
        this.setState({ customers });
      });
  }

  render() {
    const style = {
      display: 'flex',
      flexWrap: 'wrap'
    };
    const customers = this.state.customers.map((customer, index) => {
      console.log(customer);
      return <Customer data={JSON.stringify(customer)} key={index} />
    });
    return (
      <div style={style}>
        {customers}
      </div>
    )
  }
}

export default App;
