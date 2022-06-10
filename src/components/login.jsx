import React, { Component } from 'react';

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-t">
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='text' className='form-control'></input>
                    </div>
                    <div className="mb-t">
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='text' className='form-control'></input>
                    </div>
                    <button className='btn btn-primary'>Login</button>
                </form>
            </>
        );
    }
}

export default Login;