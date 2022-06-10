import React, { Component } from 'react';
import Input from './input';

class Login extends Component {
    state = {
        account: {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();


    }

    handleChange = async (e) => {
        const input = e.currentTarget;
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Input name='email' value={this.state.account.email} label='Email' onChange={this.handleChange} />
                    <Input name='password' value={this.state.account.password} label='Password' onChange={this.handleChange} />
                    <button className='btn btn-primary'>Login</button>
                </form>
            </>
        );
    }
}

export default Login;