import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog/123">
          <a>My First Article</a>
        </Link>
      </div>
    </div>
  );
}