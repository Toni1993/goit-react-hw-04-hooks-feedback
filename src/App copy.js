// import s from './App.css';

// import React, {useState, useEffect} from 'react';
// import Statistics from 'components/Statistics/Statistics';
// import Section from 'components/Section/Section';
// import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

// export default function Feedback() {
//   const [good, setGoodState] = useState(0);
//   const [neutral, setNeutralState] = useState(0);
//   const [bad, setBadState] = useState(0);
//   const [total, setTotalState] = useState(0);
//   const [positivePercentage, setPositivePercentage] = useState(0);

// 	countTotalFeedback = () => {

// 		setTotalState()

// 		return {
// 			total: good + neutral + bad,
// 		};
// 	}

// 	countPositiveFeedbackPercentage=() =>{
// 		this.setState(state => {
// 			const { good, neutral, bad } = state;
// 			return {
// 				positivePercentage: Math.round((100 / (good + neutral + bad)) * good),
// 			};
// 		});
// 	}

// 	onLeaveFeedback(type) {
// 		this.setState({ [type]: this.state[type] + 1 });
// 		this.countTotalFeedback();
// 		this.countPositiveFeedbackPercentage();
// 		console.log(this.state.good);
// 	}

// 	render() {
// 		const { good, neutral, bad, total, positivePercentage } = this.state;

// 		return (
// 			<div className={s.component}>
// 				<Section title="Please leave feedback">
// 					<FeedbackOptions
// 						options={['good', 'neutral', 'bad']}
// 						onLeaveFeedback={this.onLeaveFeedback}
// 					/>
// 				</Section>

// 				<Section title="Statistics">
// 					<Statistics
// 						good={good}
// 						neutral={neutral}
// 						bad={bad}
// 						total={total}
// 						positivePercentage={positivePercentage}
// 					/>
// 				</Section>
// 			</div>
// 		);
// 	}
// }

// export default App;
