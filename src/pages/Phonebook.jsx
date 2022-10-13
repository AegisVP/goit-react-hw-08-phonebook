import { IconButton } from 'components/Common/StyledComponents/IconButton.styled';
import { Modal } from 'components/Modal/Modal';
import { AddContactForm } from 'components/Phonebook/AddContactForm/AddContactForm';
import { ContactList } from 'components/Phonebook/ContactList/ContactList';
import { Filter } from 'components/Phonebook/Filter/Filter';
import { Toolbar } from 'components/Toolbar/Toolbar';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CONST } from 'redux/constants';
import { addContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { search } = useSelector(selectFilter);
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState();
  const [isAdding, setIsAdding] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    if (contacts?.length > 0)
      setFilteredContacts(
        contacts.filter(contact => contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).sort((a, b) => a.name.localeCompare(b.name))
      );
  }, [contacts, search]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, user]);

  const handleModalClose = e => {
    setIsModalOpen(false);
  };

  const handleAddContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, number } = form.elements;

    const isNameInContacts = contacts.some(contact => contact.name.toLocaleLowerCase() === name.value.trim().toLocaleLowerCase());

    if (isNameInContacts) {
      window.alert('This name already exists in the list!');
      return;
    }

    await setIsAdding(true);
    await dispatch(addContact({ name: name.value, number: number.value }));
    await setIsAdding(false);
    handleModalClose();
    dispatch(fetchContacts());
  };

  return (
    <>
      <Toolbar>
        <Filter />
        <IconButton style={{ color: '#bbffbb' }} onClick={e => setIsModalOpen(true)}>
          {CONST.icon.add}
        </IconButton>
      </Toolbar>

      <ContactList contacts={filteredContacts.sort()} />

      <Modal isModalOpen={isModalOpen} handleClose={handleModalClose} title="modal title">
        <AddContactForm isLoading={isAdding} handleSubmit={handleAddContactSubmit} />
      </Modal>
    </>
  );
};

export default Phonebook;
