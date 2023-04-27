
import { Component } from "react";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Notification } from "./notification/Notification";
import { Section } from "./section/Section";
import { Statistics } from "./statistics/Statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (buttonName) => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1
    }))
  }

  countTotalFeedback() {
    return (this.state.good+this.state.bad+this.state.neutral)
  }

  countPositiveFeedbackPercentage(good) {
    if (good===0) {
      return 0;
    } else{
    return (100*this.state.good/this.countTotalFeedback()).toFixed(0)}
  }

  render() {
    return (
    <Section title="">
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
      {(this.countTotalFeedback()===0) 
      ?  <Notification message="There is no feedback"/>
      : <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={Number(this.countPositiveFeedbackPercentage(this.state.good))}/>}
    </Section>
    );
  };
}
