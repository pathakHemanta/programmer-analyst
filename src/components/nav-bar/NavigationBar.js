import React from "react";
import { IoMdMenu } from "react-icons/io";
import { CgPlayListCheck } from "react-icons/cg";
import { IoChevronBackSharp } from "react-icons/io5";
import styles from "./NavigationBar.module.css";

const NavigationBar = ({
  profilePicture,
  text,
  onClickMenuButton,
  onClickHeadingButton,
  onClickProfileButton,
  onClickBackButton,
}) => {
  return (
    <div className={`${styles.navBar}`}>
      <nav className={`${styles.primaryNav}`}>
        <div className={`${styles.menu}`}>
          <button
            className={`${styles.menuButton1}`}
            onClick={onClickMenuButton}
          >
            <IoMdMenu size={20} />
            <p>MENU</p>
          </button>

          <button
            className={`${styles.menuButton2}`}
            onClick={onClickHeadingButton}
          >
            <CgPlayListCheck
              className={`${styles.menuButton2Icon}`}
              size={20}
            />
            <h1 className={`${styles.menuButton2Label}`}>
              Outcomes Assessment
            </h1>
          </button>
        </div>
        <div className={`${styles.profile}`}>
          <button
            className={`${styles.profileButton}`}
            onClick={onClickProfileButton}
          >
            {profilePicture}
          </button>
          <span className={`${styles.notify}`}></span>
        </div>
      </nav>
      <nav className={`${styles.secondaryNav}`}>
        <button
          className={`${styles.secondNavButton}`}
          onClick={onClickBackButton}
        >
          <IoChevronBackSharp className={`${styles.secondaryNavIcon}`} />
          <p>{text}</p>
        </button>
      </nav>
    </div>
  );
};

export default NavigationBar;
