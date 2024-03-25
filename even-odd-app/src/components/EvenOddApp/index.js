import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component{
    state ={countNumber : 0}

    getRandomNumber = () => Math.ceil(Math.random()*100)

    onIncreaseValue = () => {
        const randomNumber = this.getRandomNumber();

        this.setState(prevState => ({countNumber: prevState.countNumber+randomNumber}))

    }
    render(){
        const {countNumber} = this.state
        const numberType = countNumber % 2 === 0 ?'Even':'Odd';
        return(
            <div className="bg-container">
                <div className="app-container">
                    <h1>Count {countNumber}</h1>
                    <p className="paragraph1">Count is {numberType}</p>
                    <button type="button" className="btn" onClick={this.onIncreaseValue}>Increment</button>
                    <p className="paragraph2">Increase by Random Number Between 0 to 100</p>
                </div>

            </div>
        )
    }
}
export default EvenOddApp;