import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import FormInput from '../components/FormInput'
import PrimaryButton from '../components/PrimaryButton'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ROUTES } from '../utils'

const Login = ({ navigation }) => {
  // form state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // derived state
  const isValidEmail = (value) => {
    return /\S+@\S+\.\S+/.test(value)
  }

  const canSubmit = email.length > 0 && password.length > 0 && isValidEmail(email)

  // effects
  useEffect(() => {
    // example side-effect: simple form field debug logging
    // keep effects small and focused; this runs when email or password changes
    // (In production, remove or gate with a debug flag)
    // console.debug('Login form state', { email, passwordLength: password.length })
  }, [email, password])

  // handlers
  const handleSubmit = async () => {
    if (!canSubmit) {
      Alert.alert('Invalid input', 'Please enter a valid email and password.')
      return
    }

    setLoading(true)
    try {
      // placeholder for actual auth call - keep it abstracted so it is testable
      await fakeSignIn({ email, password })
      // navigate to Home and reset stack so user cannot go back to Login
      navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.HOME }],
      })
    } catch (err) {
      Alert.alert('Login failed', err?.message ?? 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oyanib Portal</Text>
      <FormInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="e.g you@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <FormInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
        <Icon name="rocket" size={30} color="#900" />
      <PrimaryButton title={loading ? 'Signing in...' : 'Sign In'} onPress={handleSubmit} disabled={loading || !canSubmit} />
    </View>
  )
}

// small fake auth helper to simulate network call; keep outside component for reusability/testability
const fakeSignIn = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        resolve({ ok: true })
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 700)
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f7fb',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#c14908ff',
  },
})

export default Login