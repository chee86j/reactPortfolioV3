import profilePic from "../assets/profile-pic.jpg";
import LinkedInIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profilePic}
          alt="Jeffrey Chee profile headshot"
          className="about-pic"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I am</p>
        <h1 className="title">Jeffrey Chee</h1>
        <p className="section__text__p2">FullStack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("./assets/Resume-Sept-2023.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={LinkedInIcon}
            alt="My LinkedIn"
            className="icon"
            onClick={() =>
              (window.location.href = "https://www.linkedin.com/in/jeffchee86/")
            }
          />
          <img
            src={GitHubIcon}
            alt="My Github"
            className="icon"
            onClick={() =>
              (window.location.href = "https://github.com/chee86j")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
