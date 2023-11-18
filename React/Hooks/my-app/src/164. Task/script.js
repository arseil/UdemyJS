
// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

import { useEffect, useState } from "react";

const App = (props) => {
    const [num, setNum] = React.useState(props.counter);
    const getResource = async () => {
        const res = await fetch('https://belarusbank.by/api/kursExchange');

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    const [current, setCurrent] = React.useState();

    setCurrent(current => getResource().map(_transformData))

    const _transformData = (arr) => {
        return {
            usd: arr.USD_out,
            eur: arr.EUR_out,
            rub: arr.RUB_out,
            cny: arr.CNY_out
        };
    };

    // const [usd, setUsd] = React.useState();
    // const [eur, setEur] = React.useState();
    // const [rub, setRub] = React.useState();
    // const [cny, setCny] = React.useState();

    const convertEur = () => {
        setEur(eur => eur = current.EUR_out)
    }
    const convertUsd = () => {
        setUsd(usd => usd = current.USD_out)
    }
    const convertRub = () => {
        setRub(rub => rub = current.RUB_out)
    }
    const convertCny = () => {
        setCny(cny => cny = current.CNY_out)
    }


    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке

    return (
        <div class="app">
            <div class="counter">{num}</div>
            <div class="controls">
                <button onClick={convertEur}>Eur</button>
                <button onClick={convertUsd}>USD</button>
                <button onClick={convertRub}>Rub</button>
                <button onClick={convertCny}>CNY</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App counter={100} />, document.getElementById('app'));