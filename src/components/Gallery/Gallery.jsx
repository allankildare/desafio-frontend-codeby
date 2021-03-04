import React, { Component } from 'react'
import style from './Gallery.module.css'

class Gallery extends Component {
    render() {
        return (
            <div className={style.gallery}>
                <div className={style.nature}>
                    <h3>Nature</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className={style.daily}>
                    <h3>Daily</h3>
                    <p>Praesent tincidunt consectetur diam</p>
                </div>
                <div className={style.together}>
                    <h3>Together</h3>
                    <p>Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum</p>
                </div>
                <div className={style.analysis}>
                    <h3>Analysis</h3>
                    <p>Duis sollicitudin mauris vitae venenatis aliquet</p>
                </div>
                <div className={style.pictures}>
                    <h3>Pictures</h3>
                    <p>Quisque eu nisl purus</p>
                </div>
            </div>
        )
    }
}

export default Gallery
