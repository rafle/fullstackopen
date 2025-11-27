import { useState } from 'react'

const Display = () => <div>give feedback</div>

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Statistics = ({good, bad, neutral}) => {
  const total = good + neutral + bad ;
  if (!total) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <p>statistics</p>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {total ? (good - bad) / total : 0 }</div>
      <div>positive {total ? (good / total) * 100 : 0} %</div>
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
      {/* code here */}
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
