import { Component } from "react";

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++'
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    render() {
        const { name, surname, link } = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}

export default WhoAmI;