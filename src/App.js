
import React, { Component } from 'react';
import Lottie from 'react-lottie'
import quizQuestions from './api/questions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import FinanceJSON from './finance';
import { logicalExpression } from '@babel/types';
import FacebookLogin from 'react-facebook-login';
require('./App.css')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      allQuestions: [],
      answer: '',
      selectedAnswers: {},
      result: '',
      isLoggedIn: false,
      user: {}
    };
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.viewresults = this.viewresults.bind(this);
    this.login = this.login.bind(this);
  }

  handleAnswerSelected(e) {
    var _self = this;
    var obj = _self.state.selectedAnswers;
    var index = parseInt(e.target.value);
    console.log("for selected question number " + (_self.state.counter + 1) + " answer is " + index + " selected");
    var Qindex = (_self.state.counter)
    // create map and store all selected answers with quiz Questions
    obj[Qindex] = index;
    _self.setState({ selectedAnswers: obj })
  }

  login() {
    this.setState({ isLoggedIn: true })
  }

  componentDidMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers,
      allQuestions: quizQuestions
    });
  }


  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  //This function calculates which answer type has the highest number — aka the quiz result.
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz viewresults={this.viewresults}
        setNextQuestion={this.setNextQuestion}
        counter={this.state.counter}
        setPreviousQuestion={this.setPreviousQuestion}
        answer={this.state.answer}
        selectedAnswer={this.state.selectedAnswers[this.state.counter]}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.allQuestions} answers={this.state.selectedAnswers} />
    );
  }

  viewresults(e) {
    e.preventDefault();
    this.setState({ result: true })
  }

  render() {
    const defaultOption = {
      loop: true,
      autoplay: true,
      animationData: FinanceJSON,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    const facebookResponse = (response) => {
      this.setState({ ...this.state, user: response })
      console.log(this.state.user)
      localStorage.setItem('user', response)
    }

    return (
      <div className="App">
        <div className="App-header">

          {this.state.user.picture ?
            <div>
              <label>Welcome, {this.state.user.name}!<br /></label><br />
              <img src={this.state.user.picture.data.url} height={this.state.user.picture.height} width={this.state.user.picture.width} alt="avatar" />
            </div>
            : ''}
          <h1>What Type of Investor Are You?</h1>
        </div>
        {this.state.isLoggedIn ?
          <div>
            {this.state.result ? this.renderResult() : this.renderQuiz()}
          </div> :
          <div>
            <Lottie options={defaultOption}
              height={400}
              width={400}
            />
            <div className="row">
              <div className="fb-button">
                <FacebookLogin
                  appId="2526891507522295"
                  // autoLoad
                  fields="name,email,picture"
                  onClick={() => this.login()}
                  callback={facebookResponse}
                  cssClass="btnFacebook"
                  icon="fa-facebook"
                  textButton="&nbsp;Sign In with Facebook&nbsp;"
                />
              </div>
            </div>
          </div>}
      </div>
    );
  }

}

export default App;