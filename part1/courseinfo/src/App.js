
const Header = (headerArgs) => {
  return(
    <h1>{headerArgs.course}</h1>
  )
}

/*

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const contents = [
  { part: part1, exercise:exercises1 },
  { part: part2, exercise:exercises2 },
  { part: part3, exercise:exercises3 }
]
*/

const Part = (partArgs) => {
  return(
    // <p>{partArgs.contents.part} {partArgs.contents.exercise}</p>
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


  /* Better way (but still pretty terrible):
  return(
    <>
      <p>
        {contents[0].part} {contents[0].exercise}
      </p>
      <p>
          {contents[1].part} {contents[1].exercise}
      </p>
      <p>
          {contents[2].part} {contents[2].exercise}
      </p>
    </>
    
  )
  */
}

const Total = (totalArgs) => {
  return (
    <p>Number of exercises {totalArgs.total}</p>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const total = exercises1 + exercises2 + exercises3

// Better way:
return (
  <div>
    <Header course={course} />
    <Content part0={part1} part1={part2} part2={part3} excercises0={exercises1}
    excercises1={exercises2} excercises2={exercises3}/>
    <Total total={total} />
  </div>
)

  /*
  One way:

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )¨
  */
}

export default App;
