import React  , { Component} from 'react';
import { View } from 'react-native';
import Signin from './signin';

 class index extends Component 
{
 static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <Signin />
          </View>
      );

    }
     
 
  }


export default index ;
