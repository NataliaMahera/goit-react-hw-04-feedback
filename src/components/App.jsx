import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './Container/Container';

export const App = () => {
  const [goodValue, setGoodValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [badValue, setBadValue] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'goodValue':
        setGoodValue(prevGoodValue => prevGoodValue + 1);
        break;
      case 'neutralValue':
        setNeutralValue(prevNeutralValue => prevNeutralValue + 1);
        break;
      case 'badValue':
        setBadValue(prevBadValue => prevBadValue + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return goodValue + neutralValue + badValue;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return Math.round((goodValue / totalFeedback) * 100);
  };

  const options = Object.keys({ goodValue, neutralValue, badValue });
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
              good={goodValue}
              neutral={neutralValue}
              bad={badValue}
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
