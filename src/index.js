import './css/picnic.min.css'
import { h, render, Component } from 'preact'
import Router from 'preact-router';

import NavBar from './js/navbar'

var Page1 = props => <h1>Hi Page1</h1>
var Page2 = props => <h1>Hi Page2 {props.id}</h1>
var NotFound = props => <h1>Sorry, could not find the page with URL <code>{props.url}</code></h1>

class Example extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <main style={{padding: '80px'}}>
          <section>
            <Router>
              <Page1 path="/" />
              <Page2 path="/b/:id?" />
              <NotFound default />
            </Router>
          </section>
        </main>
      </div>
    )
  }
}

render(<Example />, document.getElementById('react-app'))
