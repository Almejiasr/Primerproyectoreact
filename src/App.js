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
    render() {
        console.log('ejecutando metodo render de button');
        return (
            <button>
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
                <Button chanchito = 'feliz'/>
                    <button className={`${this.state.valor}`}
                    onClick={() => this.setState({ valor: 2 })}>
                        Enviar en App
                    </button>
            </div>
        )
    }
}
export default App