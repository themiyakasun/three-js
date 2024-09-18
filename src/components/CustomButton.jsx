import { useSnapshot } from 'valtio';
import PropTypes from 'prop-types';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStye = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === 'outlined') {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStye(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  customStyles: PropTypes.string,
  handleClick: PropTypes.func,
};

export default CustomButton;
