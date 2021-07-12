import React, { useState } from 'react'

const Header = ({ text }) => (
  <h1>
    {text}
  </h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => (
  <><td>{text}</td><td>{value}</td></>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <table>
      <tbody>
        <tr><Statistic text='good' value={good} /></tr>
        <tr><Statistic text='neutral' value={neutral} /></tr>
        <tr><Statistic text='bad' value={bad} /></tr>
        <tr><Statistic text='all' value={all} /></tr>
        <tr><Statistic text='average' value={average} /></tr>
        <tr><Statistic text='positive' value={positive + ' %'} /></tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleStats = (setter, stats) => () => { setter(stats + 1) }

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={handleStats(setGood, good)} text='good' />
      <Button handleClick={handleStats(setNeutral, neutral)} text='neutral' />
      <Button handleClick={handleStats(setBad, bad)} text='bad' />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
