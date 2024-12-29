import reactImg from "../assets/react-core-concepts.png";
export default function Header() {
  const projectTitle = "React Essentials!";
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>{projectTitle}</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
