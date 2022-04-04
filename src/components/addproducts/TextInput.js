import React from 'react'
import { TextField } from '../customComponents/textfield/TextField'

export const TextInput = ({inputName, inputId, errorText, helpText, errors}) => {
    return (
            <div>
                <TextField 
                    id={inputId}
                    label={inputName}
                    error={errors.includes(inputId)?true:false}
                    helperText={errors.includes(inputId)?errorText:helpText}
                     />
            </div>
    )
}
