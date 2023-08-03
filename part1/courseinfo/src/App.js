
const Header = (headerArgs) => {
  return(
    <h1>{headerArgs.course}</h1>
  )
}

const Part = (partArgs) => {
  return(
    <p>{partArgs.part} {partArgs.exercise}</p>
  )
}

const Content = (contentArgs) => {

  // Better way:
  return(
    <div>
      <Part part={contentArgs.part0} excercise={contentArgs.excercises0} />
      <Part part={contentArgs.part1} excercise={contentArgs.excercises1}/>
      <Part part={contentArgs.part2} excercise={contentArgs.excercises2}/>
    </div>
  )
}

const Total = (totalArgs) => {
  return (
    <p>Number of exercises {totalArgs.total}</p>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    excercise: 10 
  }
  const part2 = {
    name: 'Using props to pass data',
    excercise: 7
  }
  const part3 = {
    name: 'State of a component',
    excercise: 14
  } 

const total = part1.excercise + part2.excercise + part3.excercise 

return (
  <div>
    <Header course={course} />
    <Content part0={part1.name} part1={part2.name} part2={part3.name} excercises0={part1.exercises}
    excercises1={part2.exercises} excercises2={part3.exercises}/>
    <Total total={total} />
  </div>
)

}

export default App;
