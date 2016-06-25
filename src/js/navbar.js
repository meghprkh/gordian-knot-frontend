import { h } from 'preact'

var NavBar = props => (
  <nav class="demo">
    <a href="/" class="brand">
      <span>Gordian Knot</span>
    </a>
    <input id="bmenub" type="checkbox" class="show"/>
    <label htmlFor="bmenub" class="burger pseudo button">&#8801;</label>
    <div class="menu">
      <a href="/q" class="pseudo button">Questions</a>
      {!authToken ? <a href="/auth" class="button">Login/Register</a> :
                    <a href="/logout" class="button">Logout</a>}
    </div>
  </nav>
)

export default NavBar
