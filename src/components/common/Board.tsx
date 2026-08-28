import "../../styles/Board.css";

export interface BoardProps {
  name: string;
  description: string;
}

export default function Board({
  name,
  description,
}: BoardProps) {
  return (
    <article className="education-board">
      <div className="education-board__title">
        {name}
      </div>

      <div className="education-board__description">
        {description}
      </div>
    </article>
  );
}

// import imgMomChild from "../../assets/images/img_mom_child.jpg";

// export default function Header() {
//   return (
//     <div id = "home-boards" className="container-fluid">
//         <div className="flex-start align-items-center">
//            <img src={imgMomChild} alt="Suba Online Learning" className="logo-img"  height="100px" width="50%"/>
//             <div>
//                 <div className="flex" >
//                         mgmdsfkgmkgm
//                 </div>
//             </div>
//         </div>


//     </div>

// )};