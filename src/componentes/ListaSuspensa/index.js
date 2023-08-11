import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select placeholder="Selecione" required={props.required}>
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