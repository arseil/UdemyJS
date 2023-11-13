import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';
import { Button } from './143. Styled Component/lesson143';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

// const elem = <h2>Hello World!</h2>;
// const elem = React.createElement('h2', { className: 'greetings' }, 'Hello World!');
// const elem = {
//   type: 'h2',
//   props: {
//     className: 'greeting',
//     children: 'Hello World!'
//   }
// };

// const text = 'Hello World!';

// const elem = (
//   <div>
//     <h2 className='text'>Текст: {text}</h2>
//     <input type="text" />
//     <label htmlFor="text">text</label>
//     <button tabIndex={0}>Click!</button>
//   </div>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
