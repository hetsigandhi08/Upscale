import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

const RecoveryCodeScreen = ({ navigation }) => {
  const [recoveryCode, setRecoveryCode] = useState('');
  const [recoveryCodeFocusState, setRecoveryCodeFocusState] = useState(false);

  const handleSubmitRecoveryCode = () => {
    // Replace this with your actual logic for submitting the recovery code
    if (recoveryCode.trim() === '') {
      alert('Please enter a valid recovery code.');
    } else {
      // Code for submitting the recovery code goes here
      console.log(`Recovery code submitted: ${recoveryCode}`);
      alert('Recovery code submitted successfully!');
      setRecoveryCode('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Enter the Recovery Code</Text>
          <Text style={styles.subTitle}>Woooho, We have sent a recovery code to your mail </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={recoveryCodeFocusState ? styles.recoveryCodeInputFocused : styles.recoveryCodeInput}
            placeholder="Enter code"
            autoComplete="off"
            onBlur={() => setRecoveryCodeFocusState(false)}
            onFocus={() => setRecoveryCodeFocusState(true)}
            value={recoveryCode}
            onChangeText={setRecoveryCode}
          />

          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmitRecoveryCode}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default RecoveryCodeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFCFB',
    flex: 1,
    justifyContent: 'center',
    padding: 35,
  },
  topContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'SourceSans3-SemiBold',
    textAlign: 'left',
  },
  subTitle: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'SourceSans3-Regular',
    color: '#636363',
    textAlign: 'left',
  },
  recoveryCodeInput: {
    width: 320,
    height: 46,
    fontSize: 14,
    fontFamily: 'SourceSans3-Regular',
    paddingHorizontal: 20,
    backgroundColor: '#FBFBFB',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  recoveryCodeInputFocused: {
    width: 320,
    height: 46,
    fontSize: 14,
    fontFamily: 'SourceSans3-Regular',
    paddingHorizontal: 20,
    backgroundColor: '#FBFBFB',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5237C0',
  },
  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 263,
    height: 47,
    backgroundColor: '#00008b',
    borderRadius: 42,
    marginTop: 30,
  },
  submitBtnText: {
    color: '#FFF',
  },
});
