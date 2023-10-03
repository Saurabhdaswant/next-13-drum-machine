"use client";
import React, { useContext } from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";
import { SoundContext } from "../../providers/SoundProvider";

function Header() {
  const id = React.useId();

  const { isSoundEnabled, toggleIsSoundEnabled } = useContext(SoundContext);

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button onClick={() => toggleIsSoundEnabled()}>
          {isSoundEnabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {isSoundEnabled ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
