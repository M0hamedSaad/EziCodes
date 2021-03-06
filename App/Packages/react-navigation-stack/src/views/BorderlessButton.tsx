import * as React from 'react';
import { Animated, Platform } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';

const AnimatedBaseButton = Animated.createAnimatedComponent(BaseButton);

const USE_NATIVE_DRIVER = Platform.OS === 'android' || Platform.OS === 'ios';

type Props = React.ComponentProps<typeof BaseButton> & {
  activeOpacity: number;
};

export default class BorderlessButton extends React.Component<Props> {
  static defaultProps = {
    activeOpacity: 0.3,
    borderless: true,
  };

  private opacity = new Animated.Value(1);

  private handleActiveStateChange = (active: boolean) => {
    if (Platform.OS !== 'android') {
      Animated.spring(this.opacity, {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
        toValue: active ? this.props.activeOpacity : 1,
        useNativeDriver: USE_NATIVE_DRIVER,
      }).start();
    }

    this.props.onActiveStateChange && this.props.onActiveStateChange(active);
  };

  render() {
    const { children, style, enabled, ...rest } = this.props;

    return (
      <AnimatedBaseButton
        {...rest}
        onActiveStateChange={this.handleActiveStateChange}
        style={[
          style,
          Platform.OS === 'ios' && enabled && { opacity: this.opacity },
        ]}
      >
        {children}
      </AnimatedBaseButton>
    );
  }
}
