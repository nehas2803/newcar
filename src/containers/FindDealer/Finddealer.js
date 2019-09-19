import React,{Component} from 'react';
import { Form,FormGroup,InputGroup, InputGroupAddon, InputGroupText, Input,Button } from 'reactstrap';
import axios from 'axios';
import {Row,Col,Table,ListGroup,ListGroupItem,Badge} from 'reactstrap';

class FindDealer extends Component{
constructor(props){
    super(props);
    this.state={
        searchTerm:'',dealership:null,stateCounter:null
    }
}

componentDidMount(){
    axios.get('http://localhost:3001/dealerships')
    .then(res=>{
       // console.log(res.data);
             
             let stateCounter = res.data.reduce(
            (dealerStateCount,dealer)=>{
                dealerStateCount[dealer.state]=(dealerStateCount[dealer.state]||0)+1;
            
         return dealerStateCount;   
             } );
        this.setState({dealership:res.data,stateCounter:stateCounter})
})}
InputHandler=(event)=>{
this.setState({searchTerm:event.target.value})
}
ClearHandler=(event)=>{
    event.preventDefault();
    this.setState({searchTerm:''})
    //this.props.history.push('/schedule-test-flight');
}
onListHandler=(event)=>{
event.preventDefault();
const stateClicked=event.target.text.split(" ")[0];
this.setState({searchTerm:stateClicked})

}
    render(){
        if(this.state.dealership){
            const filterstub = this.state.dealership.filter(d=>d.state.includes(this.state.searchTerm))
            let searchbar = <div><h>Over {this.state.dealership.lenght} dealer WorldWide</h>
            <Row>
                <Col sm={12} md={{size:6,offset:3}}>
                    <Form>
                        <FormGroup>
                            <InputGroup>
                            <Input type="text" value={this.state.searchTerm} 
                            name="User Address" placeholder="What state are u leaving in?" onChange={this.InputHandler}></Input>
                            <InputGroupAddon addonType='append'><Button onClick={this.ClearHandler}>X</Button></InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            </div>
            if(this.state.searchTerm.length<4){
               let stateCounterMarkup = null;
               if(this.state.stateCounter){
                stateCounterMarkup=<Row>
                    <Col sm={12} md={{size:10,offset:1}}>
                        <ListGroup>
                            {Object.keys(this.state.stateCounter).sort().
                            map((key,i)=>{
                               
                                    return(<ListGroupItem tag="a" href="#" key={key+i}
                                    onClick={this.onListHandler} className="justify-content-between">
                                        {key} <Badge pill>{this.state.stateCounter[key]}</Badge>
                                    </ListGroupItem>)
                                
                            })}
                        </ListGroup>
                    </Col>
                </Row>
                return(<div>
                    {searchbar}
                    {stateCounterMarkup}
                </div>)
               }
            }else{

            
            return(<h>{searchbar}
            <Row>
                <Col sm={12} md={{size:10,offset:1}}>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
            <th>dealershipName</th>
            <th>address</th>
            <th>city</th>
            <th>state</th>
            <th>zip</th> 
            <th>phone</th>
                    </tr>
                    </thead>
                    <tbody>
                        {filterstub.map((d,i)=>{
                            return(
                                <tr key={d.phone}>
                                    <td>{String(i)}</td>
                                    <td>{d.dealershipName}</td>
                                     <td>{d.address}</td>
                                     <td>{d.city}</td>
                                     <td>{d.state}</td>
                                     <td>{d.zip}</td> 
                                     <td>{d.phone}</td>
                                </tr>
                            );
                        })}
                        
                    </tbody>
            </Table>
            </Col>
            </Row>
            </h>);
        }}
        else {
            return null;
        }
       
    }
}
export default FindDealer;