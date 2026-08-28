import TutorEnrollForm from "../components/layout/EnrollForm";
import TutorEnrollmentProcess from "../components/layout/TutorEnrollment";
export default function TutorEnroll() {
  return (
    <main className="container-fluid px-0">
      <div className="row g-0">

        <div className="col-12 col-lg-6">
          <TutorEnrollmentProcess/>
        </div>

        <div className="col-12 col-lg-6 bg-white p-4 p-md-5">
          <h1 className="text-center fs-3 mb-4">
            Fill the Form
          </h1>

          <TutorEnrollForm />
        </div>

      </div>
    </main>
  );
}