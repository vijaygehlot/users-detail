import React, {Component} from 'react';
import Card from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/jsonfile/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
      console.log(response.data);
    })
  };

  render() {
    if (!this.state.customerDetails)
      return (<p className="loader">Loading data........</p>)
    return (<div className="customerdetails">
      <Card bsStyle="success" className="centeralign">
        <Card.Heading>
          <Card.Title >{this.state.customerDetails.data.name}</Card.Title>
        </Card.Heading>
        <Card.Body>
          <p>Name : {this.state.customerDetails.data.name}</p>
          <p>Email : {this.state.customerDetails.data.email}</p>
          <p>Phone : {this.state.customerDetails.data.phone}</p>
          <p>City : {this.state.customerDetails.data.city}</p>
          <p>State : {this.state.customerDetails.data.state}</p>
          <p>Country : {this.state.customerDetails.data.country}</p>
          <p>Organization : {this.state.customerDetails.data.organization}</p>
          <p>Job Profile : {this.state.customerDetails.data.jobProfile}</p>
          <p>Additional Info : {this.state.customerDetails.data.additionalInfo}</p>
        </Card.Body>
      </Card>
    </div>)
  }
}
