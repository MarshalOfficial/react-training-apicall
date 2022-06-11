import React, { Component } from 'react';
import Input from './input';
import axios from 'axios';

class Login extends Component {
    state = {
        account: {
            email: '',
            password: ''
        },
        errors: [],
        sending: false
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            this.setState({ sending: true });
            const response = await axios.post('https://reqres.in/api/login', this.state.account);
            localStorage.setItem('token', response.data.token);

        } catch (error) {
            this.setState({ errors: ['ایمیل یا پسورد صحیح نمی باشد'] });
        } finally {
            this.setState({ sending: false });
        }

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
                    <button disabled={this.state.sending} className='btn btn-primary'>Login</button>
                </form>
            </>
        );
    }
}

export default Login;