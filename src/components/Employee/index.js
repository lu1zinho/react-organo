import './Employee.css'

const Employee = ({ name, jobTitle, image, backgroundColor }) => {
    return (<div className='employee'>
        <div className='header' style={{backgroundColor: backgroundColor}}>
            <img src={image} alt={name} />
        </div>
        <div className='footer-employee'>
            <h4>{name}</h4>
            <h5>{jobTitle}</h5>
        </div>
    </div>)
}

export default Employee