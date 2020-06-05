import React from 'react';

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <p className="text-purple-700 mb-2 text-sm">{props.error}</p>
                <input
                    className="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="email"
                    onChange={(e) => props.handleEmailChange(e)}
                    autoFocus
                />
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="password"
                    onChange={e => props.handlePasswordChange(e)} />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" >
                    Login
      </button>
            </form>
        </div>
    );
}

export default LoginForm;
