import React, { Component } from 'react'

//import connect
import {connect} from 'react-redux'

//import sendMessage action
import {sendMessage} from '../Actions/messageActions'


export class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
             email : "",
             subject:"",
             message:"",
           //  name : ""
        }
    }

    handleEmail = (event) =>{
        this.setState({ email : event.target.value})
    }
    handleSubject = (event) =>{
        this.setState({ subject : event.target.value})
    }
    handleMessage = (event) =>{
        this.setState({ message : event.target.value})
    }  
    handleSubmit = (event) => {
     event.preventDefault() 
     alert("Message send")
    

     const newMessage = {
         email:this.state.email,
         subject:this.state.subject,
         message:this.state.message
     }

     //Add message via addMessage action
     this.props.sendMessage(newMessage);
    }
    
    render() {
        return (
            <div>
                <img src ="images/contact_us.jpg" alt ="Contact Us" 
                id= "contact_us"  id ="contact_us_image"/>

                <h1 id ="contact_us_title">Contact Us</h1>
            
                <form className = "form-submit" onSubmit = {this.handleSubmit}>
                    <label for = "email">Email</label>
                    <input type = "email" 
                    id="email" 
                    placeholder ="Enter your Email"
                    value = {this.state.email} 
                    onChange = {this.handleEmail} />

                    <label for = "subject">Subject</label>
                    <input type = "text" 
                    id="subject"
                    placeholder ="Subject"
                    value = {this.state.subject}
                    onChange = {this.handleSubject}/>

                    <label for = "message">Message</label>
                    <textarea id = "message"
                    placeholder ="Enter your Message" 
                        value = {this.state.message} 
                        onChange = {this.handleMessage} cols = "30" rows = "10">
                    </textarea>

                    <input type = "submit" value ="Submit" id="submit-button" />
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    message : state.message
});

export default connect(mapStateToProps , {sendMessage})(Contact);
