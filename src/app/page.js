import PageButton from "@/components/PageButton";
import SocialLink from "@/components/SocialLink";

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
          <SocialLink href="https://github.com/sarthakskumar" text="Github" />
          <SocialLink
            href="https://www.linkedin.com/in/sarthakskumar/"
            text="LinkedIn"
          />
          <SocialLink
            href="https://instagram.com/sarthakskumar"
            text="Instagram"
          />
        </div>
        <div className="pagebutton-container">
          <PageButton text="About me" href="/about" title="View About Me" />
          <PageButton
            text="My Projects"
            href="/projects"
            title="View My Projects"
          />
          <PageButton text="My Blog" href="/blog" title="View My Blog" />
        </div>
      </div>
    </>
  );
}
