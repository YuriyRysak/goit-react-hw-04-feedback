import { useState } from "react";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import {Statistics} from "./Statistics/Statistics"
import {Section}  from "./Section/Section";
import {Notification}  from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleIncrement = e => {
    // console.log(e.target.name, e.target.value);
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

const countTotalFeedback = () => {
  // console.log(good + neutral + bad);
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  const total = countTotalFeedback();
  return total ? Math.round((good * 100) / total) : 0;
};

      const options = [ "good", "neutral", "bad" ];
        return (
            <> 
            <Section title="Please leave feedback">
                <FeedbackOptions options={options} onHandleIncrement={handleIncrement}
            />
            </Section>               
                   
   
            {countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification/>
        )}
      </>
    );
  }



