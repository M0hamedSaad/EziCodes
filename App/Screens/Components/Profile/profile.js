import styles from './style' ;
import React, { Component} from 'react'
import {
  StyleSheet,TouchableOpacity,
  Text,View,TextInput,Image,
  ImageBackground,Button,
  Alert, TouchableHighlight,KeyboardAvoidingView
} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {withNavigation} from "react-navigation";

 class Profile extends Component 
{
 

render()
    {
      return (
        <View style={styles.Container}>

<ImageBackground // Background
            style={styles.bk}
            source={require('../../../Images/Materials-03.png')} >

            <View style={styles.fixToicons}>
            <Image source={require('../../../Images/Materials-01.png')}
            style={{width:25,height:25}} />
            <Image source={require('../../../Images/settings-512.png')}
            style={{width:25,height:25}} />
            </View>

            <KeyboardAvoidingView  behavior='position'>

            <View style={styles.logo}>
             <Image source={require('../../../Images/Materials-04.png')}
            style={{width:300,height:115,}}
             />
            </View>
 
            <View style={styles.row}>
            <View style={{width: 120, height: 50,}} >
             <Text style = {styles.text}>
               First Name :
             </Text>
            </View>
           <View style={{width: 200, height: 50,}} >
            <TextInput style={styles.input} 
          defaultValue={this.props.navigation.state.params.firstname}
            >
             </TextInput>
           </View>
        </View>

        <View style={styles.line}/>


        <View style={styles.row}>
        <View style={{width: 120, height: 50,}} >
         <Text style = {styles.text}>
               Last Name :
            </Text>
        </View>
        <View style={{width: 200, height: 50,}} >
         <TextInput style={styles.input}
         defaultValue={this.props.navigation.state.params.lastname} >
         
          </TextInput>
        </View>
        </View>
        <View style={styles.line}/>



        <View style={styles.row}>
        <View style={{width: 120, height: 50,}} >
         <Text style = {styles.text}>
               Email :
            </Text>
        </View>
        <View style={{width: 200, height: 50,}} >
         <TextInput style={styles.input} 
         defaultValue={this.props.navigation.state.params.email}>
          </TextInput>
        </View>
        </View>
        <View style={styles.line}/>


        <View style={styles.row}>
        <View style={{width: 120, height: 50,}} >
         <Text style = {styles.text}>
               Phone :
            </Text>
        </View>
        <View style={{width: 200, height: 50,}} >
         <TextInput style={styles.input}
         defaultValue={this.props.navigation.state.params.phone} >
          </TextInput>
        </View>
        </View>
        <View style={styles.line}/>


    
        </KeyboardAvoidingView>

     
      

 
   
    
</ImageBackground>

</View>
        
      );

    }

}



export default withNavigation(Profile) ;
