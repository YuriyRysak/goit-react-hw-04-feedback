import PropTypes from 'prop-types';
import './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onHandleIncrement }) => {
 

  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onHandleIncrement}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onHandleIncrement: PropTypes.func,
};
