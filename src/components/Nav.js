import { Link } from "react-router-dom";
import './Nav.css'
export default function Nav (props){
  return (
    <div className="nav">
         <Link to="./Main">
        <div> <i class="bi bi-record-circle-fill"></i> CRONUT</div>
      </Link>     
      <Link to="./Price">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="./Currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
};