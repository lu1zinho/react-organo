import './DropDownList.css'

const DropDownList = (props) => {

    return (
        <div className='drop-down-list'>
            <label>{props.label}</label>
            <select onChange={event => props.onEdit(event.target.value)} required={props.required} value={props.value}>
                <option value="" />
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

 export default DropDownList