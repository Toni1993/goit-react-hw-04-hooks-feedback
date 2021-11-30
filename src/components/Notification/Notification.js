import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
	return <h3 className={s.title}>{message}</h3>;
};
Notification.propTypes = {
	message: PropTypes.string,
};
Notification.defaultProps = {
	message: '',
};

export default Notification;
