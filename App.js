/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleName = value => {
    setName(value);
  };

  const onPressSubmit = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
      setName('');
    } else {
      setShowWarning(true);

      //   Alert.alert(
      //     'Warning',
      //     'The name must be more than 3 characters',
      //     [
      //       {text: 'Ok', onPress: () => console.warn('OK Pressed')},
      //       {
      //         text: 'Cancel',
      //         onPress: () => console.warn('Cancel Pressed'),
      //       },
      //       {
      //         text: 'Do not show again',
      //         onPress: () => console.warn('Do not show again Pressed'),
      //       },
      //     ],
      //     {
      //       cancelable: true,
      //       onDismiss: () => console.warn('Alert cancelled'),
      //     },
      //   );
      // ToastAndroid.show(
      //   'The name must be more than 3 characters',
      //   ToastAndroid.LONG,
      // );
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={showWarning}
        onRequestClose={() => {
          setShowWarning(false);
        }}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be more than 3 characters
              </Text>
            </View>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: '#00ffff',
                },
              ]}
              android_ripple={{color: '#00ff'}}
              hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
              onPress={() => {
                setShowWarning(false);
              }}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Enter your name:</Text>
      <TextInput
        placeholder="e. g. Pravin"
        style={styles.textInput}
        value={name}
        onChangeText={handleName}
        keyboardType="default"
      />
      {/* <Button
         title={submitted ? 'Clear' : 'Submit'}
         onPress={onPressSubmit}
         // disabled={submitted}
         color="#0ff"
       // /> */}

      {/* <TouchableHighlight
         style={styles.button}
         onPress={onPressSubmit}
         activeOpacity={0.5}
         underlayColor="#fff">
         <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
       </TouchableHighlight> */}

      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#fff' : '#00ffff',
          },
        ]}
        delayLongPress={2000}
        android_ripple={{color: '#00ff'}}
        hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
        onPress={onPressSubmit}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {submitted ? (
        <Text style={styles.text}>You register as: {name}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff10f',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    width: 200,
    borderWidth: 1,
    borderColor: '#00ffff',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00ffff',
    borderRadius: 8,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff10f99',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default App;
