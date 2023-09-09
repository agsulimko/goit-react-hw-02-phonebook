

const Filter = ({ handleFilter ,filter}) => {
  
    
    return (
        <div className=''>
            <label className='form-label'>
                Find contacts by name
            </label>
            <input
                 
                 type='text'
                 value={filter}
                 onChange={handleFilter}
              
                 name="filterQuery"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 placeholder="Search contacts..."
            />
        </div>
    )
};

export default Filter;