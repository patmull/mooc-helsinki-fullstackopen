
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
      <Part part={contentArgs.parts[0].name} excercise={contentArgs.parts[0].excercise} />
      <Part part={contentArgs.parts[1].name} excercise={contentArgs.parts[1].excercise}/>
      <Part part={contentArgs.parts[2].name} excercise={contentArgs.parts[2].excercise}/>
    </div>
  )
}

const Total = (totalArgs) => {
  return (
    <p>Number of exercises {totalArgs.total}</p>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercise: 10 
      },
      {
        name: 'Using props to pass data',
        excercise: 7
      },
      {
        name: 'State of a component',
        excercise: 14
      } 
    ]
  } 

const total = course.parts[0].excercise + course.parts[1].excercise + course.parts[2].excercise

return (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total total={total} />
  </div>
)

}

export default App;
