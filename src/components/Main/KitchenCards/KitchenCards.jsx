import React from "react";
import styles from "./KitchenCards.module.scss";
import Card from "../Card/Card";
import { useResize } from "../../utils/useResize";

import { dataCard } from "../../utils/dataCard";
import KitchenCardSlyder from "../KitchenCardSlyder/KitchenCardSlyder";

function KitchenCards() {
  const { isScreenXlg } = useResize();
  return (
    <>
      {isScreenXlg ? (
        <section id="materials" className={styles.wrapper}>
          <div className={styles.container}>
            <h3>
              Какие кухни
              <br />
            </h3>
            <div className={styles.grid_container}>
              {dataCard.map((card) => (
                <Card key={card.id} data={card} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section id="materials" className={styles.wrapper}>
            <KitchenCardSlyder />
        </section>
      )}
    </>
  );
}

export default KitchenCards;
