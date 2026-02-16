import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const PrimaryButton = ({ onPress, title, disabled = false, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled ? styles.disabled : null, style]}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
  
    width: '70%',
    height: 50,
    backgroundColor: '#c04e07ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 12,
  },
  disabled: {
    backgroundColor: '#ef860eff',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default PrimaryButton
