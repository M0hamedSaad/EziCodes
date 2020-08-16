import React  , { Component} from 'react';
import { View } from 'react-native';
import Profile from './profile';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <Profile />
          </View>
      );

    }
     
 
  }


export default index ;
