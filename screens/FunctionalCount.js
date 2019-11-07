import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function FunctionalCount(props) {
  const [count, setCount] = useState(0);
  const handlePress = useCallback(() => setCount(count + 1), [count]);

  return (
    <View style={styles}>
      <Text>
        {props.text} : {count}
      </Text>
      <Button onPress={handlePress} title={'CountUp'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
