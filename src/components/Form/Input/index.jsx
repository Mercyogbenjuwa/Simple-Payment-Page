const Input = ({ type='text', icon, required=false, title, size='md', instruction }) => {
    return(
        <div className={`inputContainer ${size}`}>
            <label className='label'>
                {title} 
                <span>{icon}</span>
                <small className="instruction">{instruction}</small>
            </label>
            <input type={type} required={required} />
        </div>
    )
}

export default Input;