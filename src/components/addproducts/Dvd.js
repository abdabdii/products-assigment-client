import React from 'react'
import { TextInput } from './TextInput'

export const Dvd = ({ errors }) => {
    return (
        <TextInput inputId='size' errors={errors} inputName='Size (MB)' errorText='Please Enter a value' helpText='Please enter size in MB'/>
    )
}
