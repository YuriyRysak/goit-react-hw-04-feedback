import React, { Component} from "react";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import {Statistics} from "./Statistics/Statistics"
import {Section}  from "./Section/Section";
import {Notification}  from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

//   static defaultProps = {
//     initialGood: 0,
//     initialNeutral: 0,
//     initialBad: 0,
//     initialTotal: 0,
//     initialPositive: null
// };


handleIncrement = state => {
  this.setState(prevState => ({ [state]: prevState[state] + 1 }));
};

countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

      
    

    // handleIncrementNeutral = () => {
    //     this.setState((prevState) => {
    //      return {
    //         neutral: prevState.neutral + 1, 
    //      }               
    //     });
        
    //  };

    //  handleIncrementBad = () => {
    //     this.setState((prevState) => {
    //      return {
    //         bad: prevState.bad + 1, 
    //      }               
    //     });
        
    //  };
 

    render() {
      const { good, neutral, bad } = this.state;
        return (
            <> 
            <Section title="Please leave feedback">
                <FeedbackOptions options = {this.state} 
                onHandleIncrement = {this.handleIncrement}
            />
            </Section>               
                   
   
            {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}


