import PropTypes from 'prop-types';
import {
  ButtonDelete,
  Item,
  FirstLetterBox,
  TextWraper,
} from './ContactItem.styled';
import { toggleModal } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, number, randomColor }) => {
  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleModal(id));

  return (
    <Item>
      <FirstLetterBox style={{ background: `${randomColor}` }}>
        {name[0]}
      </FirstLetterBox>
      <TextWraper>
        {name}: {number}
      </TextWraper>
      <ButtonDelete type="button" onClick={handleToggleModal}>
        Delete
      </ButtonDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  randomColor: PropTypes.string,
};
