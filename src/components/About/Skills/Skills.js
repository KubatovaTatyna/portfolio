import'./Skills.scss'

const Skills = () => {
  return ( <div className='Skills container'>
    <h1 className='mb-3'>Skills</h1>
    <div className='row'>
      <div className='col-4'>HTML</div>
      <div className='col-4'>CSS</div>
      <div className='col-4'>JavaScript</div>
    </div>
    <div className='row'>
      <div className='col-4'>React + Redux</div>
      <div className='col-4'>Bootstrap</div>
      <div className='col-4'>Sass</div>
    </div>
  </div> );
}

export default Skills;