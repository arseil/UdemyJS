// import { useState, useEffect, useCallback, useMemo } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`
//     }

//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`
//     }

//     changeSlide = (i) => {
//         this.setState(({ slide }) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({ autoplay }) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br /> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

// const calcValue = () => {
//     console.log('random');

//     return Math.random() * (50 - 1) + 1;
// }

// const countTotal = (num) => {
//     console.log('counting...');
//     return num + 10;
// }

// const Slider = (props) => {

//     const [slide, setSlide] = useState(0);
//     const [autoplay, setAutoplay] = useState(false);

//     const getSomeImages = useCallback(() => {
//         console.log('Fetching')
//         return [
//             "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
//             "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
//             "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//         ]
//     }, []);

//     // useEffect(() => {
//     //     console.log('effect')
//     //     document.title = `Slide: ${slide}`
//     // }, [])

//     // function logging() {
//     //     console.log('log!');
//     // }

//     // useEffect(() => {
//     //     console.log('effect update');
//     //     document.title = `Slide: ${slide}`;

//     //     window.addEventListener('click', logging);

//     //     return () => {
//     //         window.removeEventListener('click', logging);
//     //     }

//     // }, [slide])

//     // useEffect(() => {
//     //     console.log('autoplay')
//     // }, [autoplay])

//     function changeSlide(i) {
//         setSlide(slide => slide + i);
//     }

//     function toggleAutoplay() {
//         setAutoplay(autoplay => !autoplay);
//     }

//     // const [state, setState] = useState({ slide: 0, autoplay: false });

//     // function changeSlide(i) {
//     //     setState(state => ({ ...state, slide: state.slide + i }));
//     // }

//     // function toggleAutoplay() {
//     //     setState(state => ({ ...state, autoplay: !state.autoplay }));
//     // }

//     const total = useMemo(() => {
//         return countTotal(slide);
//     }, [slide]);

//     const style = useMemo(() => ({
//         color: slide > 4 ? 'red' : 'black'
//     }), [slide])

//     useEffect(() => {
//         console.log('style!')
//     }, [style])

//     return (
//         <Container>
//             <div className="slider w-50 m-auto">

//                 {/* {
//                     getSomeImages().map((url, i) => {
//                         return (
//                             <img key={i} className="d-block w-100" src={url} alt="slide" />
//                         )
//                     })
//                 } */}

//                 <Slide getSomeImages={getSomeImages} />

//                 <div className="text-center mt-5">Active slide {slide} <br />{autoplay ? 'auto' : null}</div>
//                 <div style={style} className="text-center mt-5">Total slides: {total}</div>

//                 <div className="buttons mt-3">
//                     <button
//                         className="btn btn-primary me-2"
//                         onClick={() => changeSlide(-1)}>-1</button>
//                     <button
//                         className="btn btn-primary me-2"
//                         onClick={() => changeSlide(1)}>+1</button>
//                     <button
//                         className="btn btn-primary me-2"
//                         onClick={toggleAutoplay}>toggle autoplay</button>
//                 </div>
//             </div>
//         </Container>
//     )
// }

// const Slide = ({ getSomeImages }) => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         setImages(getSomeImages())
//     }, [getSomeImages])

//     return (
//         <>
//             {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
//         </>
//     )
// }


// function App() {
//     const [slide, setSlider] = useState(true);

//     return (
//         <>
//             <button onClick={() => setSlider(!slide)}>Click</button>
//             {slide ? <Slider /> : null}

//         </>

//     );
// }

// export default App;

// lesson167 useRef
// import { useRef, useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// const Form = () => {
//     // const [text, setText] = useState('');

//     const myRef = useRef(1);

//     const focusFirstTI = () => {
//         myRef.current.focus();
//     }

//     // useEffect(() => {
//     //     myRef.current++;
//     //     console.log(myRef.current);
//     // })

//     return (
//         <Container>
//             <form className="w-50 border mt-5 p-3 m-auto">
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//                     <input
//                         ref={myRef}
//                         // onChange={(e) => setText(e.target.value)}
//                         type="email"
//                         className="form-control"
//                         id="exampleFormControlInput1"
//                         placeholder="name@example.com" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                     <textarea onChange={focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//             </form>
//         </Container>
//     )
// }

// function App() {
//     return (
//         <Form />
//     );
// }

// export default App;

