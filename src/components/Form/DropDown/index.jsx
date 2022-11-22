const Select = ({ required=false, title, size, icon, children }) => {

  return (
    <div className={`inputContainer ${size} select`}>
        <label className='label'>
          {title} 
          <span>{icon}</span>
        </label>
        <select required={required} >
            {children}
        </select>
    </div>
  )
};

export default Select;