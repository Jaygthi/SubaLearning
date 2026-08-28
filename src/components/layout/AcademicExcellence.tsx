import ExcellenceCard from "../common/ExcellenceCard";
import "../../styles/AcademicExcellence.css";

const statistics = [
  {
    id: 1,
    value: "482+",
    label: "Students",
  },
  {
    id: 2,
    value: "10+",
    label: "Countries",
  },
  {
    id: 3,
    value: "8+",
    label: "Years",
  },
];

export default function AcademicExcellence() {
  return (
    <section
      className="academic-excellence"
      aria-labelledby="academic-excellence-heading"
    >
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">

            <h2
              id="academic-excellence-heading"
              className="academic-excellence__title"
            >
              Equal Opportunity for Academic Excellence.
            </h2>

          </div>
        </div>

        <div className="row justify-content-center g-4 mt-3">

          {statistics.map((statistic) => (
            <div
              key={statistic.id}
              className="col-12 col-sm-6 col-lg-3"
            >
              <ExcellenceCard
                value={statistic.value}
                label={statistic.label}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}