// lesson169 creating own hooks
// import { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// function useInputWithValidate(initialValue) {
// 	const [value, setValue] = useState(initialValue);

// 	const onChange = event => {
// 		setValue(event.target.value);
// 	}

// 	const validateInput = () => {
// 		return value.search(/\d/) >= 0;
// 	}

// 	return { value, onChange, validateInput }
// }

// const Form = () => {
// 	const input = useInputWithValidate('');
// 	const textArea = useInputWithValidate('');

// 	const color = input.validateInput() ? 'text-danger' : null;

// 	return (
// 		<Container>
// 			<form className="w-50 border mt-5 p-3 m-auto">
// 				<div className="mb-3">
// 					<input value={`${input.value} / ${textArea.value}`} type="text" className="form-control" readOnly />
// 					<label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
// 					<input
// 						onChange={input.onChange}
// 						type="email"
// 						value={input.value}
// 						className={`form-control ${color}`}
// 						id="exampleFormControlInput1"
// 						placeholder="name@example.com" />
// 				</div>
// 				<div className="mb-3">
// 					<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
// 					<textarea
// 						onChange={textArea.onChange}
// 						value={textArea.value}
// 						className="form-control"
// 						id="exampleFormControlTextarea1"
// 						rows="3"></textarea>
// 				</div>
// 			</form>
// 		</Container>
// 	)
// }

// function App() {
// 	return (
// 		<Form />
// 	);
// }

// export default App;

// lesson171 batching
// import { useState } from "react";
// // import { flushSync } from "react-dom"; // хук чтобы разьединить batching

// function App() {
// 	const [count, setCount] = useState(0);
// 	const [flag, setFlag] = useState(false);

// 	function handleClick() {
// 		setTimeout(() => {
// 			setCount(c => c + 1);
// 			setFlag(f => !f);

// 			// flushSync(() => {
// 			// 	setCount(c => c + 1);
// 			// })

// 			// flushSync(() => {
// 			// 	setFlag(f => !f);
// 			// })
// 		}, 100)
// 	}

// 	console.log('render')

// 	return (
// 		<div>
// 			<button onClick={handleClick}>Next</button>
// 			<h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
// 		</div>
// 	);
// }

// export default App;

// //lesson177 React.memo
// import { useState, memo, useCallback } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// // function propsCompare(prevProps, nextProps) {
// // 	return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text;
// // }

// const Form = memo((props) => {
// 	console.log('render');
// 	return (
// 		<Container>
// 			<form className="w-50 border mt-5 p-3 m-auto">
// 				<div className="mb-3">
// 					<label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
// 					<input value={props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
// 				</div>
// 				<div className="mb-3">
// 					<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
// 					<textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
// 				</div>
// 			</form>
// 		</Container>
// 	)
// })

// function App() {
// 	const [data, setData] = useState({
// 		mail: "name@example.com",
// 		text: 'some text'
// 	});

// 	const onLog = useCallback(() => {
// 		console.log('wow');
// 	}, [])

// 	return (
// 		<>
// 			<Form mail={data.mail} text={data.text} onLog={onLog} />
// 			<button
// 				onClick={() => setData({
// 					mail: "name@example.com",
// 					text: 'another text'
// 				})}>
// 				Click me
// 			</button>
// 		</>
// 	);
// }

// export default App;

//lesson177 PureComponent
// import { useState, PureComponent } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// class Form extends PureComponent {
// 	render() {
// 		console.log('render');
// 		return (
// 			<Container>
// 				<form className="w-50 border mt-5 p-3 m-auto">
// 					<div className="mb-3">
// 						<label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
// 						<input value={this.props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
// 					</div>
// 					<div className="mb-3">
// 						<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
// 						<textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
// 					</div>
// 				</form>
// 			</Container>
// 		)
// 	}
// }

// function App() {
// 	const [data, setData] = useState({
// 		mail: "name@example.com",
// 		text: 'some text'
// 	});

// 	return (
// 		<>
// 			<Form mail={data.mail} text={data.text} />
// 			<button
// 				onClick={() => setData({
// 					mail: "name@example.com",
// 					text: 'another text'
// 				})}>
// 				Click me
// 			</button>
// 		</>
// 	);
// }

// export default App;

//lesson177 shouldComponentUpdate
// import { useState, Component } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// class Form extends Component {

