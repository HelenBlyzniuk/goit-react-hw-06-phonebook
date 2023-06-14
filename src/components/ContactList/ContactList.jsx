import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeContact } from 'components/redux/contactsSlice.js';

import { ListContainer, ListItem, ListButton } from './ContactList.styled.jsx';

export function ContactList({contacts}) {
 
  const dispatch=useDispatch();
  const handleClick = e => {
    dispatch(removeContact(e.currentTarget.id));
  };

  return (
    <ListContainer>
      List of contacts
      {contacts.map(({ name, number, id }) => (
        <ListItem id={id} key={id}>
          {name}: {number}
          <ListButton
            type="button"
            className="deleteContact"
            id={id}
            onClick={handleClick}
          >
            Delete
          </ListButton>
        </ListItem>
      ))}
    </ListContainer>
  );
}

ContactList.propTypes={
  contacts:PropTypes.arrayOf(
    PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })
  )
}
