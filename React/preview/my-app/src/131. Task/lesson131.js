// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.counter
        }
    }

    inc = () => {
        if (this.state.counter >= 50) return;
        this.setState(state => ({
            counter: state.counter + 1
        }))
    };

    dec = () => {
        if (this.state.counter <= -50) return;
        this.setState(state => ({
            counter: state.counter - 1
        }))
    };

    rnd = () => {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        this.setState(state => ({
            counter: state.counter = getRandomIntInclusive(-50, 50)
        }))
    }

    rest = () => {
        this.setState(state => ({
            counter: state.counter = 0
        }))
    }

    render() {
        return (
            <div class="app">
                <div class="counter">{this.state.counter}</div>
                <div class="controls">
                    <button onClick={this.inc}>INC</button>
                    <button onClick={this.dec}>DEC</button>
                    <button onClick={this.rnd}>RND</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App counter={0} />, document.getElementById('app'));