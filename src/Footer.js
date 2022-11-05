import footer1 from "./images/footer1.png";
import footer2 from "./images/footer2.png";
import footer3 from "./images/footer3.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={footer1} alt="zuri" />
      </div>
      <div>
        <img src={footer2} alt="hng" />
      </div>
      <div>
        <img src={footer3} alt="ingression" />
      </div>
    </div>
  );
};

export default Footer;
