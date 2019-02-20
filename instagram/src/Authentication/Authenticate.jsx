import React from 'react';

export function authenticate(App) {
    return class Authenticate extends React.Component {
        render () {
            return (
             <App {...this.props}/>
            )
        }
    }
}
