import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {login} from '../../Actions/authActions'
import {clearErrors} from '../../Actions/errorActions'
//clear errors not used

//import connect
import {connect} from 'react-redux'

export class Login extends Component {
    state = 
        {
             email : "",
             password:"",
             msg:"",
        }
    

    static propTpes = {
        isAuthenticated :PropTypes.bool,
        error : PropTypes.object.isRequired,
        login : PropTypes.func.isRequired,
        clearErrors :PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const { error} = this.props;
        if(error !== prevProps.error){
            //Check for register error
            if(error.id === 'LOGIN_FAIL'){
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
    
     const { email ,password} = this.state;

     const user = { email , password}

    //Attempt to login
     this.props.login(user)
    };
    
    render() {
        return (
            <div>
                <h1 contact_us_title>Login</h1>
                {this.state.msg ? this.state.msg : null }
                <form className = "form-submit" onSubmit = {this.handleSubmit}>
                    
                
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

                   
                    <input type = "submit" value ="Login" id="submit-button" />
                    
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   isAuthenticated : state.auth.isAuthenticated,
   error : state.error
});

export default connect(mapStateToProps , {login ,clearErrors})(Login);
