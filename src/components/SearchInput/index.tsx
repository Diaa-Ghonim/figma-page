import React from "react";
import Styles from "./style.module.scss";
import searchIcon from "../../assests/search-icon.svg";

type Props = {};

export default function SearchInput({}: Props) {
  return (
    <div className={Styles.searchContainer}>
      <span>
        <img src={searchIcon} alt="" />
      </span>
      <input type="search" placeholder="Search" />
    </div>
  );
}
