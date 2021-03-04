import React, { Component } from 'react'
import Button from '../Button/Button'
import logo from './../../assets/logo.svg'
import style from './Home.module.css'

class Home extends Component {
    render() {
        return (
            <section className={style.homeCover}>
                <div className={style.logoBox}>
                    <img src={logo} alt="Logotipo Escalator" />
                    <h1>Escalator</h1>
                </div>
                <h1>
                    we have ideas to 
                    <br/>
                    growth your business
                </h1>
                <Button content="See now" bg="#fff"/>
            </section>
        )
    }
}

export default Home
