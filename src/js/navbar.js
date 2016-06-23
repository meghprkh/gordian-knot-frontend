import { h } from 'preact'

var NavBar = props => (
  <nav class="demo">
    <a href="/" class="brand">
      <span>Gordian Knot</span>
    </a>
    <input id="bmenub" type="checkbox" class="show"/>
    <label htmlFor="bmenub" class="burger pseudo button">&#8801;</label>
    <div class="menu">
      <a href="/b/42" class="pseudo button">Page 2</a>
      <a href="/auth" class="button">Login/Register</a>
    </div>
  </nav>
)

export default NavBar
