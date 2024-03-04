import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import styles from "./MapComponent.module.scss";

function MapComponent() {
  return (
    <section className={styles.container}>
      <h3>Контакты</h3>
      <div className={styles.map_container}>
        <div className={styles.contact}>
          <p>Адрес:</p>
          <span>
            г. Краснодар, ул. Красных Партизан, <br />
            483 (работаем по г. Краснодар)
          </span>
          <p>Телефон:</p>
          <span>
            +7 (8612) 17-93-76 <br />
            +7 (989) 277-94-30
          </span>
        </div>
        <YMaps className={styles.map}>
          <Map
            className={styles.map}
            defaultState={{
              center: [45.050583, 38.961802],
              zoom: 16,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            <Placemark
              modules={["geoObject.addon.balloon"]}
              defaultGeometry={[45.050583, 38.961802]}
              properties={{
                balloonContentHeader: "Адрес: ",
                balloonContentBody:
                  "г. Краснодар, ул. Красных Партизан, 483 (работаем по г. Краснодар)",
                balloonContentFooter: "+7 (8612) 17-93-76",
              }}
            />
          </Map>
        </YMaps>
      </div>
    </section>
  );
}

export default MapComponent;
