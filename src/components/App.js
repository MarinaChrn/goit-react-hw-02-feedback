
import { Component } from "react";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render() {
    return (
    <Section title="">
      <FeedbackOptions options={Object.keys(this.state)}/>
    </Section>
    );
  };
}
