import React from 'react'
import { TextInput } from './TextInput'

export const Furniture = ({ errors }) => {
    return (
        <>
            <TextInput inputId='height' errors={errors} inputName='Height (CM)' errorText='Please Enter a value' helpText='Please enter height in CM'/>
            <TextInput inputId='width' errors={errors} inputName='Width (CM)' errorText='Please Enter a value' helpText='Please enter width in CM'/>
            <TextInput inputId='length' errors={errors} inputName='Length (CM)' errorText='Please Enter a value' helpText='Please enter length in CM'/>
        </>
    )
}
