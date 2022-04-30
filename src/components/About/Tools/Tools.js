import classes from './Tools.module.css'

const Tools = () => {
  return ( <div className={classes.Tools}>
    <h1>Tools</h1>
    <div className={classes.row}>
      <div>Figma</div>
      <div>Git/Github</div>
      <div>Netlify</div>
    </div>
    <div className={classes.row}>
      <div>JS libraries</div>
      <div>Google Firebase</div>
      <div>Docker</div>
    </div>
  </div> );
}

export default Tools;