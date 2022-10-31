import profileImg from "./images/profile-img.png"
import Links from "./Links";

const Profile = () => {
  return ( 
  <>
    <div className="container">
      <img src={profileImg} alt="profile" id="profile__img" />
      <h2 id="twitter">jargohillz1</h2>
      <h2 id="slack">jargohillzz</h2>
    </div>
    <Links />
  </>
   );
}
 
export default Profile;