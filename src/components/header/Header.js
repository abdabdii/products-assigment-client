
import styles from './Header.Module.scss'


import React from 'react'

export const Header = ({children, title}) => {
    return (
        <div className={styles['container']}>
                <h4>
                    {title}
                </h4>
                <div className={styles['btns-container']}>
                    {children}
                </div>
        </div>
    )
}
