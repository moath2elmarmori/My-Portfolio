import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Projects.module.css";

function SingleProject(props) {
  return (
    <div className={`${styles["project"]}`}>
      <Image
        src={`${props.imageSrc}`}
        alt={`${props.imageAlt}`}
        width={350}
        height={350}
      />
      <div className={`${styles["project-description"]}`}>
        <h1>{props.projectTitle}</h1>
        <Link target={"_blank"} href={`${props.projectLiveSite}`}>
          Live Site
        </Link>
        <Link target={"_blank"} href={`${props.projectGithubRepo}`}>
          Github Repository
        </Link>
      </div>
    </div>
  );
}

export default SingleProject;
