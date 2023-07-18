import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChangePasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangePassword = () => {
    // Replace this with your actual logic for changing the password
    if (newPassword.trim() === '') {
      alert('Please enter a new password.');
    } else if (confirmPassword.trim() === '') {
      alert('Please confirm your new password.');
    } else if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match.');
    } else {
      // Code for changing the password goes here
      console.log('Password changed successfully!');
      alert('Password changed successfully!');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Change Password</Text>
          <Text style={styles.subTitle}>Enter a new password.</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder='New Password'
              secureTextEntry={!showNewPassword}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TouchableOpacity style={styles.showPasswordIcon} onPress={toggleShowNewPassword}>
              <Ionicons name={showNewPassword ? 'eye-off' : 'eye'} size={24} color='#A9A9A9' />
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder='Confirm New Password'
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity style={styles.showPasswordIcon} onPress={toggleShowConfirmPassword}>
              <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color='#A9A9A9' />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.changePasswordBtn} onPress={handleChangePassword}>
            <Text style={styles.changePasswordText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFCFB',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  topContainer: {
    width: '100%',
    gap: 6,
    alignItems: 'flex-start',
  },
  inputContainer: {
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    height: 46,
    backgroundColor: '#FBFBFB',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'SourceSans3-Regular',
    paddingHorizontal: 20,
  },
  showPasswordIcon: {
    paddingHorizontal: 10,
  },
  changePasswordBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 263,
    height: 47,
    backgroundColor: '#00008b',
    borderRadius: 42,
    marginTop: 30,
  },
  changePasswordText: {
    color: '#FEFEFE',
    fontFamily: 'SourceSans3-Regular',
  },
});
