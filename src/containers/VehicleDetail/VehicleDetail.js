import React,{Component} from 'react';
import {Row,Col} from 'reactstrap';
import classes from './VehicleDetail.css'

class VehicleDetail extends Component{
    state={
        vehicleData:{},
        selectedVehicle:""
    }
    render(){
        const {selectedVehicle} = this.props.match.params;
        const selectedVehicledata = this.props.data.filter(vehicle=>vehicle.detailKey===selectedVehicle);
        return(
            <div>
                <Row>
                    <Col>
                    <img style={{height:'100%',width:'100%'}} src={selectedVehicledata[0].thumbnail}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h1>{selectedVehicledata[0].modelYear}</h1>
                    <h1>{selectedVehicledata[0].tagline}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={{size:6,offset:3}}>
                        <p>{selectedVehicledata[0].description}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default VehicleDetail;