// import logo from './logo.svg';
// import './App.css';
import './main.css'
const estilo2 ={
  boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
}

const estilo = ({bg = '#222'}) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
})

const Componente = ({children}) => {
  return (
    <li  className='clase-li'>
      {children}
    </li>
  )
  // style={{ ...estilo2, ...estilo({ bg: '#333'})}}
}
const App = () => {
  const valor = 'triste'
  return (
  <ul  class Name="clase-css">
    <Componente estado="feliz">valor</Componente>
  </ul>
  )
  // style={estilo({ bg: '#750'})}
}

export default App;
