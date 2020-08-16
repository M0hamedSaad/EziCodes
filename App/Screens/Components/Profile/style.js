import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default 
{
  container:{
    flex:1,

  },
  
  bk: 
  {
    width:'100%',
    height:'100%',
    resizeMode:'cover',

  },
logo:
{
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:hp('5%'),

},

row:
{
 flexDirection: 'row',
  marginLeft: wp('15%'),
    marginRight: wp('15%'),
  marginTop:hp('3.5%'),
},
input:
  {
    color:'white',
    fontSize:16,
    fontFamily:'CenturyGothicBold',
    textDecorationLine:'none',
    writingDirection:'auto',

  },
  line:
  {
    marginLeft: wp('17%'),
    marginRight: wp('18%'),
    borderWidth: wp('.4%'),
    borderColor:'white',
  },

 
fixToicons: 
{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:hp('4%'),
  marginRight: wp('5%'),
  marginLeft: wp('5%'),

},

text:
{
  fontFamily:'CenturyGothicBold',
  fontSize:16,
  color:'white',
  justifyContent: 'center',
  alignItems: 'center',
  padding:13,
  //paddingTop:20,

},
};