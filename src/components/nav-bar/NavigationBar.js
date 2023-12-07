import { IoMdMenu } from "react-icons/io";
import { CgPlayListCheck } from "react-icons/cg";
import { IoChevronBackSharp } from "react-icons/io5";
import styles from "./NavigationBar.module.css";

const NavigationBar = ({
  pageLabel,
  userInitials,
  secondaryHeading,
  onClickMenuButton,
  onClickHeadingButton,
  onClickUserInitialsButton,
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
            role="button"
            aria-label="Toggle Menu"
          >
            <IoMdMenu size={18} />
            <span>MENU</span>
          </button>

          <button
            className={`${styles.menuButton2}`}
            onClick={onClickHeadingButton}
            role="button"
            aria-label={`Toggle ${pageLabel}`}
          >
            <CgPlayListCheck
              className={`${styles.menuButton2Icon}`}
              size={20}
            />
            <span className={`${styles.pageLabel}`}>{pageLabel}</span>
          </button>
        </div>
        <div
          className={`${styles.profile}`}
          role="region"
          aria-label="User Profile"
        >
          <button
            className={`${styles.profileButton}`}
            onClick={onClickUserInitialsButton}
            aria-label={`Toggle ${userInitials}`}
          >
            {userInitials}
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
          aria-label={`Go Back: ${secondaryHeading}`}
        >
          <IoChevronBackSharp />
          <span>{secondaryHeading}</span>
        </button>
      </nav>
    </div>
  );
};

export default NavigationBar;
