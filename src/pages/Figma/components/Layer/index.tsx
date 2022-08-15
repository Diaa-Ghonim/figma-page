import React, { SyntheticEvent, useState } from "react";
import Styles from "./style.module.scss";
import minusCircleIcon from "../../../../assests/minus-circle.svg";
import minusCircleDashIcon from "../../../../assests/minus-circle-dash.svg";
import arrowForwardIcon from "../../../../assests/arrow-forward.svg";
import arrowDownIcon from "../../../../assests/arrow-down.svg";
import LayerCheckboxList from "../LayerCheckboxList";

type Props = {
  text: string;
  checkboxes?: { text: string; layersCheckboxes?: { text: string }[] }[];
};

export default function Layer({ text, checkboxes }: Props) {
  console.log("checkboxes", checkboxes);
  const [isShowContent, setIsShowContent] = useState(false);
  const onLayerClicked = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsShowContent(!isShowContent);
  };
  return (
    <div className={Styles.layer} onClick={onLayerClicked}>
      <div className={Styles.layer_address}>
        <img
          alt=""
          src={isShowContent ? minusCircleDashIcon : minusCircleIcon}
        />
        <span>{text}</span>
        <img alt="" src={isShowContent ? arrowDownIcon : arrowForwardIcon} />
      </div>
      {isShowContent && checkboxes && (
        <LayerCheckboxList layerCheckboxList={checkboxes} />
      )}
    </div>
  );
}
