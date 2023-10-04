import Button from "../components/button";
import Heading from "../components/heading";
export default function Home() {
  return (
    <main>
      <Heading text="Home Page" number={2} />
      <p>
        This is a boilerplate for Next.js 13 with Tailwind CSS 2.2, PostCSS 8,
        and CSS Modules.
      </p>
      <Button />
    </main>
  );
}
