import { Component, StrictMode } from 'react';
import './App.css';

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
import WhoAmI from './132. Events in React/lesson132'

function App() {
	return (
		<div className="App">
			<WhoAmI name='John' surname='Smith' link='facebook.com' />
			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
		</div>
	);
}

export default App;