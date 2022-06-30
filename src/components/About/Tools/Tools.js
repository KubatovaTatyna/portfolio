import './Tools.scss'

const Tools = () => {
  return ( <div className='Tools container'>
    <h1 className='mb-3'>Tools</h1>
    <div className='row'>
      <div className='col-4'>Figma</div>
      <div className='col-4'>Git/Github</div>
      <div className='col-4'>Netlify</div>
    </div>
    <div className='row'>
      <div className='col-4'>JS libraries</div>
      <div className='col-4'>Google Firebase</div>
      <div className='col-4'>Docker</div>
    </div>
  </div> );
}

export default Tools;