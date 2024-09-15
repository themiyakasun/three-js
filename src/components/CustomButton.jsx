import { useSnapshot } from 'valtio';
import PropTypes from 'prop-types';

import state from '../store';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStye = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: '#fff',
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
