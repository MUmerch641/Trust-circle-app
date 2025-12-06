import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

function App(): React.JSX.Element {
  // Scale value 1 se start hogi
  const scale = useSharedValue(1);

  React.useEffect(() => {
    // Infinite Pulse Animation
    scale.value = withRepeat(
      withSequence(
        withTiming(1.5, { duration: 1000 }), // Bara hoga
        withTiming(1, { duration: 1000 })    // Wapis chota hoga
      ),
      -1, // -1 ka matlab infinite loop
      true // Reverse
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Style create karein jo animated value use kare
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 1. App Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Trust Circle</Text>
        <Text style={styles.subtitle}>Friends Guiding Friends</Text>
      </View>

      {/* 2. Basic Concept Demo */}
      <View style={styles.centerBox}>
        <Text style={styles.label}>Concept Review:</Text>
        
        {/* Red Star Example - Trusted */}
        <View style={styles.row}>
          <Animated.View style={[styles.markerContainer, animatedStyle]}>
            <Text style={styles.redStar}>★</Text>
          </Animated.View>
          <Text style={styles.descText}>Red Star = Friend (Trusted)</Text>
        </View>

        {/* Yellow Star Example - Public */}
        <View style={styles.row}>
          <Text style={styles.yellowStar}>★</Text>
          <Text style={styles.descText}>Yellow Star = Public</Text>
        </View>
        
        <View style={styles.divider} />
        
        <Text style={styles.infoText}>
          Next Step: Is screen par Map aur Location add karenge.
        </Text>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
    fontStyle: 'italic',
  },
  centerBox: {
    width: '85%',
    borderWidth: 2,
    borderColor: '#000',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#FAFAFA',
    elevation: 5, // Android shadow
  },
  label: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  redStar: {
    color: 'red',
    fontSize: 35,
    marginRight: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  yellowStar: {
    color: '#FFD700', // Gold
    fontSize: 35,
    marginRight: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  descText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  infoText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  markerContainer: {
    // Add styles for marker container if needed
  }
});

export default App;