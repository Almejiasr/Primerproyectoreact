import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// {/* <p> hola mundo</p> */}
const root = ReactDOM.createRoot(document.getElementById('root'));


// const Li = ({children, estado, edad, casa}) => {
//   return (
//     <li>{children} {estado} {edad} {casa}</li>
//   )
// }
// const X = () =>
//   <ul>
//     <Li
//       estado={'feliz'}
//       edad={24}
//       casa={false}
//     >
//       chanchito
//     </Li>
//     <Li estado={'triste'}>chanchito</Li>
//     <Li estado={'esta ansioso'}>Felipe</Li>
//   </ul>

root.render(
  <App />
  )
// );
// React.createElement('p', null, 'hola mundo')
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   x
// );

// ReactDOM.render(
//   'lala', document.getElementById('root')
// )






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
