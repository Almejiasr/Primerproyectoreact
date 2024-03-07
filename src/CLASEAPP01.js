import { Component } from "react"


class Button extends Component {
    state = {}
    constructor(props) {
        super(props)
        console.log('constructor', props)
    }

    componentDidMount() {
        console.log('componenteDidMount')
    }

    componentDidUpdate(prevProps, PrevState) {
        console.log('componente , update', prevProps, PrevState);
    }

    componentWillUnmount() {
        console.log('desmontando componente', this.props, this.state)
    };

    render() {
        console.log('ejecutando metodo render de button');
        return (
            <button onClick={() => this.setState({ prop: 1 })}>
                Enviar
            </button>
        )
    }
}



class App extends Component {
    state = { 
        valor: 3
    }
    render () {
        return (
            <div>
                <p>Hola mundo</p>
                {
                    this.state.valor === 3 ?
                    <Button chanchito = 'feliz'/>
                    : 
                     null
                }
                    <button className={`${this.state.valor}`}
                    onClick={() => this.setState({ valor: 2 })}>
                        Enviar en App
                    </button>
            </div>
        )
    }
}
export default App