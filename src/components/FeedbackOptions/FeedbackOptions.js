import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
	<div className={s.container}>
		{options.map(option => (
			<button
				onClick={() => onLeaveFeedback(option)}
				type="button"
				className={s.button}
				key={uuidv4()}
			>
				{option}
			</button>
		))}
	</div>
);

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
