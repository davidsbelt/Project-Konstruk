
import React from 'react';
import './UserDetails.css';
import '../../../../assets/fonts/bacca-fonts.css';

class UserDetails extends React.Component {
    /* use an uncontrolled component to perform this functionality
        users will see already loaded form fields

        NOTE: disable 'enter' on the mantra field and manage 'innerElement carefully' 
    */
    constructor(props){
        super(props);
        this.state = {
            bio: this.props.data[0].user.mantra, 
            firstName: this.props.data[0].user.firstname, 
            lastName: this.props.data[0].user.lastname,
            userName: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        /*const mantra = this.getElementById('mantra').innerText;*/
        this.setState = ({
        bio: event.target.value, 
        firstName: event.target.value, 
        lastName: event.target.value,
        userName: event.target.value,
        passWord: event.target.value
        });
    }

    handleSubmit(event){
        /* insert the call to the api to update database here */
        alert('form has bee submited... first entry: ' + this.state.mantra);
        event.preventDefault();
    }
    

    render(){	
        return (
            <form className='user-details-form' onSubmit={this.handleSubmit}>
                <label>
                    <span>Bio:</span>
                    <input type="text" id='bio' value={this.state.bio} onChange={this.handleChange} />
                </label>
                <label>
                    <span>First Name:</span>
                    <input type="text" id='firstName' value={this.state.firstName} onChange={this.handleChange} />
                </label>
                <label>
                    <span>Last Name:</span>
                    <input type="text" id='lastName' value={this.state.lastName} onChange={this.handleChange} />
                </label>
                <label>
                    <span>Username:</span>
                    <input type="text" value='' id='userName' onChange={this.handleChange} />
                </label>
                <label>
                    <span>Password:</span>
                    <input type="password" value='' id='password' onChange={this.handleChange} />
                </label>
                <input type='submit' value='update'></input>
            </form> 
        )
    }
}

export default UserDetails;