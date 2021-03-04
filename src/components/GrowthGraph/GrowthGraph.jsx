import React, { Component } from 'react'
import style from './GrowthGraph.module.css'

class GrowthGraph extends Component {
    render() {
        return (
            <div className={style.growthGraph}>
                <div className={style.priceHour}>
                    <h4>{this.props.price}</h4>
                    <p>{this.props.hour}</p>
                </div>
                <div className={style.text} style={{paddingTop: this.props.paddingTop}}>
                    Lorem ipsum dolor sit
                    amet, consectetur
                    adipiscing elit.
                </div>
            </div>
        )
    }
}
export default GrowthGraph