// 	shouldComponentUpdate(nextProps) {
// 		if (this.props.mail.name === nextProps.mail.name) {
// 			return false
// 		} return true;
// 	}

// 	render() {
// 		console.log('render');
// 		return (
// 			<Container>
// 				<form className="w-50 border mt-5 p-3 m-auto">
// 					<div className="mb-3">
// 						<label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
// 						<input value={this.props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
// 					</div>
// 					<div className="mb-3">
// 						<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
// 						<textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
// 					</div>
// 				</form>
// 			</Container>
// 		)
// 	}
// }

// function App() {
// 	const [data, setData] = useState({
// 		mail: {
// 			name: "name@example.com"
// 		},
// 		text: 'some text'
// 	});

// 	return (
// 		<>
// 			<Form mail={data.mail} text={data.text} />
// 			<button
// 				onClick={() => setData({
// 					mail: {
// 						name: "name@example.com"
// 					},
// 					text: 'another text'
// 				})}>
// 				Click me
// 			</button>
// 		</>
// 	);
// }

// export default App;

//lesson178 React Context
// import { useState, Component, createContext, useContext } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// const dataContext = createContext({
// 	mail: "name@example.com",
// 	text: 'some text'
// });

// const { Provider, Consumer } = dataContext;

// const Form = (props) => {
// 	console.log('render');
// 	return (
// 		<Container>
// 			<form className="w-50 border mt-5 p-3 m-auto">
// 				<div className="mb-3">
// 					<label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
// 					<InputComponent />
// 				</div>
// 				<div className="mb-3">
// 					<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
// 					<textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
// 				</div>
// 			</form>
// 		</Container>
// 	)
// }

// const InputComponent = () => {

// 	const context = useContext(dataContext);

// 	return (
// 		<input
// 			value={context.mail}
// 			type="email"
// 			className='form-control'
// 			id="exampleFormControlInput1"
// 			placeholder="name@example.com" />
// 	)
// }

// // class InputComponent extends Component {

// // 	static contextType = dataContext;

// // 	render() {
// // 		return (
// // 			// <Consumer>
// // 			// 	{
// // 			// 		value => {
// // 			// 			return (
// // 			// 				<input
// // 			// 					value={value.mail}
// // 			// 					type="email"
// // 			// 					className='form-control'
// // 			// 					id="exampleFormControlInput1"
// // 			// 					placeholder="name@example.com" />
// // 			// 			)
// // 			// 		}
// // 			// 	}
// // 			// </Consumer>
// // 			<input
// // 				value={this.context.mail}
// // 				type="email"
// // 				className='form-control'
// // 				id="exampleFormControlInput1"
// // 				placeholder="name@example.com" />
// // 		)
// // 	}
// // }

// // InputComponent.contextType = dataContext;

// function App() {
// 	const [data, setData] = useState({
// 		mail: "name@example.com",
// 		text: 'some text'
// 	});

// 	return (
// 		<Provider value={data}>
// 			<Form text={data.text} />
// 			<button
// 				onClick={() => setData({
// 					mail: "second@example.com",
// 					text: 'another text'
// 				})}>
// 				Click me
// 			</button>
// 		</Provider>
// 	);
// }

// export default App;

// lesson178
// import { useState } from 'react';
// import dataContext from './178. Context/context';
// import Form from './178. Context/Form';
// import './App.css';

// const { Provider } = dataContext;

// function App() {
// 	const [data, setData] = useState({
// 		mail: "name@example.com",
// 		text: 'some text',
// 		forceChangeMail: forceChangeMail
// 	});

// 	function forceChangeMail() {
// 		setData({ ...data, mail: 'test@gmail.com' })
// 	}

// 	return (
// 		<Provider value={data}>
// 			<Form text={data.text} />
// 			<button
// 				onClick={() => setData({
// 					mail: "second@example.com",
// 					text: 'another text',
// 					forceChangeMail: forceChangeMail
// 				})}>
// 				Click me
// 			</button>
// 		</Provider>
// 	);
// }

// export default App;

// lesson179 useReducer
// import { useState, useReducer } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// function reducer(state, action) {
// 	switch (action.type) {
// 		case 'toggle':
// 			return { autoplay: !state.autoplay };
// 		case 'slow':
// 			return { autoplay: 300 };
// 		case 'fast':
// 			return { autoplay: 700 };
// 		case 'custom':
// 			return { autoplay: action.payload }
// 		default:
// 			throw new Error();
// 	}
// }

