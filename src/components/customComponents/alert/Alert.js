import React from 'react'
import styles from './Alert.Module.css'

export const Alert = ({id, type, content}) => {
    return (
        <div className={`${styles['alert']} ${styles[type]}`}>
            <input type="checkbox" id={id}/>
            <label className={styles['close']} title="close" htmlFor={id}>
                <i className='icon-remove'></i>
            </label>
            <p className={styles['inner']}>
                {type==='error'?<strong>Error!</strong>:''} {content}
            </p>
	    </div>
    )
}
