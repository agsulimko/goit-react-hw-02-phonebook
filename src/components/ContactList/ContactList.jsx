import { Component } from 'react';
 import Contact from 'components/Contact/Contact';

import contacts from 'components/contacts.json';


class ContactList extends Component {


    state = { contacts }
  
    

    render() {
            
        const { contacts, filteredContacts, deleteContacts } = this.props;
            return (
            
        
                <ul>
                    {(filteredContacts ?? contacts).map((contact) => (
                        < Contact
                            contacts={contact}
                            key={contact.id}
                            deleteContacts={deleteContacts}
                            
                        />))}
                </ul>)
        }
    }
    



export default ContactList;



















