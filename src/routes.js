import React from 'react';
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import logo from './assets/instagram.png';
import Feed from './pages/Feed';

//import { View } from 'react-native';


const Routes = createAppContainer(
    createStackNavigator({
        Feed
    },
        {
//            headerLayoutPreset: 'center',
            defaultNavigationOptions: {
                headerTitle: () => <Image source={logo} />,
                headerStyle:{
                    backgroundColor: '#f5f5f5'
                },
                headerTitleAlign: 'center'
            }
        }
    )
);

export default Routes;