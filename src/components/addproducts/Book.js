import React from 'react'
import { TextInput } from './TextInput'

export const Book = ({ errors }) => {
    return (
        <TextInput inputId='weight' errors={errors} inputName='Weight (KG)' errorText='Please Enter a value' helpText='Please enter weight in KG'/>
    )
}
