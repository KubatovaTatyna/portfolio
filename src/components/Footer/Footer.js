import './Footer.scss';
import github from '../../assets/github.png';
import telegram from '../../assets/telegram.png';
import instagram from '../../assets/instagram.png';
import email from '../../assets/email.png';
import upwork from '../../assets/upwork.png';
import leetcode from '../../assets/leetcode.png';

const Footer = () => {
  return (<div className="Footer">
    <div className="row">
      <div className="col-2 text-center">
        <a href="https://github.com/KubatovaTatyna">
          <img src={github} />
        </a>
      </div>
      <div className="col-2 text-center">
        <a href="https://t.me/kubatovvat">
          <img src={telegram} />
        </a>
      </div>
      <div className="col-2 text-center">
        <a href="">
          <img src={email} />
        </a>
      </div>
    </div>

    <div className="row">
      <div className="col-2 text-center">
        <a href="https://www.instagram.com/kubatovvat/">
          <img src={instagram} />
        </a>
      </div>
      <div className="col-2 text-center">
        <a href="https://leetcode.com/kubatovvat/">
          <img src={leetcode} />
        </a>
      </div>
      <div className="col-2 text-center">
        <a href="https://www.upwork.com/freelancers/~014377d4ed9dbe72ee">
          <img src={upwork} />
        </a>
      </div>
    </div>
  </div>);
}

export default Footer;