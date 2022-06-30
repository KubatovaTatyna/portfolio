import './Works.scss';
import housePlantShop from '../../assets/houseplantshop.png';
import coingapp from '../../assets/coingapp.png';
import weather from '../../assets/weather.png';
import rps from '../../assets/rps.png';
import kyrgyztours from '../../assets/kyrgyztours.png';
import karakoltech from '../../assets/karakoltech.png';

const Works = () => {
  return (<div className="Works">
    <h1>My works</h1>
    <div className='row'>
      <div className='col'>
        <a href='https://houseplantshop.netlify.app/'>
          <img src={housePlantShop} />
        </a>
      </div>
      <div className='col'>
        <a href='https://weather-net.netlify.app/'>
          <img src={weather} />
        </a>
      </div>
      <div className='col'>
        <a href='https://kyrgyztours-test.netlify.app/'>
          <img src={kyrgyztours} />
        </a>
      </div>
    </div>

    <div className='row'>
      <div className='col'>
        <a href='https://karakol-tech.netlify.app/'>
          <img src={karakoltech} />
        </a>
      </div>
      <div className='col'>
        <a href='https://coing.netlify.app/'>
          <img src={coingapp} />
        </a>
      </div>
      <div className='col'>
        <a href='https://rockpaperscissors12.netlify.app/'>
          <img src={rps} />
        </a>
      </div>
    </div>
  </div>);
}

export default Works;