import React from "react";
import styles from './Car.module.css'
class Car extends React.Component {
    constructor({car}) {
        super({car});
        this.state = {car}
    }

    render() {
        const {brand, price, year} = this.state.car
        return(
            <div className={styles.car}>
                <div><b>brand:</b> {brand}</div>
                <div><b>price:</b> {price}</div>
                <div><b>year:</b> {year}</div>
            </div>
        )
    }
}

export default Car