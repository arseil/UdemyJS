// import { Component, StrictMode } from 'react';
// import React, { Component } from 'react';
// import styled from 'styled-components';
// import './App.css';

// const Header = () => {
// 	return <h2>Hello World!</h2>
// }

// const Field = () => {
// 	const holder = 'Enter here';
// 	const styledField = {
// 		width: '300px'
// 	}
// 	return <input
// 		placeholder={holder}
// 		type='text'
// 		style={styledField} />
// }

// class Field extends Component {
// 	render() {
// 		const holder = 'Enter here';
// 		const styledField = {
// 			width: '300px'
// 		};

// 		return <input
// 			placeholder={holder}
// 			type='text'
// 			style={styledField} />
// 	}

// }

// function Btn() {
// 	const text = 'Log in';
// 	// const res = () => {
// 	//   return 'Log in';
// 	// }
// 	// const p = <p>Log in</p>

// 	const logged = false;

// 	return <button>{logged ? 'Enter' : text}</button>
// }

// function App() {
// 	return (
// 		<div className="App">
// 			<StrictMode>
// 				<Header />
// 			</StrictMode>
// 			<Field />
// 			<Btn />
// 		</div>
// 	);
// }

// export { Header };
// export default App;

// lesson127
// import WhoAmI from './127. Props/lesson127';

// function App() {
// 	return (
// 		<div className="App">
// 			{/* <WhoAmI name='John' surname='Smith' link='facebook.com' /> */}
// 			{/* <WhoAmI name='Alex' surname='Shepard' link='vk.com' /> */}
// 			{/* <WhoAmI name={{ firstName: 'John' }} surname='Smith' link='facebook.com' /> */}
// 			{/* <WhoAmI name={{ firstName: 'Alex' }} surname='Shepard' link='vk.com' /> */}
// 			<WhoAmI name={() => { return 'John' }} surname='Smith' link='facebook.com' />
// 			<WhoAmI name={() => { return 'Alex' }} surname='Shepard' link='vk.com' />

// 		</div>
// 	);
// }

// export default App;

// lesson130
// import WhoAmI from './130. State useState/lesson130'

// function App() {
// 	return (
// 		<div className="App">
// 			<WhoAmI name='John' surname='Smith' link='facebook.com' />
// 			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
// 		</div>
// 	);
// }

// export default App;

// lesson132
// import WhoAmI from './132. Events in React/lesson132'

// function App() {
// 	return (
// 		<div className="App">
// 			<WhoAmI name='John' surname='Smith' link='facebook.com' />
// 			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
// 		</div>
// 	);
// }

// export default App;

// lesson137
// import WhoAmI from './137. React fragment/lesson137'

// const Wrapper = styled.div`
// 	background: transparent;
// 	border-radius: 3px;
// 	border: 2px solid #BF4F74;
// 	color: #BF4F74;
// 	margin: 0.5em 1em;
// 	padding: 0.25em 1em;
// 	text-align: center;
// `;

// function App() {
// 	return (
// 		<Wrapper>
// 			<WhoAmI name='John' surname='Smith' link='facebook.com' />
// 			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
// 		</Wrapper>
// 	);
// }

// export default App;

// lesson143
// import WhoAmI from './143. Styled Component/lesson143'

// const Wrapper = styled.div`
// 	background: transparent;
// 	border-radius: 3px;
// 	border: 2px solid #BF4F74;
// 	color: #BF4F74;
// 	margin: 0.5em 1em;
// 	padding: 0.25em 1em;
// 	text-align: center;
// `;

// function App() {
// 	return (
// 		<Wrapper>
// 			<WhoAmI name='John' surname='Smith' link='facebook.com' />
// 			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
// 		</Wrapper>
// 	);
// }

// export default App;


// lesson144
// import WhoAmI from './144. React Bootstrap/lesson144'

// const Wrapper = styled.div`
// 	background: transparent;
// 	border-radius: 3px;
// 	border: 2px solid #BF4F74;
// 	color: #BF4F74;
// 	margin: 0.5em 1em;
// 	padding: 0.25em 1em;
// 	text-align: center;
// `;

// function App() {
// 	return (
// 		<Wrapper>
// 			<WhoAmI name='John' surname='Smith' link='facebook.com' />
// 			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
// 		</Wrapper>
// 	);
// }

// export default App;

// lesson156
// import WhoAmI from './156. props.children/lesson156'
// import BootstrapTest from './156. props.children/BootstrapTest';

// const Wrapper = styled.div`
// 	background: transparent;
// 	border-radius: 3px;
// 	border: 2px solid #BF4F74;
// 	color: #BF4F74;
// 	margin: 0.5em 1em;
// 	padding: 0.25em 1em;
// 	text-align: center;
// `;

// const DynamicGreating = (props) => {
// 	return (
// 		<div className={'mb-3 p-3 border border-' + props.color}>
// 			{
// 				React.Children.map(props.children, child => {
// 					return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
// 				})
// 			}
// 		</div>
// 	)
// }

// const HelloGreatings = () => {
// 	return (
// 		<div style={{ 'width': '600px', 'margin': '0 auto' }}>
// 			<DynamicGreating color={'primary'}>
// 				<h2>Hello world!</h2>
// 			</DynamicGreating>
// 		</div>
// 	)
// }

// function App() {
// 	return (
// 		<Wrapper>
// 			<HelloGreatings />
// 			<BootstrapTest
// 				left={
// 					<DynamicGreating color={'primary'}>
// 						<h2>This weel was hard</h2>
// 						<h2>Hello world!</h2>
// 					</DynamicGreating>
// 				}
// 				right={
// 					<DynamicGreating color={'primary'}>
// 						<h2>RIGHT</h2>
// 					</DynamicGreating>
// 				}
// 			/>

