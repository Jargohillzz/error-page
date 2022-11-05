import profileImg from "./images/profile-img.png";
import Links from "./Links";
import slackIcon from "./images/slack.png";
import githubIcon from "./images/github.png";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <img src={profileImg} alt="profile" id="profile__img" />
        <h2 id="twitter">jargohillz1</h2>
        <h2 id="slack">jargohillzz</h2>
      </div>
      <Links />
      <div className="logo-links">
        <div className="icon">
          <a href="https://slack.com">
            <img src={slackIcon} alt="slack logo" />
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/jargohillzz">
            <img src={githubIcon} alt="github logo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
