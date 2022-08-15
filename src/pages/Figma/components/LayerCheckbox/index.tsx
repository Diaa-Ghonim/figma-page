import React, { SyntheticEvent, useState } from "react";
import Styles from "./style.module.scss";
import checkbox from "../../../../assests/checkbox.svg";
import checkboxChecked from "../../../../assests/checkbox-checked234.svg";

type Props = {
  layerCheckbox: {
    text: string;
    layersCheckboxes?: { text: string }[];
  };
};

export default function LayerCheckbox({ layerCheckbox }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const onChecked = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsChecked(!isChecked);
  };

  return (
    <div className={Styles.layer_checkbox} onClick={onChecked}>
      <div className={Styles.layer_checkbox_address}>
        <img alt="" src={isChecked ? checkboxChecked : checkbox} />
        <span>{layerCheckbox.text}</span>
      </div>

      {isChecked &&
        layerCheckbox.layersCheckboxes &&
        layerCheckbox.layersCheckboxes.map(
          (innerLayerCheckbox: { text: string }, index) => {
            return (
              <LayerCheckbox
                key={String(index)}
                layerCheckbox={innerLayerCheckbox}
              />
            );
          }
        )}
    </div>
  );
}
