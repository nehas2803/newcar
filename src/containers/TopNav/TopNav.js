import React,{Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import {Link} from 'react-router-dom';

class TopNav extends Component{
    constructor(props) {
        super(props);
    
        
        this.state = {
          isOpen: false
        };
      }
      toggle=()  => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
      
      
           let vehicledata = this.props.data.map((item,index)=>{
                return(<DropdownItem key={item.detailKey}>
                        <Link to={{pathname:"/details/"+item.detailKey}}> {item.model}</Link>
                   </DropdownItem>);
            })
        
        
        return(<div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Flying Car DealerShip</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/"><i className="fas fa-igloo"></i>Home</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    <i className="fas fa-plane-departure"></i>Flying Cars
                    </DropdownToggle>
                    <DropdownMenu right>
                      {vehicledata}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                      <NavLink href='/flying-dealer'><i className="fas fa-truck"></i>Flying DealerShip</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href='/schedule-test-flight'><i className="fas fa-money-check-alt"></i>Build and Price</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>);
    }
}


export default TopNav;