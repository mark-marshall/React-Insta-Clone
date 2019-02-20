import React from 'react';

export function authenticate(App, LoginPage) {
    return class Authenticate extends React.Component {

        componentDidMount() {
            console.log('component mounted');
        }

        componentDidUpdate() {
            console.log('component updated');
        }

        render () {
            if (!localStorage.getItem('username')){
                return <LoginPage {...this.props}/>
            }
            return <App {...this.props}/>
        }
    }
}
