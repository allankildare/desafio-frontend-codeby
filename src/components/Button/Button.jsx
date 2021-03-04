import React, { Component } from 'react'
import style from './Button.module.css'

class Button extends Component {
    render() {
        return (
            <button 
                children={this.props.content.toUpperCase()}
                className={style.btn}
                style={{backgroundColor: this.props.bg}}>
                
            </button>
        )
    }
}
export default Button