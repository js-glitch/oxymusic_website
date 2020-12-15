import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getMessages ,deleteMessage } from '../Actions/messageActions';
import PropTypes from 'prop-types'

class Admin extends Component {

    componentDidMount(){
        this.props.getMessages();
    }

    onDeleteClick = (id) => {
        this.props.deleteMessage(id);
    }

    render() {

        const {messages} = this.props.message;

        return (
            <div className = "sent_messages">
                <h1 className = "admin-section">Admin Section</h1>
               <ul>
                   {messages.map(({ _id , email ,subject ,message}) => (
                      <li className = "sent_message">  {email ,subject ,message}  
                            <button
                                className = "delete_message"
                                onClick = { this.onDeleteClick.bind(this,_id)}
                                >Delete Message
                            </button>
                            <hr />

                      </li>
                   ))}
               </ul>
            </div>
        )
    }
}

Admin.propTypes = {
    getMessages : PropTypes.func.isRequired,
    message:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
message: state.message //do not touch
})

export default connect(mapStateToProps , {getMessages ,deleteMessage})(Admin)
