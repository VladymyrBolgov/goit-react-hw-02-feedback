import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import { AppContainer, P, Div } from './App.styled';

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  

  render() {
    return (
      <AppContainer>
        <Div>
         <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            
            <Statistics
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total = { this() }
              positivePercentage={this()} 
            />
            <P>No feedback given</P>
          </Section>
        </Div>
      </AppContainer>
    )
  }
}




 
        

