import React,{Component} from 'react';
import {Alert,InputGroup, InputGroupAddon, InputGroupText,Form, FormGroup, Label, 
    Input, FormText,Card,CardBody,CardSubtitle,CardTitle,CardText,Button} from 'reactstrap';
import Axios from 'axios';

class TestFlightForm extends Component{
    constructor(props){
        super(props);
        this.state = {shoWSuccess:false, showDanger:false}
    }
    
    handlerInputChange = (event)=>{
     const target = event.target;
     const value = target.type === 'checkbox'?target.checked :target.value;
     const name = target.name;
     console.log(name);
     this.setState({[name]:value})
    }

    handleOnSubmit=(event)=>{
      event.preventDefault();
      Axios.post('http://localhost:3001/mailingList',{
        customerName:this.state.customerName,
        email:this.state.email,
        phone:this.state.phone,
        budget:this.state.budget
      })
      .then(res=>{
        this.setState({shoWSuccess:true,showDanger:false})
      })
      .catch(err=>{
        this.setState({shoWSuccess:false,showDanger:true})
      })

    }
   
    render(){
      return(
          <div>
          <Card>
              <CardBody>
                  <CardTitle>Schedule a Test Flight</CardTitle>
                  <CardSubtitle>No pilot's license required</CardSubtitle>
                  <CardText>Fill out the below form</CardText>
                  <Form>
        <FormGroup>
           <Input type="text" name="customerName" id="customername" placeholder="Plz type your Name" onChange={this.handlerInputChange} />
        </FormGroup>
        <br/>
        <FormGroup>
         <Input type="text" name="phone" id="phone" placeholder="Plz type your phone no" onChange={this.handlerInputChange}/>
        </FormGroup>
         <br/>
          <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input type="text" name="email" id="email" placeholder="Plz type your email" onChange={this.handlerInputChange}/>
      </InputGroup>
      <br/>
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input type="text" name="budget" id="budget" placeholder="Plz type your budget" onChange={this.handlerInputChange}/>
      </InputGroup>
      </Form>
      <br/>
      <Button onClick={this.handleOnSubmit}>Submit</Button>
      <br/>
      <Alert isOpen={this.state.shoWSuccess} color="success">Success</Alert>
      <br/>
      <Alert isOpen={this.state.showDanger} color="danger">Something went wrong</Alert>
      
        </CardBody>
          </Card>
          </div>
      )
    }
}
export default TestFlightForm;