import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filter/filterSlice';
import { filterSelector } from 'redux/filter/selectors';

export default function Filter() {
  const dispatch = useDispatch();

  const { filter } = useSelector(filterSelector);

  const handleChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      ></input>
    </label>
  );
}
