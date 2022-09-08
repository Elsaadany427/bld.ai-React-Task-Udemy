import React, { useState } from "react";
import parse from 'html-react-parser'
import "./Description.css";

export default function Description() {
  const [showMore, setShowMore] = useState(false);
  const text = ` Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?

  If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!
  
  Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years.
  
  The best part? Python is one of the easiest coding languages to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an absolute pro at programming!
  
  This course will cover all the basics and several advanced concepts of Python. We’ll go over:
  
      The fundamentals of Python programming
  
      Writing and Reading to Files
  
      Automation of Word and Excel Files
  
      Web scraping with BeautifulSoup4
  
      Browser automation with Selenium
  
      Data Analysis and Visualization with MatPlotLib
  
      Regex parsing and Task Management
  
      GUI and Gaming with Tkinter
  
      And much more!
  
  If you read the above list and are feeling a bit confused, don’t worry! As an instructor and student on Udemy for almost 4 years, I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over 200,000+ students from over 200 countries jumpstart their programming journeys through my courses.
  
  Here’s what some of my students have to say:
  

      “I wish I started programming at a younger age like Avi.  This Python course was excellent for those that cringe at the thought of starting over from scratch with attempts to write programs once again. Python is a great building language for any beginner programmer. Thank you Avi!”
  
      “I had no idea about any programming language. With Avi's lectures, I'm now aware of several python concepts and I'm beginning to write my own programs. Avi is crisp and clear in his lectures and it is easy to catch the concepts and the depth of it through his explanations. Thanks, Avi for the wonderful course, You're awesome! It's helping me a lot :)”
  
  
      "Videos are short and concise and well-defined in their title, this makes them easy to refer back to when a refresher is needed. Explanations aren't convoluted with complicated examples, which adds to the quick pace of the videos. I am very pleased with the decision to enroll in this course. Not only has it increased the pace I'm learning Python but I actively look forward to continuing the course, whenever I get the chance. Avi is friendly and energetic, absolutely delightful as an instructor.”
  
  So what are you waiting for? Jumpstart your programming journey and dive into the world of Python by enrolling in this course today!
  Who this course is for:
  
      Even if you haven't touched coding before, it won't matter. The easy step-to-step lectures will quickly guide you through everything you'll need to know about coding, mainly Python. This course is here for you to get accustomed and familiar with Python and its syntax. And above all, Python is one of the easiest coding languages to learn, and there's a lot you can do with it.`;
  return (
    <div className="container component-margin description">
      <div className="row">
        <div className="col-md-7">
          <h2>Description</h2>
          <p className="description-content">
            {showMore ? text : `${text.substring(0, 250)}`}
            <button
              className="btn showMore ps-0 mt-2 d-block"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}{" "}
              <i className={`fa fa-arrow-circle-${showMore ? 'up': 'down'}`} aria-hidden="true"></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
