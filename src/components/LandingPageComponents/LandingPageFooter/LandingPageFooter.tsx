import React, { FC } from 'react';

import { AppStoreIcon, GooglePlayIcon } from 'assets';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from 'constants/requestUrls';
import classes from './LandingPageFooter.module.scss';

interface Props {
  images: string[];
  activeIndex: number;
  switchIndex(index: number): void;
}

export const LandingPageFooter: FC<Props> = ({ images, activeIndex, switchIndex }) => (
  <div className={classes.footer}>
    <div className={classes.slider}>
      {images.map((img: string, index: number) => (
        <button
          key={img + index}
          aria-label=" "
          disabled={activeIndex === index}
          className={`${activeIndex === index ? classes.activeButton : classes.sliderButton}`}
          onClick={(): void => switchIndex(index)}
        />
      ))}
    </div>
    <div className={classes.linkInfo}>
      <span className={classes.linkText}>Download mobile bank AMN Online</span>
      <div className={classes.linkStore}>
        <AppStoreIcon
          className={classes.iconFooter}
          onClick={(): void => {
            window.location.href = APP_STORE_URL;
          }}
        />
        <GooglePlayIcon
          className={classes.iconFooter}
          onClick={(): void => {
            window.location.href = GOOGLE_PLAY_URL;
          }}
        />
      </div>
    </div>
  </div>
);
