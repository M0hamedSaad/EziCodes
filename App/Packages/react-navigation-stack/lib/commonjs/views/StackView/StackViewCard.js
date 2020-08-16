var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeScreens=require("react-native-screens");var _reactNavigation=require("react-navigation");var _createPointerEventsContainer=_interopRequireDefault(require("./createPointerEventsContainer"));var _jsxFileName="/Users/satya/Workspace/Callstack/react-navigation-stack/src/views/StackView/StackViewCard.tsx";var EPS=1e-5;function getAccessibilityProps(isActive){if(_reactNative.Platform.OS==='ios'){return{accessibilityElementsHidden:!isActive};}else if(_reactNative.Platform.OS==='android'){return{importantForAccessibility:isActive?'yes':'no-hide-descendants'};}else{return{};}}var Card=function(_React$Component){(0,_inherits2.default)(Card,_React$Component);function Card(){(0,_classCallCheck2.default)(this,Card);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Card).apply(this,arguments));}(0,_createClass2.default)(Card,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,pointerEvents=_this$props.pointerEvents,style=_this$props.style,position=_this$props.position,transparent=_this$props.transparent,_this$props$scene=_this$props.scene,index=_this$props$scene.index,isActive=_this$props$scene.isActive;var active=_reactNative.Platform.select({web:isActive,default:transparent||isActive?1:position.interpolate({inputRange:[index,index+1-EPS,index+1],outputRange:[1,1,0],extrapolate:'clamp'})});var animatedStyle=this.props.animatedStyle||{};var shadowOpacity=animatedStyle.shadowOpacity,overlayOpacity=animatedStyle.overlayOpacity,containerAnimatedStyle=(0,_objectWithoutProperties2.default)(animatedStyle,["shadowOpacity","overlayOpacity"]);var flattenedStyle=_reactNative.StyleSheet.flatten(style)||{};var backgroundColor=flattenedStyle.backgroundColor,screenStyle=(0,_objectWithoutProperties2.default)(flattenedStyle,["backgroundColor"]);var isDark=this.context==='dark';var baseCardStyle;if(isDark){baseCardStyle=transparent?styles.transparentDark:styles.cardDark;}else{baseCardStyle=transparent?styles.transparentLight:styles.cardLight;}return React.createElement(_reactNativeScreens.Screen,{pointerEvents:pointerEvents,onComponentRef:this.props.onComponentRef,style:[containerAnimatedStyle,screenStyle],active:active,__source:{fileName:_jsxFileName,lineNumber:93}},!transparent&&shadowOpacity?React.createElement(_reactNative.Animated.View,{style:[styles.shadow,{shadowOpacity:shadowOpacity}],pointerEvents:"none",__source:{fileName:_jsxFileName,lineNumber:101}}):null,React.createElement(_reactNative.Animated.View,(0,_extends2.default)({},getAccessibilityProps(isActive),{style:[baseCardStyle,backgroundColor&&backgroundColor!=='transparent'?{backgroundColor:backgroundColor}:null],__source:{fileName:_jsxFileName,lineNumber:106}}),children),overlayOpacity?React.createElement(_reactNative.Animated.View,{pointerEvents:"none",style:[isDark?styles.overlayDark:styles.overlayLight,{opacity:overlayOpacity}],__source:{fileName:_jsxFileName,lineNumber:118}}):null);}}]);return Card;}(React.Component);Card.contextType=_reactNavigation.ThemeContext;var styles=_reactNative.StyleSheet.create({cardLight:{flex:1,backgroundColor:_reactNavigation.ThemeColors.light.body},cardDark:{flex:1,backgroundColor:_reactNavigation.ThemeColors.dark.body},overlayLight:(0,_objectSpread2.default)({},_reactNative.StyleSheet.absoluteFillObject,{backgroundColor:'#000'}),overlayDark:(0,_objectSpread2.default)({},_reactNative.StyleSheet.absoluteFillObject,{backgroundColor:'#fff'}),shadow:{top:0,left:0,bottom:0,width:3,position:'absolute',backgroundColor:'#fff',shadowOffset:{width:-1,height:1},shadowRadius:5,shadowColor:'#000'},transparentLight:{flex:1,backgroundColor:'transparent'},transparentDark:{flex:1,backgroundColor:'transparent'}});var _default=(0,_createPointerEventsContainer.default)(Card);exports.default=_default;
//# sourceMappingURL=StackViewCard.js.map