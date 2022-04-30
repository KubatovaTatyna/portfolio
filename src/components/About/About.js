import classes from './About.module.css';
import photo from '../../assets/photo.png'
import Skills from './Skills/Skills';
import Tools from './Tools/Tools';

const About = () => {
  return (
    <div>
      <div className={classes.About}>
        <div className={classes.AboutText}>Hi there! I’m front-end developer. I have a one year of experience in creating responsive and adaptive websites using modern technologies and libraries. There you can see all of my works and skills. </div>
        <div className={classes.Photo}>
          <img alt='photo' src={photo} />
        </div>
      </div>
      <Skills />
      <Tools />
    </div>
  );
}

export default About;