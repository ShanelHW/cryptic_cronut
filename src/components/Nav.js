import { Link } from "react-router-dom";
import './Nav.css'
import Search from './Search.js'
export default function Nav (props){
  return (
    <div className="nav">
         <Link to="./Main">
        <div><i class="bi bi-record-circle-fill"></i></div>
      </Link>     
      <Link to="./Currencies">
        <div>CURRENCIES</div>
      </Link>
      <Link to="./News">
        <div>NEWS</div>
      </Link>
      <Search />
    </div>
  );
};