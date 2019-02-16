import React from 'react';
import 'tachyons'; 
import './Navbar.css'; 
import EventListener, {withOptions} from 'react-event-listener';  
import Hamburger from './Hamburger';
class Navbar extends React.Component{  
    
    constructor(props){ 
        super(props); 
        this.state={ 
            width:1000
        }
    }  
    handleResize = () => {
        this.setState({ 
            width:window.innerWidth
        }) 
        console.log(this.state);
      }; 
    render(){   
        if(this.state.width>600){  
            return(  
            
                <div className="nav">  
                <EventListener
                    target="window"
                    onResize={this.handleResize} 
                /> 
                <header className="bg-blue fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l "> 
                <nav className="f6 fw6 ttu tracked navcontent"> 
                    <img src='https://msme.gov.in/sites/all/themes/msme/images/emblem-dark.png' alt="emblem" />
                    <a className="link dim white  mr3" href="#" title="Home">Home</a>
                    <a className="link dim white dib mr3" href="#" title="About">About</a>  
                    <a className="link dim white dib mr3" href="#" title="ApplyLoan">Apply Loan</a>
                    <a className="link dim white dib mr3" href="#" title="SignIn">Signin</a> 
                    <a className="link dim white dib mr3" href="#" title="Profile">Profile</a>  
                    <a className="link dim white dib mr3" href="#" title="FAQ">FAQ</a>
                    <a className="link dim white dib" href="#" title="Contact">Contact</a>
                </nav>
                </header>
                </div>   
            )
        } 
        else if(this.state.width<600){ 
            return(  
                <div>
                <EventListener
                    target="window"
                    onResize={this.handleResize} 
                /> 
                <Hamburger/> 
                </div>
            )

        }
    
    }
} 

export default Navbar;