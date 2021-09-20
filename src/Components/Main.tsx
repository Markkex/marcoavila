import React, { FC } from "react";
interface elements {
  hello: string;
  primaryText: string;
  secondaryText: string;
  thirdText: string;
  fourthText: string;
  fifthText: string;
}
const Main: FC = () => {
  const descriptions: [elements] = [
    {
      hello: "Hi, I'm Marco!",
      primaryText: "I am a front-end developer based in Faro, Portugal.",
      secondaryText:
        "I can create websites or give a new UI to your applications.",
      thirdText:
        "I am passionate about technology and at the moment i am learning how to code.",
      fourthText:
        "Currently i am learning to become a better developer by doing personal projects.",
      fifthText:
        "On free time you can find me at the beach, doing sports or just chilling at home!",
    },
  ];

  return (
    <div id="hero-section" className="hero-section">
      {descriptions.map((description) => (
        <div className="welcome-section">
          <h1 className="header-font-style">{description.hello}</h1>
          <br />
          <p>{description.primaryText}</p>
          <br />
          <p>{description.secondaryText}</p>
          <p>{description.thirdText}</p>
          <p>{description.fourthText}</p>
          <br />
          <p>{description.fifthText}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
