import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {register} from '../../Actions/authActions'
import {clearErrors} from '../../Actions/errorActions'
//clear errors not used

//import connect
import {connect} from 'react-redux'

export class Register extends Component {
        state = {
            name :"",
            email : "",
            password:"",
            msg:"",
            
        }
    

   static propTpes = {
        isAuthenticated :PropTypes.bool,
        error : PropTypes.object.isRequired,
        register : PropTypes.func.isRequired,
        clearErrors :PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const { error} = this.props;
        if(error !== prevProps.error){
            //Check for register error
            if(error.id === 'REGISTER_FAIL'){
                this.setState({msg : error.msg.msg});
            }else{
                this.setState({msg :null});
            }
        }
    }
    
    onChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value})
    }
    
    handleSubmit = (event) => {
     event.preventDefault() 
     //alert("Message send")
    const {name ,email , password} = this.state;

    //Create user object
    const newUser = { name ,email ,password};

    //Attempt to register
    this.props.register(newUser);
    }
    
    render() {
        return (
            <div>
                <h1 contact_us_title>Register</h1>
                {this.state.msg ? this.state.msg : null }
                <form className = "form-submit" onSubmit = {this.handleSubmit}>
                    
                    <label for = "name">Name</label>
                    <input type = "text" 
                    id="name" 
                    placeholder ="Enter your Name"
                    onChange = {this.onChange} />

                    <label for = "email">Email</label>
                    <input type = "email" 
                    id="email" 
                    placeholder ="Enter your Email"
                    onChange = {this.onChange} />

                    <label for = "password">Password</label>
                    <input type = "password" 
                    id="password" 
                    placeholder ="Enter your Password"
                    onChange = {this.onChange} />

                   
                    <input type = "submit" value ="Register" id="submit-button" />
                    
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   isAuthenticated : state.auth.isAuthenticated,
   error : state.error
});

export default connect(mapStateToProps , {register ,clearErrors})(Register);
