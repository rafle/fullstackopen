import { useState } from 'react'

const Display = () => <h2>give feedback</h2>

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = ({text, value}) => { 
  return (
    <tbody>
      <tr>
        <td>{text}</td> 
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const total = good + neutral + bad ;
  if (!total) {
    return <p>No feedback given</p>
  }
  // if fact these ternaries are already handled above
  const average = total ? (good - bad) / total : 0
  const positive = total ? (good / total) * 100 : 0
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={total} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={positive + "%"} />
      </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display></Display>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
