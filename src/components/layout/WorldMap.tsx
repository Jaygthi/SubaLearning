import "../../styles/WorldMap.css";

import worldMap from "../../assets/images/img_worldmap.png";

export default function CountryBenefits() {
  return (
    <section
      className="country-benefits"
      aria-labelledby="country-benefits-heading"
    >
      <div className="container">

        <header className="text-center mb-4">
          <h2
            id="country-benefits-heading"
            className="country-benefits__title"
          >
            Student Get Benefits From the Country
          </h2>
        </header>

        <div className="row justify-content-center">

          <div className="col-12 col-lg-9">

            <div className="country-benefits__map-wrapper">
              <img
                src={worldMap}
                alt="Countries where SUBA online learning students receive educational support"
                className="country-benefits__map"
                loading="lazy"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}