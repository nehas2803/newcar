import React,{Component} from 'react';
import './App.css';
import Axios from 'axios';
import TopNav from './containers/TopNav';
import Home from './containers/Home/Home';
import Footer from './containers/Footer';
import {Route,BrowserRouter} from 'react-router-dom';
import FindDealer from '../src/containers/FindDealer/Finddealer'
import TestFlightForm from './containers/TestFlightForm/TestFlightForm';
import VehicleDetail from './containers/VehicleDetail/VehicleDetail';
class App extends Component  {
constructor(props){
  super(props);
  this.state={
    vehicledata:null
  }
}
 
  componentDidMount(){
    Axios.get('http://localhost:3001/vehicles')
    .then(res=>{
      console.log(res.data);
      this.setState({vehicledata:res.data})
    })
    .catch(error=>{
      console.log(`something went wrong ${error.data}`)
    })
  }
  render(){
   
    if(this.state.vehicledata){
      return(
        <BrowserRouter>
       <div className="App">
         <TopNav data={this.state.vehicledata}></TopNav>
         <Route path='/' exact render={(props)=><Home  {...props} data={this.state.vehicledata} ></Home>}></Route>
         <Route path='/flying-dealer' render={(props)=><FindDealer {...props}></FindDealer>}/>
         <Route path='/schedule-test-flight' component={TestFlightForm}/>
         <Route path='/details/:selectedVehicle' render={(props)=><VehicleDetail {...props} data={this.state.vehicledata}/>}/>
         <Footer></Footer>
           </div>
           </BrowserRouter>
      );
  
    }
    else{
      return(<h>loading.....</h>);
    }
  
    }
   
  }
 

export default App;
