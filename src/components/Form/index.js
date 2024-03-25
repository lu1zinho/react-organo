import { useState } from 'react'
import Button from '../Button'
import DropDownList from '../DropDownList'
import TextField from '../TextField'
import './Form.css'


const Form = (props) => {

    const [name, setName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onAddEmployee({
            name,
            jobTitle,
            image,
            team
        })
        setName('')
        setJobTitle('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill in the data to create the employee card</h2>
                <TextField
                    required={true}
                    label="Name"
                    placeholder="Type your name"
                    value={name}
                    onEdit={v => setName(v)}
                />
                <TextField
                    required={true}
                    label="Job title"
                    placeholder="Type tour job title"
                    value={jobTitle}
                    onEdit={v => setJobTitle(v)}
                />
                <TextField
                    label="Image"
                    placeholder="Type the image URL"
                    value={image}
                    onEdit={v => setImage(v)}
                />
                <DropDownList
                    required={true}
                    label="Team"
                    items={props.teams} 
                    value={team}
                    onEdit={v => setTeam(v)}
                />
                <Button>
                    Add Card
                </Button>
            </form>
        </section>
    )
}

export default Form