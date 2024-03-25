import './TextField.css'

const TextField = (props) => {

    const modifiedPlaceholder = `${props.placeholder}...`

    const onEdit = (event) => {
        props.onEdit(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onEdit} required={props.required} placeholder={modifiedPlaceholder} ></input>
        </div>
    )
}

export default TextField