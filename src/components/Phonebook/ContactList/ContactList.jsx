import { StyledHeading } from 'components/Common';
import { Contact } from '../Contact/Contact';
import { StyledContactList } from './ContactList.styled';

export const ContactList = ({ contacts = [] }) => {
  return contacts?.length >= 0 ? (
      <StyledContactList>
        {contacts.map(contact => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </StyledContactList>
  ) : (
    <StyledHeading>Your phonebook is empty</StyledHeading>
  );
};
