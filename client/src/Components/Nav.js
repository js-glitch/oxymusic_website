import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Nav extends Component {
    state = {
        isOpen : false
    }

    handleToggle = () =>{
        this.setState ({isOpen : !this.state.isOpen})
    }

    render() {
        return (
            <div>
                <nav>
                <Link className ="navStyle" to = '/' id = "logo"><img src = "images/headphones.png" alt = "headphones" id = "headphones"/></Link>
                <Link className ="navStyle" to = '/'><h1>Oxymusic</h1></Link>
            
                <button type = "submit"
                onClick = {this.handleToggle}
                id ="hamburger-menu-button"
                >
                <img src  = "images/menu.png"  id ="hamburger-menu"/>
                </button>
                </nav>
                <div className ="actual-links">
                    <ul className = {this.state.isOpen ? "nav-links show-nav" : "nav-links"} >  
                    <li> <Link className ="navStyle" to = '/'><li>Home</li></Link></li>
                    <li> <Link className ="navStyle" to = '/blogs'><li>Blogs</li></Link></li>
                    <li><Link className ="navStyle" to = '/contact'><li>Contact</li></Link></li>
                    </ul>
                </div>
            </div>
               
        )
    }

    
}

export default Nav
