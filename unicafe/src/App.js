import { useState } from "react"

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}> 
    {text}
  </button>
)

const Statistics = ({text, value}) => {
  console.log({text, value})

  const all = () => (value[0] + value[1] + value[2])
  const average = () => ((value[0] - value[2]) / all())

  if (all() == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticLine text={text[0]} value={value[0]}/>
        <StatisticLine text={text[1]} value={value[1]}/>
        <StatisticLine text={text[2]} value={value[2]}/>
        <StatisticLine text="all" value={all()}/>
        <StatisticLine text="average" value={average().toFixed(1)}/>
        <StatisticLine text="positive" value={(value[0]/all()*100).toFixed(1).toString().concat(" %")}/>
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => (
 // console.log(props)
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
)

const App = () => {
  const options = ["good", "neutral", "bad"]
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick = {increaseGood} text={options[0]}/>
      <Button handleClick = {increaseNeutral} text={options[1]}/>
      <Button handleClick = {increaseBad} text={options[2]}/>
      <Header text="statistics"/>
      <Statistics text={options} value={[good, neutral, bad]}/>
    </div>
  )
}

export default App;
