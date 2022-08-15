import React from "react";
import Styles from "./style.module.scss";
import Layer from "../Layer";
import { layers } from "../../../../fakeData";
type Props = {};

export default function LayersTreeList({}: Props) {
  return (
    <div className={Styles.layers_tree_list}>
      <div className={Styles.layers_header}>
        <p>Layers tree list</p>
        <span>Terrain, traffic, etc..</span>
      </div>
      {layers.map((layer, index) => {
        return (
          <Layer
            key={String(index)}
            text={layer.text}
            checkboxes={layer.checkboxes}
          />
        );
      })}
    </div>
  );
}
