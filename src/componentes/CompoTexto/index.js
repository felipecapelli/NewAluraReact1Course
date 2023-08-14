import './CampoTexto.css'

const CampoTexto = (props) => {

    //const placeholderUsandoTemplateString = `${props.placeholder}....` //da pra fazer com template string também

    /*
    //let valor = 'teste' //desse jeito não funciona
    //const [valor, setValor] = useState('teste') // desse jeito funciona

    const aoDigitado = (evento) => {
        setValor (evento.target.value)
        console.log(valor)
    }*/

    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value) 
    }

    return(
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
            {/*<input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>*/}
            {/*<input placeholder={placeholderUsandoTemplateString}/>*/}
        </div>
    )
}

export default CampoTexto


/*

//ao inves de usar componentes funcionais, da pra criar componentes react usando as classes do ES6
//Ver nesse link da documentação https://pt-br.legacy.reactjs.org/docs/components-and-props.html

import React from 'react';
class CampoTexto extends React.Component {
    render() {
        return(
            <div className='campo-texto'>
                <label>
                    {this.props.label}
                </label>
                <input placeholder={this.props.placeholder}/>
            </div>
        )
    }
}

export default CampoTexto*/