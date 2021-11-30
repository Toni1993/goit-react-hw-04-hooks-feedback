import s from './Statistics.module.css';
import Notification from '../../components/Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<>
			{total > 0 ? (
				<div>
					<p className={s.title}>Good: {good}</p>
					<p className={s.title}>Neutral: {neutral}</p>
					<p className={s.title}>Bad: {bad}</p>
					<p className={s.title}>Total: {total}</p>
					<p className={s.title}>Positive Feedback: {positivePercentage}%</p>
				</div>
			) : (
				<Notification message="No feedback given" />
			)}
		</>
	);
};
Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number,
	positivePercentage: PropTypes.number,
};
Statistics.defaultProps = {
	total: 0,
	positivePercentage: 0,
};
export default Statistics;
