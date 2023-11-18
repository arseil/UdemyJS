
// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

const App = (props) => {
    const [num, setNum] = React.useState(props.counter);

    const changeNum = (i) => {
        setNum(num => (num < 50 && num > -50) ? num + i : num);
    }

    const rndNum = () => {
        setNum(num => (Math.round(Math.random() * (50 - -50) + -50)))
    }

    const resetNum = (i) => {
        setNum(num => num = i)
    }
    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке

    return (
        <div class="app">
            <div class="counter">{num}</div>
            <div class="controls">
                <button onClick={() => changeNum(1)}>INC</button>
                <button onClick={() => changeNum(-1)}>DEC</button>
                <button onClick={rndNum}>RND</button>
                <button onClick={() => resetNum(props.counter)}>RESET</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App counter={0} />, document.getElementById('app'));