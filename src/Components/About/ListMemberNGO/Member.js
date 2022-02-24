import "./Member.css";
import ImageLinkedin from "../../../assets/linkedin.svg";
import ImageFacebook from "../../../assets/facebook.svg";

const Member = ({ member }) => {
  return (
    <div className="member-container">
      <div className="member-img-name">
        <img src={member.image} alt={member.name} />
        <p>{member.name}</p>
      </div>
      <p className="description"> {member.description}</p>
      <div className="social-media">
        <a href={member.facebookUrl}>
          <img src={ImageFacebook} alt="facebook-icon" />
        </a>
        <a href={member.linkedinUrl}>
          <img src={ImageLinkedin} alt="linkedin-icon" />
        </a>
      </div>
    </div>
  );
};

export default Member;
