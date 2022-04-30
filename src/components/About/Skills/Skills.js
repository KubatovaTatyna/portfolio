import classes from './Skills.module.css'

const Skills = () => {
  return ( <div className={classes.Skills}>
    <h1>Skills</h1>
    <div className={classes.row}>
      <div>HTML</div>
      <div>CSS</div>
      <div>JavaScript</div>
    </div>
    <div className={classes.row}>
      <div>React + Redux</div>
      <div>Bootstrap</div>
      <div>Sass</div>
    </div>
  </div> );
}

export default Skills;