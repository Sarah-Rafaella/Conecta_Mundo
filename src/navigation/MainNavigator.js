import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostScreen from '../screens/PostScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import ViewPostsScreen from '../screens/ViewPostsScreen';

const stack = createStackNavigator();

const MainNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name= 'Register' component={RegisterScreen}/>
                <Stack.Screen name= 'Login' component={LoginScreen}/>
                <Stack.Screen name= 'Profile' component={ProfileScreen}/>
                <Stack.Screen name= 'Post' component={PostScreen}/>
                <Stack.Screen name= 'CreatPost' component={CreatePostScreen}/>
                <Stack.Screen name= 'ViewPosts' component={ViewPostsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};