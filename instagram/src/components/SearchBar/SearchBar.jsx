import React from 'react';

export default function SearchBar () {
    return (
        <>
        <nav>
            <a><img src={require('./SearchBarAssets/logo.png')}/></a>
            <a><img src={require('./SearchBarAssets/word-logo.png')}/></a>
            <input placeholder="Search"/>
            <a><img src={require('./SearchBarAssets/compass.png')}/></a>
            <a><img src={require('./SearchBarAssets/heart.png')}/></a>
            <a><img src={require('./SearchBarAssets/user.png')}/></a>
        </nav>
        </>
    )
}