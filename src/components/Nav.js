import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="NavBar">
      <Link to="/logs">LOGS</Link>
      <br></br>
      <Link to="/logs/new">NEW LOG</Link>
    </div>
  )
}

export default Nav
