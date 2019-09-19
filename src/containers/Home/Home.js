import React,{Component} from 'react';
import SiteCarousal from '../SiteCarousal/SiteCarousal';
import VehicleBrowser from '../VehicleBrowser/VehicleBrowser';
class Home extends Component{
    constructor(props){
        super(props);

    }
    render(){
        console.log('neha')
        console.log(this.props.history)
        return(<div>
            
            <SiteCarousal data={this.props.data}>
        </SiteCarousal>
        <VehicleBrowser data={this.props.data}/></div>);
    }
}


export default Home;