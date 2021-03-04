import React, { Component } from 'react'
import GrowthGraph from '../GrowthGraph/GrowthGraph'
import style from './Growth.module.css'
class Growth extends Component {
    render() {
        return (
            <section className={style.growth}>
                <div className={style.sectionTitle}>
                    <h1>Growth plans</h1>
                    <h2>Take your business to the next level</h2>
                </div>
                <div className={style.graphs}>
                    <div>
                        <GrowthGraph price="$ 100" hour="100 + hours" paddingTop="30px"/>
                        <GrowthGraph price="$ 150" hour="180 + hours" paddingTop="70px"/>
                        <GrowthGraph price="$ 200" hour="260 + hours" paddingTop="110px"/>
                        <GrowthGraph price="$ 250" hour="380 + hours" paddingTop="150px"/>
                        <GrowthGraph price="$ 300" hour="420 + hours" paddingTop="190px"/>
                        <GrowthGraph price="$ 350" hour="520 + hours" paddingTop="240px"/>
                    </div>
                </div>
            </section>
        )
    }
}
export default Growth