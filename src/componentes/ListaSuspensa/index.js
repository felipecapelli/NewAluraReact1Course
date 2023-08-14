import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
//{props.itens.map(item => <option key={item}>{item}</option>)}

/*{props.itens.map(item => { return <option>{item}</option>})} // colocando entre chaves e adicionando return, da pra ter multiplas linhas no arrow function*/

export default ListaSuspensa