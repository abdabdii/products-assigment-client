import React from 'react'
import styles from './Button.Module.scss'

export const Button = ({styleType, text, clickHandler, type}) => {
    return (
        <button onClick={clickHandler?()=>clickHandler():undefined} type={type?type:''} className={`${styles['btn']} ${styles[styleType]}`}>
            {text}
        </button>
    )
}
