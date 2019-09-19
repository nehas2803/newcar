import React,{Component} from 'react';
import SiteCarousal from '../SiteCarousal/SiteCarousal'
import classes from './Footer.css'
class Footer extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(<footer className={classes.Footer}><a href='/site-language'>visit us</a>@property of neha singh
        </footer>);
    }
}


export default Footer;