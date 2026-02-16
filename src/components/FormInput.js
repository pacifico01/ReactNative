import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const FormInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9e9e9e"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'start',
    marginBottom: 12,
  },
  label: {
    marginBottom: 6,
    color: '#333',
    fontSize: 14,
  },
  input: {
    height: 44,
    paddingHorizontal: 2,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#111',
  },
})

export default FormInput
