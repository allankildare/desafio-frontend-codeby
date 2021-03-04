import React, { Component } from 'react'
import Gallery from '../Gallery/Gallery'
import style from './Categories.module.css'
class Categories extends Component {
    render() {
        return (
            <section className={style.categories}>
                <h1>Categories</h1>
                <h2>Discover new possibilities to help you today</h2>
                <Gallery />
            </section>
        )
    }
}

export default Categories