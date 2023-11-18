function useCounter(initialValue) {
    const [value, setValue] = React.useState(initialValue);

    // initialValue = null, props убрать
    // React.useEffect(() => {
    //     fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
    //         .then(res => res.text())
    //         .then(res => setValue(res))
    //         .catch(err => console.log(err))
    // }, [])

    const incCounter = () => {
        if (value < 50) {
            setValue(counter => counter + 1)
        }
    }

    const decCounter = () => {
        if (value > -50) {
            setValue(counter => counter - 1)
        }
    }

    const rndCounter = () => {
        setValue(+(Math.random() * (50 - -50) + -50).toFixed(0))
    }

    const resetCounter = () => {
        setValue(value)
    }

    return { value, incCounter, decCounter, rndCounter, resetCounter }
}

const Counter = (props) => {
    const input = useCounter(props.counter)

    return (
        <div className="component">
            <div className="counter">{input.value}</div>
            <div className="controls">
                <button onClick={input.incCounter}>INC</button>
                <button onClick={input.decCounter}>DEC</button>
                <button onClick={input.rndCounter}>RND</button>
                <button onClick={input.resetCounter}>RESET</button>
            </div>
        </div>
    )
}

const RndCounter = (props) => {
    const input = useCounter(props.counter)

    return (
        <div className="component">
            <div className="counter">{input.value}</div>
            <div className="controls">
                <button onClick={input.rndCounter}>RND</button>
                <button onClick={input.resetCounter}>RESET</button>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <>
            <Counter counter={0} />
            <RndCounter counter={5} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));