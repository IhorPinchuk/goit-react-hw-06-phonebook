import PropTypes from 'prop-types';
import css from './ContactElementList.module.css';

export default function ContactElementList({
  name,
  number,
  handleClickDelete,
}) {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        className={css.contact__list__item__btn}
        type="button"
        onClick={handleClickDelete}
      >
        Delete
      </button>
    </>
  );
}

ContactElementList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleClickDelete: PropTypes.func.isRequired,
};
