import React from "react";
import Car from "./Car/Car";
class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    async getCars () {
        try {
            const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            let data = await response.json()
            this.setState({cars: data})
        }catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getCars()
    }

    render() {
        return(
            <div>
                {this.state.cars.map((car) => <Car key = {car.id} car = {car}/>)}
            </div>
        )
    }
}

export default Cars