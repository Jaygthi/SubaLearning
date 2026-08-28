import SectionHeader from "../common/SectionHeader";
import "../../styles/ImportanceSection.css";

interface ImportancePoint {
  title: string;
  description: string;
}

interface ImportanceSectionProps {
  title: string;
  image: string;
  imageAlt: string;
  points: ImportancePoint[];
}

export default function ImportanceSection({
  title,
  image,
  imageAlt,
  points,
}: ImportanceSectionProps) {
  return (
    <section
      className="importance-section py-5"
      aria-labelledby="importance-heading"
    >
      <div className="container">

        <SectionHeader title={title} />

        <div className="row align-items-stretch g-3">

          {/* Information cards */}

          <div className="col-12 col-lg-8">
            <div className="row g-3 h-100">

              {points.map((point) => (
                <div
                  className="col-12 col-md-6"
                  key={point.title}
                >
                  <article className="importance-card h-100">
                    <h3 className="importance-card__title">
                      {point.title}
                    </h3>

                    <p className="importance-card__description mb-0">
                      {point.description}
                    </p>
                  </article>
                </div>
              ))}

            </div>
          </div>

          {/* Image */}

          <div className="col-12 col-lg-4">
            <div className="importance-image-wrapper h-100">
              <img
                src={image}
                alt={imageAlt}
                className="importance-image"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


// import "../../styles/ImportanceSection.css";
// import SectionHeader from "../common/SectionHeader";

// interface ImportancePoint {
//   title: string;
//   description: string;
// }

// interface ImportanceSectionProps {
//   title: string;
//   image: string;
//   imageAlt: string;
//   points: ImportancePoint[];
// }

// export default function ImportanceSection({
//   title,
//   image,
//   imageAlt,
//   points,
// }: ImportanceSectionProps) {
//   return (
//     <section className="importance-section py-5">
//       <div className="container">

//         <SectionHeader title={title} />

//         <div className="row align-items-center g-4">

//           {/* Content */}

//           <div className="col-12 col-lg-8">

//             <div className="importance-list text-start">

//               {points.map((point) => (
//                 <div
//                   className="importance-item"
//                   key={point.title}
//                 >
//                   <p className="mb-3">
//                     <strong>
//                       {point.title}
//                     </strong>{" "}
//                     {point.description}
//                   </p>
//                 </div>
//               ))}

//             </div>

//           </div>

//           {/* Image */}

//           <div className="col-12 col-lg-4">

//             <img
//               src={image}
//               alt={imageAlt}
//               className="importance-section__image img-fluid"
//               loading="lazy"
//             />

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }