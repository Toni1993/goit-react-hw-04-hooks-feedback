import s from './App.css';
import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class App extends Component {
	constructor() {
		super();
		this.countTotalFeedback = this.countTotalFeedback.bind(this);
		this.countPositiveFeedbackPercentage =
			this.countPositiveFeedbackPercentage.bind(this);
		this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
	}

	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	countTotalFeedback() {
		this.setState(state => {
			const { good, neutral, bad } = state;
			return {
				total: good + neutral + bad,
			};
		});
	}

	countPositiveFeedbackPercentage() {
		this.setState(state => {
			const { good, neutral, bad } = state;
			return {
				positivePercentage: Math.round((100 / (good + neutral + bad)) * good),
			};
		});
	}

	onLeaveFeedback(type) {
		this.setState({ [type]: this.state[type] + 1 });
		this.countTotalFeedback();
		this.countPositiveFeedbackPercentage();
		console.log(this.state.good);
	}

	render() {
		const { good, neutral, bad, total, positivePercentage } = this.state;

		return (
			<div className={s.component}>
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={['good', 'neutral', 'bad']}
						onLeaveFeedback={this.onLeaveFeedback}
					/>
				</Section>

				<Section title="Statistics">
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={total}
						positivePercentage={positivePercentage}
					/>
				</Section>
			</div>
		);
	}
}

export default App;
