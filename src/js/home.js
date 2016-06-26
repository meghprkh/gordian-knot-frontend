import { h } from 'preact'

const Home = props => (
  <div>
    <p>Hello, this is the home page of the quiz portal.</p>
    <p>Please login using the email <i>megh@gmail.com</i> and the password <i>password</i></p>
    <p>There are currently five questions with the answers being respectively <i>1, 2, 3, 4, 5</i></p>
    <p>To reset the portal delete <i>db.sqlite</i> (in the backend repo folder) and restart the backend server</p>
    <h2>Features to be added</h2>
    <h3>Frontend</h3>
    <ul>
      <li>Proper feedback when you complete all the questions</li>
      <li>Fix feedback for invalid inputs in auth (currently <i>wrong credentials</i> is shown even
          in auth when the email is already used)</li>
      <li>Fix CSS of <i>error labels</i> which are displayed during wrong answers and <i>wrong credentials</i></li>
    </ul>
    <h3>Backend + Frontend</h3>
    <ul>
      <li>Add scoreboard</li>
      <li>Add levels where you can cross each level based on criteria like doing <i>this many</i>
          questions out of <i>this many</i></li>
      <li>Add ability to know the quiz status (a route that returns total number of questions and last question
          accessible) and use it for proper navigation instead of just <i>previous</i> and <i>next</i></li>
      <li>Limit the number of wrong answers per question</li>
      <li>Ability to see your previous wrong answers</li>
      <li>Feedback showing whether the question is answered</li>
    </ul>
  </div>
)

export default Home
