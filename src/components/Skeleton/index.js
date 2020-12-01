import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const Skeleton = ({ visible, children }) => {
  const AnimatedValue = new Animated.Value(0);

  useEffect(() => {
    backgroundYoutube();

    return () => backgroundYoutube();
  }, []);

  const backgroundYoutube = () => {
    AnimatedValue.setValue(0);
    Animated.timing(AnimatedValue, {
      toValue: 1,
      duration: 350,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        backgroundYoutube();
      }, 1000);
    });
  };

  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 400],
  });

  if (visible) {
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#BFBFBF',
            height: 200,
            width: width - 20,
            overflow: 'hidden',
          }}>
          <Animated.View
            style={{
              width: '30%',
              height: '100%',
              opacity: 0.3,
              backgroundColor: '#E6E6E6',
              transform: [{ translateX: translateX }],
            }}
          />
        </View>
      </View>
    );
  }

  return <>{children}</>;
};

export default Skeleton;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
});
