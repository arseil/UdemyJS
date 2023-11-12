// import { Component, StrictMode } from 'react';
import styled from 'styled-components';
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


// lesson143
import WhoAmI from './144. React Bootstrap/lesson144'

const Wrapper = styled.div`
	background: transparent;
	border-radius: 3px;
	border: 2px solid #BF4F74;
	color: #BF4F74;
	margin: 0.5em 1em;
	padding: 0.25em 1em;
	text-align: center;
`;

function App() {
	return (
		<Wrapper>
			<WhoAmI name='John' surname='Smith' link='facebook.com' />
			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
		</Wrapper>
	);
}

export default App;