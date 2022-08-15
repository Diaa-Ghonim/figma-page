import React from "react";
import personIcon from "../../../../assests/person.svg";
import notificationIcon from "../../../../assests/notification.svg";
import layersIcon from "../../../../assests/layers.svg";
import gridIcon from "../../../../assests/grid.svg";
import depositIcon from "../../../../assests/deposit.svg";
import Styles from "./style.module.scss";
type Props = {};

function Sidebar({}: Props) {
  return (
    <div className={Styles.sidebar}>
      <div className={`${Styles.top_icons} ${Styles.sidebar_icons}`}>
        <img alt="" src={personIcon} />
        <img alt="" src={notificationIcon} />
        <img alt="" src={layersIcon} />
      </div>
      <div className={`${Styles.bottom_icons} ${Styles.sidebar_icons}`}>
        <img alt="" src={gridIcon} />
        <img alt="" src={depositIcon} />
      </div>
    </div>
  );
}

export default Sidebar;
