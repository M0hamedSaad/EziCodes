import _objectSpread from"@babel/runtime/helpers/objectSpread";import _extends from"@babel/runtime/helpers/extends";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/satya/Workspace/Callstack/react-navigation-stack/src/views/Header/HeaderTitle.tsx";import*as React from'react';import{Platform,StyleSheet,Animated}from'react-native';import{ThemeContext,ThemeColors}from'react-navigation';var HeaderTitle=function(_React$Component){_inherits(HeaderTitle,_React$Component);function HeaderTitle(){_classCallCheck(this,HeaderTitle);return _possibleConstructorReturn(this,_getPrototypeOf(HeaderTitle).apply(this,arguments));}_createClass(HeaderTitle,[{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,rest=_objectWithoutProperties(_this$props,["style"]);var theme=ThemeColors[this.context];return React.createElement(Animated.Text,_extends({numberOfLines:1},rest,{style:[styles.title,{color:theme.label},style],accessibilityTraits:"header",__source:{fileName:_jsxFileName,lineNumber:17}}));}}]);return HeaderTitle;}(React.Component);HeaderTitle.contextType=ThemeContext;var styles=StyleSheet.create({title:_objectSpread({},Platform.select({ios:{fontSize:17,fontWeight:'600',color:'rgba(0, 0, 0, .9)',marginHorizontal:16},android:{fontSize:20,fontWeight:'500',color:'rgba(0, 0, 0, .9)',marginHorizontal:16},default:{fontSize:18,fontWeight:'400',color:'#3c4043'}}))});export default HeaderTitle;
//# sourceMappingURL=HeaderTitle.js.map