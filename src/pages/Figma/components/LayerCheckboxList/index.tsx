import React from "react";
import Styles from "./style.module.scss";
import LayerCheckbox from "../LayerCheckbox";

type Props = {
  layerCheckboxList?: {
    text: string;
    layersCheckboxes?: { text: string; layersCheckboxes?: [] }[];
  }[];
};

export default function LayerCheckboxList({ layerCheckboxList }: Props) {
  return (
    <div className={Styles.layer_checkbox_list}>
      {layerCheckboxList?.map((layerCheckbox, index) => {
        return (
          <LayerCheckbox key={String(index)} layerCheckbox={layerCheckbox} />
        );
      })}
    </div>
  );
}
