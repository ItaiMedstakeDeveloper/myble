import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { Zim } from '@/constants/theme';

/** A small Zimbabwe flag that waves: 7 stripes, white hoist triangle, red star. */
export function ZimFlag({ width = 40 }: { width?: number }) {
  const height = width / 2; // official flag ratio is 1:2
  const stripeHeight = height / 7;
  const triangleWidth = height * 0.85;

  // One continuous phase [0,1) drives the wave.
  const phase = useSharedValue(0);
  useEffect(() => {
    phase.value = withRepeat(withTiming(1, { duration: 1800, easing: Easing.linear }), -1, false);
  }, [phase]);

  const waveStyle = useAnimatedStyle(() => {
    const a = Math.sin(phase.value * Math.PI * 2);
    const b = Math.sin(phase.value * Math.PI * 2 + Math.PI / 2);
    return {
      transform: [
        { perspective: 320 },
        { rotateY: `${a * 12}deg` }, // main flutter around the pole
        { skewY: `${b * 2}deg` }, // cloth ripple
        { scaleX: 1 - Math.abs(a) * 0.05 }, // slight foreshortening at the edges
      ],
    };
  });

  return (
    <Animated.View style={[styles.flag, { width, height }, waveStyle]}>
      {Zim.stripes.map((color, i) => (
        <View key={i} style={{ height: stripeHeight, backgroundColor: color }} />
      ))}

      {/* White hoist triangle pointing toward the fly */}
      <View
        style={[
          styles.triangle,
          {
            borderTopWidth: height / 2,
            borderBottomWidth: height / 2,
            borderLeftWidth: triangleWidth,
          },
        ]}
      />

      {/* Red star sitting in the triangle */}
      <View style={[styles.starWrap, { width: triangleWidth }]}>
        <Text style={[styles.star, { fontSize: height * 0.42 }]}>★</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  flag: {
    borderRadius: 3,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#0002',
    transformOrigin: 'left center', // wave pivots from the pole/hoist side
  },
  triangle: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: Zim.white,
  },
  starWrap: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: { color: Zim.red },
});
