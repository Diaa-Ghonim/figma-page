import React from "react";
import logo from "../../assests/logo.png";
import Styles from "./style.module.scss";
import { BorderDetails, Sidebar } from "./components";
import LayersTreeList from "./components/LayersTreeList";
import { SearchInput } from "../../components";
import notificationIcon from "../../assests/notification-icon.svg";
import { bordersData } from "../../fakeData";
type Props = {};

export default function Figma({}: Props) {
  return (
    <>
      <div className={Styles.page_container}>
        <div className={Styles.left_side}>
          <div className={Styles.logo}>
            <img alt="" src={logo} />
          </div>
          <div className={Styles.column}>
            <Sidebar />
            <LayersTreeList />
          </div>
        </div>

        <div className={Styles.right_side}>
          <div className={`${Styles.column} ${Styles.right_column}`}>
            <div className={Styles.header}>
              <div className={Styles.searchContainer}>
                <SearchInput />
              </div>
              <div className={Styles.notificationIconContainer}>
                <img src={notificationIcon} alt="" />
              </div>
            </div>
            {bordersData &&
              bordersData.map((info, index) => {
                return (
                  <BorderDetails
                    key={String(index)}
                    headText={info.headText}
                    description={info.description}
                    range={info.range}
                  />
                );
              })}
          </div>
          <div className={Styles.dimensions}>
            <div>55.7986 , 44.8643</div>
          </div>
        </div>
      </div>
    </>
  );
}
