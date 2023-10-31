import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './Container/Container';

export const App = () => {
  const [good, setGoodValue] = useState(0);
  const [neutral, setNeutralValue] = useState(0);
  const [bad, setBadValue] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGoodValue(prevGoodValue => prevGoodValue + 1);
        break;
      case 'neutral':
        setNeutralValue(prevNeutralValue => prevNeutralValue + 1);
        break;
      case 'bad':
        setBadValue(prevBadValue => prevBadValue + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  };

  const options = Object.keys({ good, neutral, bad });
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={options}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    </>
  );
};
