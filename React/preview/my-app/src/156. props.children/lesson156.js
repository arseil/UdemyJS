import { Component, Fragment } from "react";
import styled from "styled-components";

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
    a {
        position: relative;
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'orange' : 'black'};
    }
    a::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 10px;
        width: 100px;
        height: 3px;
        background-color: #764abc;
        transform: translateX(-50%);
        transition: all 1s;
    }   
    input {
        display: block;
        margin: 10px auto;
    }
`;

const Header = styled.h2`
    font-size: 32px;
    color: #BF1F99;
`;

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 25px;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, surname, link } = this.props;
        const { position, years } = this.state;
        return (
            <EmpItem active={false}>
                {/* <button onClick={() => this.nextYear()}>{this.state.text}</button> */}
                <Button onClick={this.nextYear}>{this.state.text}</Button>
                <Header>My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}</Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    {/* <input type="text" onChange={his.commitInputChanges} /> */}
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                </form>
            </EmpItem>
        )
    }
}

export default WhoAmI;