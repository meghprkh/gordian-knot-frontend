import './css/picnic.min.css'
import './js/superagent-setup'

import { h, render, Component } from 'preact'
import { Router, route } from 'preact-router';

import NavBar from './js/navbar'
import Auth from './js/auth'
import Question from './js/question'

var Page1 = props => <h1>Hi Page1</h1>
var NotFound = props => <h1>Sorry, could not find the page with URL <code>{props.url}</code></h1>

class App extends Component {
  constructor() {
    super()

    // See if the authToken is set in localstorage and set it accordingly in the state and as a global variable
    if (localStorage.authToken) window.authToken = localStorage.authToken
    else window.authToken = ''
    this.state = {authToken}

    // Bind the event handlers to the correct "this"
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  login(authToken) {
    // Set the authToken and reroute to index page
    window.authToken = authToken
    localStorage.authToken = authToken
    this.setState({authToken}, route('/'))
  }
  logout() {
    // Unset the authToken and reroute to index page
    window.authToken = ''
    localStorage.authToken = authToken
    this.setState({authToken}, route('/'))
  }
  render () {
    return (
      <div>
        <NavBar />
        <main style={{padding: '80px'}}>
          <section>
            <Router>
              <Page1 path="/" />
              <Question path="/q/:qno?" />

              <Auth path="/auth" login={this.login}/>
              <Auth path="/auth/register" register login={this.login}/>
              <div path='/logout' ref={() => this.logout()}/>

              <NotFound default />
            </Router>
          </section>
        </main>
      </div>
    )
  }
}

render(<App />, document.getElementById('react-app'))
