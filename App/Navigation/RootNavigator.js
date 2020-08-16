
import { createAppContainer } from 'react-navigation' ;
import { createStackNavigator  } from '../Packages/react-navigation-stack';

import Signin from '../Screens/Components/Signin/index';
import Profile from '../Screens/Components/Profile/index';


const Navigator = createStackNavigator({
  
  
    Signin :
    {
       screen :  Signin ,  
    },  
    Profile :
    {
        screen : Profile
    },
  
});


export default createAppContainer(  Navigator );

