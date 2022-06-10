import React, { Component } from 'react';

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
                    <div className="mb-t">
                        <label htmlFor='email'>Email</label>
                        <input onChange={this.handleChange} value={this.state.account.email} id='email' name='email' type='text' className='form-control'></input>
                    </div>
                    <div className="mb-t">
                        <label htmlFor='password'>Password</label>
                        <input onChange={this.handleChange} value={this.state.account.password} id='password' name='password' type='text' className='form-control'></input>
                    </div>
                    <button className='btn btn-primary'>Login</button>
                </form>
            </>
        );
    }
}

export default Login;