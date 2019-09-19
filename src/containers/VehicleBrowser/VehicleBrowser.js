import React,{Component} from 'react';
import { Container, Row, Col,Card,CardBody,CardImg, CardTitle, CardSubtitle,CardText
,NavLink } from 'reactstrap';
import Numeral from 'numeral';
import './VehicleBrowser.css'

class VehicleBrowser extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const vehicleData = this.props.data.map(item=>{
        return(
                <Col key={item.detailKey +'vb'} md={Math.ceil(12/this.props.data.length)}>
                <Card >
                    <CardImg top width={100} src={item.thumbnail} alt={item.altText}/>
                    <CardBody>
                        <CardTitle>
                         {item.year} {item.model}
                        </CardTitle>
                        <CardSubtitle>
                           {item.tagline}
                        </CardSubtitle>
                        <CardText>Starts at {Numeral(item.msrp).format('$0,0')}</CardText>
                        <NavLink href='/details'>Details</NavLink>
                        <NavLink href='/Build&price'>Build & Price</NavLink>
                        <NavLink href='/Dealership'>Dealer</NavLink>
                    </CardBody>
                </Card>
                </Col>
            );})

        return(<div className="VehicleBrowser" ><Row>{vehicleData}</Row></div>);
    }
}


export default VehicleBrowser;