import React from "react";
import { IoMdMenu } from "react-icons/io";
import { CgPlayListCheck } from "react-icons/cg";
import { IoChevronBackSharp } from "react-icons/io5";
import styles from "./NavigationBar.module.css";

const NavigationBar = ({
  pageLabel,
  profilePicture,
  text,
  onClickMenuButton,
  onClickHeadingButton,
  onClickProfileButton,
  onClickBackButton,
}) => {
  return (
    <div>
      <nav
        className={`${styles.primaryNav}`}
        role="navigation"
        aria-label="Primary Navigation"
      >
        <div className={`${styles.menu}`}>
          <button
            className={`${styles.menuButton1}`}
            onClick={onClickMenuButton}
            aria-label="Toggle Menu"
          >
            <IoMdMenu size={18} />
            <span>MENU</span>
          </button>

          <button
            className={`${styles.menuButton2}`}
            onClick={onClickHeadingButton}
            aria-label={`Toggle ${pageLabel}`}
          >
            <CgPlayListCheck
              className={`${styles.menuButton2Icon}`}
              size={20}
            />
            <span>{pageLabel}</span>
          </button>
        </div>
        <div
          className={`${styles.profile}`}
          role="region"
          aria-label="User Profile"
        >
          <button
            className={`${styles.profileButton}`}
            onClick={onClickProfileButton}
            aria-label="Toggle Profile"
          >
            {profilePicture}
          </button>
          <span
            className={`${styles.notify}`}
            aria-live="polite"
            aria-atomic="true"
          ></span>
        </div>
      </nav>
      <nav
        className={`${styles.secondaryNav}`}
        role="navigation"
        aria-label="Secondary Navigation"
      >
        <button
          className={`${styles.secondNavButton}`}
          onClick={onClickBackButton}
          aria-label={`Go Back: ${text}`}
        >
          <IoChevronBackSharp />
          <span>{text}</span>
        </button>
      </nav>
    </div>
  );
};

export default NavigationBar;
