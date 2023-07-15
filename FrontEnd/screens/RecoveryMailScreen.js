import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

const RecoveryMailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailFocusState, setEmailFocusState] = useState(false);

  const handleSendRecoveryMail = () => {
    // Replace this with your actual logic for sending recovery mail
    if (email.trim() === '') {
      alert('Please enter a valid email address.');
    } else {
      // Code for sending recovery mail goes here
      console.log(`Recovery mail sent to ${email}`);
      alert('Recovery mail sent successfully!');
      setEmail('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Enter Recovery mail</Text>
          <Text style={styles.subTitle}>Enter the email to recover your account.</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={emailFocusState ? styles.mailInputFocused : styles.mailInput}
            placeholder='Email Address'
            autoComplete='email'
            onBlur={() => setEmailFocusState(false)}
            onFocus={() => setEmailFocusState(true)}
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity style={styles.sendMailBtn} onPress={handleSendRecoveryMail}>
            <Text style={styles.sendMailText}>Next</Text>
          </TouchableOpacity>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default RecoveryMailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFCFB',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Center vertically and horizontally
    padding: 35,
  },
  topContainer: {
    width: '100%',
    gap: 6,
    alignItems: 'flex-start', // Align items to the left side
  },
  inputContainer: {
    alignItems: 'center',
    gap: 8,
    marginTop: 45, // Add margin top
  },
  title: {
    fontSize: 30,
    fontFamily: 'SourceSans3-SemiBold',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SourceSans3-Regular',
    color: '#636363',
  },
  mailInput: {
    width: 320,
    height: 46,
    fontSize: 14,
    fontFamily: 'SourceSans3-Regular',
    paddingHorizontal: 20,
    color: '#f0f8ff',
    backgroundColor: '#FBFBFB',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },

  mailInputFocused: {
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
  sendMailBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 263,
    height: 47,
    backgroundColor: '#00008b',
    borderRadius: 42,
    marginTop: 20,
  },
  sendMailText: {
    color: '#FEFEFE',
    fontFamily: 'SourceSans3-Regular',
  },
});
