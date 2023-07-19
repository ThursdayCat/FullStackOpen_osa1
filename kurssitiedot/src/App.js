const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part.part} {props.part.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part part={props.part[0]}/>
      <Part part={props.part[1]}/>
      <Part part={props.part[2]}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.exercise[0].exercises + props.exercise[1].exercises + props.exercise[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercises: 10
      },
      {
        part: 'Using props to pass data',
        exercises: 7
      },
      {
        part: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course.parts} />
      <Total exercise={course.parts}/>
    </div>
  )
}

export default App