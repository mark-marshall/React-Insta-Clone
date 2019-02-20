import React from 'react';

export function authenticate(App, LoginPage) {
    return class Authenticate extends React.Component {
        state = {
            ans: true,
        }
        render () {
            if (!localStorage.getItem('username')){
                return <LoginPage />
            }
            return <App {...this.props}/>
        }
    }
}