// 			<WhoAmI name='John' surname='Smith' link='facebook.com' />
// 			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
// 		</Wrapper>
// 	);
// }

// export default App;


// lesson158
// import WhoAmI from './156. props.children/lesson156'
// import BootstrapTest from './156. props.children/BootstrapTest';

// const Wrapper = styled.div`
// 	background: transparent;
// 	border-radius: 3px;
// 	border: 2px solid #BF4F74;
// 	color: #BF4F74;
// 	margin: 0.5em 1em;
// 	padding: 0.25em 1em;
// 	text-align: center;
// `;

// const DynamicGreating = (props) => {
// 	return (
// 		<div className={'mb-3 p-3 border border-' + props.color}>
// 			{
// 				React.Children.map(props.children, child => {
// 					return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
// 				})
// 			}
// 		</div>
// 	)
// }

// const HelloGreatings = () => {
// 	return (
// 		<div style={{ 'width': '600px', 'margin': '0 auto' }}>
// 			<DynamicGreating color={'primary'}>
// 				<h2>Hello world!</h2>
// 			</DynamicGreating>
// 		</div>
// 	)
// }

// const Message = (props) => {
// 	return (
// 		<h2>The counter is {props.counter}</h2>
// 	)
// }

// class Counter extends Component {
// 	state = {
// 		counter: 0
// 	}

// 	changeCounter = () => {
// 		this.setState(({ counter }) => ({
// 			counter: counter + 1
// 		}))
// 	}

// 	render() {
// 		return (
// 			<>
// 				<button
// 					className={'btn btn-primary'}
// 					onClick={this.changeCounter}>
// 					Click me
// 				</button>
// 				{this.props.render(this.state.counter)}
// 			</>
// 		)
// 	}
// }

// function App() {
// 	return (
// 		<Wrapper>

// 			<Counter render={counter => (
// 				<Message counter={counter} />
// 			)} />

// 			<HelloGreatings />
// 			<BootstrapTest
// 				left={
// 					<DynamicGreating color={'primary'}>
// 						<h2>This weel was hard</h2>
// 						<h2>Hello world!</h2>
// 					</DynamicGreating>
// 				}
// 				right={
// 					<DynamicGreating color={'primary'}>
// 						<h2>RIGHT</h2>
// 					</DynamicGreating>
// 				}
// 			/>

// 			<WhoAmI name='John' surname='Smith' link='facebook.com' />
// 			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
// 		</Wrapper>
// 	);
// }

// export default App;

// lesson159 ref
// import React, { Component } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// class Form extends Component {
// 	// myRef = React.createRef();

// 	// componentDidMount() {
// 	// 	this.myRef.current.focus();
// 	// }

// 	setInputRef = (elem) => {
// 		this.myRef = elem;
// 	}

// 	focusFirstTI = () => {
// 		if (this.myRef) {
// 			this.myRef.focus();
// 		}
// 	}

// 	// focusFirstTI = (value) => {
// 	// 	if (value.length < 30) {
// 	// 		this.myRef.current.focus();
// 	// 	}
// 	// }

// 	render() {
// 		return (
// 			<Container>
// 				<form className="w-50 border mt-5 p-3 m-auto">
// 					<div className="mb-3">
// 						<label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
// 						<input
// 							ref={this.setInputRef}
// 							type="email"
// 							className="form-control"
// 							id="exampleFormControlInput1"
// 							placeholder="name@example.com" />
// 					</div>
// 					<div className="mb-3">
// 						<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
// 						<textarea onChange={(e) => this.focusFirstTI(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
// 					</div>
// 				</form>
// 			</Container>
// 		)
// 	}
// }

// class TextInput extends Component {

// 	doSmth = () => {
// 		console.log('smth')
// 	}

// 	render() {
// 		return (
// 			<input
// 				type="email"
// 				className="form-control"
// 				id="exampleFormControlInput1"
// 				placeholder="name@example.com" />
// 		)
// 	}
// }

// function App() {
// 	return (
// 		<Form />
// 	);
// }

// export default App;


// lesson160 Portals
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import './App.css';

class Form extends Component {

	state = {
		advOpen: false
	}

	componentDidMount() {
		setTimeout(this.handleClick, 3000);
	}

	handleClick = () => {
		this.setState(({ advOpen }) => ({
			advOpen: !advOpen
		}))
	}

	render() {
		return (
			<Container>
				<form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto"
					style={{
						'overflow': 'hidden',
						'position': 'relative'
					}}>
					<div className="mb-3">
						<label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
						<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
					</div>
					<div className="mb-3">
						<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
					</div>

					{
						this.state.advOpen ?
							<Portal id={'adv'}>
								<Msg />
							</Portal> : null
					}
				</form>
			</Container>
		)
	}
}

const Portal = (props) => {
	let node = document.getElementById(props.id);
	if (!node) {
		node = document.createElement('div');
		node.id = 'adv';
		document.body.append(node);
	}

	return ReactDOM.createPortal(props.children, node);
}

const Msg = () => {
	return (
		<div
			style={{
				'width': '500px',
				'height': '150px',
				'backgroundColor': 'red',
				'position': 'absolute',
				'right': '0',
				'bottom': '0'
			}}>
			Hello
		</div>
	)
}

function App() {
	return (
		<Form />
	);
}

export default App;