// function init(initial) {
// 	return { autoplay: initial }
// }

// const Slider = ({ initial }) => {
// 	const [slide, setSlide] = useState(0);
// 	// const [autoplay, setAutoplay] = useState(false);
// 	const [autoplay, dispatch] = useReducer(reducer, initial, init);

// 	function changeSlide(i) {
// 		setSlide(slide => slide + i);
// 	}

// 	return (
// 		<Container>
// 			<div className="slider w-50 m-auto">
// 				<img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
// 				<div className="text-center mt-5">Active slide {slide} <br />{autoplay.autoplay ? 'auto' : null} </div>
// 				<div className="buttons mt-3">
// 					<button
// 						className="btn btn-primary me-2"
// 						onClick={() => changeSlide(-1)}>-1</button>
// 					<button
// 						className="btn btn-primary me-2"
// 						onClick={() => changeSlide(1)}>+1</button>
// 					<button
// 						className="btn btn-primary me-2"
// 						onClick={() => dispatch({ type: 'toggle' })}>toggle autoplay</button>
// 					<button
// 						className="btn btn-primary me-2"
// 						onClick={() => dispatch({ type: 'slow' })}>slow autoplay</button>
// 					<button
// 						className="btn btn-primary me-2"
// 						onClick={() => dispatch({ type: 'fast' })}>fast autoplay</button>
// 					<button
// 						className="btn btn-primary me-2"
// 						onClick={(e) => dispatch({ type: 'custom', payload: +e.target.textContent })}>1000</button>
// 				</div>
// 			</div>
// 		</Container>
// 	)
// }

// function App() {
// 	return (
// 		<Slider initial={false} />
// 	);
// }

// export default App;

// lesson180 Компоненты высшего порядка higher-order component (HOC)
// const f = (a) => {
// 	return (b) => {
// 		console.log(a + b);
// 	}
// }

// f(1)(2);

// const f = (a) => {
// 	return class extends Component {
// 		render() {
// 			return <h1>Hello</h1>
// 		}
// 	}
// }
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const withSlider = (BaseComponent, getData) => {
	return (props) => {
		const [slide, setSlide] = useState(0);
		const [autoplay, setAutoplay] = useState(false)

		useEffect(() => {
			setSlide(getData());
		}, [])

		function changeSlide(i) {
			setSlide(slide => slide + i);
		}

		return <BaseComponent
			{...props}
			slide={slide}
			autoplay={autoplay}
			changeSlide={changeSlide}
			setAutoplay={setAutoplay} />
	}
}

const getDataFromFirstFetch = () => { return 10 };
const getDataFromSecondFetch = () => { return 20 };

const SliderFirst = (props) => {
	return (
		<Container>
			<div className="slider w-50 m-auto">
				<img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
				<div className="text-center mt-5">Active slide {props.slide}</div>
				<div className="buttons mt-3">
					<button
						className="btn btn-primary me-2"
						onClick={() => props.changeSlide(-1)}>-1</button>
					<button
						className="btn btn-primary me-2"
						onClick={() => props.changeSlide(1)}>+1</button>
				</div>
			</div>
		</Container>
	)
}

const SliderSecond = (props) => {
	return (
		<Container>
			<div className="slider w-50 m-auto">
				<img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
				<div className="text-center mt-5">Active slide {props.slide} <br />{props.autoplay ? 'auto' : null} </div>
				<div className="buttons mt-3">
					<button
						className="btn btn-primary me-2"
						onClick={() => props.changeSlide(-1)}>-1</button>
					<button
						className="btn btn-primary me-2"
						onClick={() => props.changeSlide(1)}>+1</button>
					<button
						className="btn btn-primary me-2"
						onClick={() => props.setAutoplay(autoplay => !props.autoplay)}>toggle autoplay</button>
				</div>
			</div>
		</Container>
	)
}

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch);

const withLogger = WrappedComponent => props => {
	useEffect(() => {
		console.log('first render!')
	}, [])

	return <WrappedComponent {...props} />
}

const Hello = () => {
	return (
		<h1>Hello</h1>
	)
}

const HelloWithLogger = withLogger(Hello);

function App() {
	return (
		<>
			<HelloWithLogger />
			<SliderWithFirstFetch />
			<SliderWithSecondFetch />
		</>
	);
}

export default App;
