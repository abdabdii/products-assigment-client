import React from 'react'
import styles from './TextField.Module.css'

export const TextField = ({id, label, error, helperText}) => {
    return (
        <div>
            <div className={styles['omrs-input-group']}>
				<label className={`${styles['omrs-input-underlined']} ${error?styles['omrs-input-danger']:''}`}>
				  <input  id={id}/>
				  <span className={styles['omrs-input-label']}>{label}</span>
					<span className={styles['omrs-input-helper']}>{helperText}</span>
				</label>
			</div>
        </div>
    )
}
