import React from "react";
import "./FAQ.css";
import FAQQuestion from "./FAQQuestion.jsx";

const faqs = [
  {
    title: "How do I make Chrome my default web browser?",
    description:
      "You can set Chrome as your default browser on Windows or Mac operating systems as well as your iPhone, iPad or Android device. When you set Chrome as your default browser, any link you click will automatically open in Chrome. Find specific instructions for your device here.",
  },
  {
    title: "How can I customise Chrome?",
    description:
      "You can test out different colours, themes and settings in real time by opening a new tab in Chrome and clicking the “Customise Chrome” icon in the bottom right corner. A new side panel will open with the available customisation features. Learn more about customising Chrome.",
  },
  {
    title: `What are Chrome's safety settings?`,
    description:
      "Chrome uses cutting-edge safety and security features to help you manage your safety. Use Safety Check to instantly audit for compromised passwords, safe browsing status and any available Chrome updates. Learn more about safety and security on Chrome.",
  },
  {
    title: "What is Chrome’s password manager?",
    description:
      "Chrome uses Google Password Manager, which makes it simple to save, manage and protect your passwords online. It also helps you create strong, unique passwords for every account you use. Learn more about Google Password Manager.",
  },
  {
    title: "How do I add a browser extension to Chrome?",
    description:
      "It’s easy to add extensions to Chrome for desktop. Simply visit the Chrome Web Store, find and select the extension you want, and click Add to Chrome. Some extensions might need additional permissions. To use the extension, click on its icon to the right of the address bar. Learn more about extensions.",
  },
  {
    title: "How do I update Chrome?",
    description: `Normally updates happen in the background when you close and reopen your computer's browser. If you haven’t closed your browser in a while, you might see a pending update. Learn more about Chrome updates.`,
  },
];

const FAQ = () => {
  return (
    <div className="faq-section">
      <div className="faq-title">Frequently Asked Questions</div>
      <div className="faq-questions">
        {faqs.map((faq, index) => {
          return (
            <FAQQuestion
              key={index}
              title={faq.title}
              number={index+1}
              description={faq.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
