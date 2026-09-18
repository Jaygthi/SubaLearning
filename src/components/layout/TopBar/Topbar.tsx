import "../../../styles/TopBar.css";
import imgGraduate from "../../../assets/images/img_graduate.png";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container-fluid px-2 px-sm-3 px-md-4">
        <div className="d-flex align-items-left justify-content-left py-1">
          <div className="d-flex align-items-left gap-2 text-left">
            <img src={imgGraduate} alt="Suba Online Learning" height="50" />
            <p className="mb-0 top-bar-text">
              <span className="top-bar-head">Students Get Benefits From :</span>
              <span className="top-bar-co px-5 mx-6">
                 Australia | America | Canada | India | New Zealand | Singapore | Switzerland | UAE | UK
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
