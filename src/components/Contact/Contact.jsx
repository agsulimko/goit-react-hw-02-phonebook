//  export handleDelete from '../ContactList/ContactList'
const Contact = ({ contacts, deleteContacts }) => {
    return (
        <li className='list-group-item'>
            
            <h3>{contacts.name}</h3>
                <h3>{contacts.number}</h3>
            
            <button
                type='button'
                className='btn-close'
                aria-label='Close'
                onClick={() => deleteContacts(contacts.id)}
            >Delete</button>
        </li>)
}
export default Contact;




