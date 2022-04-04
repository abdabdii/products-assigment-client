import React from 'react'
import styles from './SelectBox.Module.css'

export const SelectBox = ({id, labelName, changeHandler, value, children}) => {
    return (
        <label htmlFor={id} className={styles['container']}>
            <span className={styles['select-label']} >{labelName}</span>
            <select className={styles['select']} onChange={(e)=>changeHandler(e)} value={value} id={id}>
                {children}
            </select>
        </label>
    )
}
