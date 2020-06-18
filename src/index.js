import React from 'react';
import Routes from './routes'
// import { Container } from './styles'
import {StatusBar} from 'react-native';

export default function App(){

    return(
        <>

        <StatusBar barStyle="dark-content"  backgroundColor="#f5f5f5"/>
        <Routes />

        </>
    )
}