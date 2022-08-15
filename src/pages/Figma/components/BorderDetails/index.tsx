import React, { useState } from "react";
import closeIcon from "../../../../assests/close-icon.svg";
import eyeIcon from "../../../../assests/eye-icon.svg";
import copyIcon from "../../../../assests/copy-icon.svg";
import layoutIcon from "../../../../assests/layout-icon.svg";
import downloadIcon from "../../../../assests/download-icon.svg";

import Styles from "./style.module.scss";

type Props = {
  headText: string;
  description?: string;
  range: number;
};

export default function BorderDetails({ headText, description, range }: Props) {
  const [rangeValue, setRangeValue] = useState(range);
  return (
    <div className={Styles.borderDetails}>
      <div className={Styles.borderDetailsheader}>
        <div>{headText}</div>
        <img src={closeIcon} alt="" />
      </div>
      <div className={Styles.borderDetailsInputRange}>
        <input
          type="range"
          value={rangeValue}
          onChange={(event) => {
            console.log("value", event.target.value);
            setRangeValue(Number(event.target.value));
          }}
        />
        <div className={Styles.rangeValue}>{rangeValue}%</div>
      </div>
      <div className={Styles.borderDetailsActions}>
        <div className={Styles.action}>
          <img src={eyeIcon} alt="" />
          <span>Hide layer</span>
        </div>
        <div className={Styles.action}>
          <img src={copyIcon} alt="" />
          <span>Zoom reset</span>
        </div>
        <div className={Styles.action}>
          <img src={layoutIcon} alt="" />
          <span>Spreadsheet</span>
        </div>
      </div>

      {description && (
        <div className={Styles.description}>
          <div className={Styles.descriptionText}>
            <span>{description}</span>
          </div>

          <div className={Styles.tagsContainer}>
            <div className={Styles.tags}>
              <div className={Styles.tag}>Keyword</div>
              <div className={Styles.tag}>Post</div>
              <div className={Styles.tag}>Tag</div>
            </div>
            <div className={Styles.downloadIcon}>
              <img src={downloadIcon} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
