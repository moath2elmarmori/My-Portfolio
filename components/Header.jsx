import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [offset, setOffset] = useState(0);
  const [isMenuBarActive, setIsMenuBarActive] = useState(false);

  // useEffect for handling the style of the sticky header when the user scrolls down
  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [setOffset]);

  const listItemsDivRef = useRef();
  const menuListItemDivRef = useRef();
  // useEffect for handling the clicks outside the menu bar if the menu bar is active to close it
  useEffect(() => {
    // console.log("useEffect runs");
    // console.log(isMenuBarActive);
    const handleClickEverywhereButNotTheMenuDiv = (e) => {
      // check if the user clicked outside the menu bar
      if (
        !listItemsDivRef.current.contains(e.target) &&
        !menuListItemDivRef.current.contains(e.target) &&
        isMenuBarActive
      ) {
        setIsMenuBarActive((prevState) => !prevState);
      }
    };
    window.addEventListener("click", handleClickEverywhereButNotTheMenuDiv);

    return () =>
      window.removeEventListener(
        "click",
        handleClickEverywhereButNotTheMenuDiv
      );
  }, [isMenuBarActive, setIsMenuBarActive]);

  useEffect(() => {
    if (isMenuBarActive) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isMenuBarActive]);

  const menuListItemClickHandler = (e) => {
    setIsMenuBarActive((prevState) => !prevState);
  };
  const linkClickHandler = (e) => {
    setIsMenuBarActive((prevState) => false);
  };

  return (
    <header className={`header ${offset > 50 ? "header-sticky-color" : ""}`}>
      <h1 title="it's short for Moath Elmarmori don't worry">ME</h1>
      <div
        className={`list-items-div ${isMenuBarActive ? "active" : ""}`}
        ref={listItemsDivRef}
      >
        <div
          className="close-div"
          onClick={() => setIsMenuBarActive((prevState) => !prevState)}
        >
          <AiOutlineClose />
        </div>
        <ul>
          <li>
            <a href="#home" onClick={linkClickHandler}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={linkClickHandler}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={linkClickHandler}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={linkClickHandler}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-list-item-div" ref={menuListItemDivRef}>
        <ul>
          <li className="menu-list-item" onClick={menuListItemClickHandler}>
            <GiHamburgerMenu />
          </li>
        </ul>
      </div>
    </header>
  );
}
