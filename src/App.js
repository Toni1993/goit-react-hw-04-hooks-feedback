import s from './App.css';
import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

function App() {
	const [good, setGoodState] = useState(0);
	const [neutral, setNeutralState] = useState(0);
	const [bad, setBadState] = useState(0);

	const countTotalFeedback = () => {
		return good + neutral + bad;
	};

	const countPositiveFeedbackPercentage = () => {
		return Math.round((100 / (good + neutral + bad)) * good);
	};

	const onLeaveFeedback = option => {
		switch (option) {
			case 'good':
				setGoodState(prevGood => prevGood + 1);
				break;

			case 'neutral':
				setNeutralState(prevNeutral => prevNeutral + 1);
				break;

			case 'bad':
				setBadState(prevBad => prevBad + 1);
				break;

			default:
				console.log('Invalid subscription type');
		}
	};

	return (
		<div className={s.component}>
			<Section title="Please leave feedback">
				<FeedbackOptions
					options={['good', 'neutral', 'bad']}
					onLeaveFeedback={onLeaveFeedback}
				/>
			</Section>

			<Section title="Statistics">
				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					total={countTotalFeedback()}
					positivePercentage={countPositiveFeedbackPercentage()}
				/>
			</Section>
		</div>
	);
}

export default App;
