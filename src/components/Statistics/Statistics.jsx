import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={css.list}>
    <li className={css.feedback}>Good: {good}</li>
    <li className={css.feedback}>Neutral: {neutral}</li>
    <li className={css.feedback}>Bad: {bad}</li>
    <li className={css.feedback}>Total: {total}</li>
    <li className={css.feedback}>Positive feedback: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
