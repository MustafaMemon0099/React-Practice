import React from "react";
import JobCard from "./JobCard";
import "./App.css";

const Arr = [
  {
    user: "Amazon",
    days: "4 days ago",
    position: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    price: "$90/hr",
    location: "Mumbai, India",
    imgSrc:
      "https://cdn.vectorstock.com/i/500p/39/87/amazon-icon-black-and-white-vector-34243987.jpg",
  },
  {
    user: "Google",
    days: "2 days ago",
    position: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    price: "$120/hr",
    location: "California, USA",
    imgSrc: "https://thumbs.dreamstime.com/z/google-new-logo-has-changed-its-g-letter-381836338.jpg",
  },
  {
    user: "Microsoft",
    days: "1 day ago",
    position: "Backend Developer",
    type: "Remote",
    level: "Junior Level",
    price: "$100/hr",
    location: "New York, USA",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCBgHpFyBHZWHSYACjN7iB6rcZkVIDpoV7Q&s",
  },
  {
    user: "Facebook",
    days: "4 days ago",
    position: "Data Scientist",
    type: "Internship",
    level: "Intern Level",
    price: "$90/hr",
    location: "London, UK",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  },
  {
    user: "Netflix",
    days: "7 days ago",
    position: "Video Editor",
    type: "Contract",
    level: "Senior Level",
    price: "$170/hr",
    location: "Los Angeles, USA",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
  },
  {
    user: "Meta",
    days: "Just now",
    position: "React Native Developer",
    type: "Full Time",
    level: "Mid Level",
    price: "$130/hr",
    location: "New York, USA",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
  },
  {
    user: "Apple",
    days: "4 days ago",
    position: "iOS Engineer",
    type: "Full Time",
    level: "Senior Level",
    price: "$200/hr",
    location: "Cupertino, USA",
    imgSrc: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {Arr.map((e, idx) => (
        <JobCard key={idx} {...e} />
      ))}
    </div>
  );
}

export default App;
