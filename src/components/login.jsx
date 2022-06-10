import React, { Component } from 'react';
import Input from './input';
import * as yup from 'yup';
import axios from 'axios';

class Login extends Component {
    state = {
        account: {
            email: '',
            password: ''
        },
        errors: []
    }

    schema = yup.object.shape(
        {
            email: yup.string().email('فرمت ایمیل صحیح نمی باشد').required('ایمیل اجباری است'),
            password: yup.string().min(4, 'پسورد حداقل بایستی 4 کاراکتر باشد')
        }
    );

    validate = async () => {
        try {
            const result = await this.schema.validate(this.state.account, { abortEarly: false });
            return result;
        } catch (error) {
            console.log(error.errors);
            this.setState({ errors: error.errors });
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const result = await this.validate();
        if (result) {
            const response = await axios.post('https://reqres.in/api/login', result);
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
                    <button className='btn btn-primary'>Login</button>
                </form>
            </>
        );
    }
}

export default Login;