export default function Home() {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <img
            src="/profile-pic.jpeg"
            alt="Profile Pic"
            className="profile-pic"
          />
          <h1 className="name">Sarthak S Kumar</h1>
          <h3 className="tagline">Full Stack Engineer</h3>
        </div>
        <div className="links">
          <a className="social-link" href="https://github.com/sarthakskumar">
            Github
          </a>
          <a
            className="social-link"
            href="https://linkedin.com/in/sarthakskumar"
          >
            Linkedin
          </a>
          <a className="social-link" href="https://instagram.com/sarthakskumar">
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}
