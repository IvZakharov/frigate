import styles from "./Video.module.scss";
import React, { ReactElement } from "react";
import Image from "next/image";

type VideoProps = {
  placeholder: string;
};

const Video: React.FC<VideoProps> = ({ placeholder }) => {
  const [videoIsActive, setVideoIsActive] = React.useState(false);

  return (
    <div className={styles.wrap}>
      {!videoIsActive ? (
        <div className={styles.placeholder}>
          <div className={styles.playButton}>
            <svg
              width="37"
              height="48"
              viewBox="0 0 37 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.929695 4.63265V43.6477C0.929695 46.6228 3.99383 48.4304 6.35356 46.8111L35.0226 27.3036C35.5245 26.9639 35.9379 26.494 36.2244 25.9377C36.5109 25.3813 36.6611 24.7565 36.6611 24.1213C36.6611 23.4862 36.5109 22.8614 36.2244 22.305C35.9379 21.7486 35.5245 21.2788 35.0226 20.9391L6.35356 1.46926C5.82233 1.10188 5.20822 0.894608 4.576 0.869325C3.94378 0.844043 3.3169 1.00168 2.76149 1.32562C2.20609 1.64955 1.74274 2.12777 1.42034 2.70981C1.09793 3.29186 0.928424 3.95617 0.929695 4.63265Z"
                fill="white"
              />
            </svg>
          </div>

          <Image
            alt={"video placeholder"}
            src={placeholder}
            quality={80}
            fill
            sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 60vw,
                    50vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ) : (
        <div className={styles.video}>Youtube</div>
      )}
    </div>
  );
};

export default Video;
