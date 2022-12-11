import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiTwotoneMail,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function SocialMediaDiv() {
  const [renderCopiedText, setRenderCopiedText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderCopiedText(false);
    }, 2000);
    return () => {
      return clearTimeout(timer);
    };
  }, [renderCopiedText]);
  const emailClickHandler = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText("moath222elmarmori@gmail.com");
    setRenderCopiedText(true);
  };

  return (
    <div className="social-media-icons-div">
      <Link href="https://www.linkedin.com/in/moath-elmarmori-90216823b/">
        <AiFillLinkedin />
      </Link>
      <Link href="https://github.com/moath2elmarmori" target={"_blank"}>
        <AiFillGithub />
      </Link>
      <Link href="https://www.facebook.com/moath.elmarmori/" target={"_blank"}>
        <BsFacebook />
      </Link>
      <Link
        href="#"
        className={`gmail-link ${renderCopiedText ? "copied" : ""}`}
        title="Click to copy email address"
        onClick={emailClickHandler}
      >
        <AiTwotoneMail />
      </Link>
    </div>
  );
}

export default SocialMediaDiv;
