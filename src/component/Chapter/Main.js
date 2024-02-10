import React, { useState } from "react";
// import { useSpeechSynthesis } from 'react-speech-kit';
import Button from "react-bootstrap/Button";
import "./main.css";
// import "./main.css";
import axios from "axios";
import { Card } from "react-bootstrap";

function Main() {
  const [data, setData] = useState([]);
// audio

const [isPlaying, setIsPlaying] = useState(false);
const [utterance, setUtterance] = useState(null);

const handleAudio = (text) => {
  if (isPlaying && utterance !== null) {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  } else {
    if ('speechSynthesis' in window) {
      const newUtterance = new SpeechSynthesisUtterance(text);
    
      newUtterance.onend = () => {
        setIsPlaying(false);
        setUtterance(null);
      };
      window.speechSynthesis.speak(newUtterance);
      setUtterance(newUtterance);
      setIsPlaying(true);
    } else {
      console.error('Speech Synthesis is not supported in this browser.');
    }
  }
};




// chapter 
  const options = {
    method: "GET",
    url: "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
    params: { limit: "18" },
    headers: {
      "X-RapidAPI-Key": "c759dba772mshe0bcd948976d6d2p1fd991jsn5a7808c9aa0b",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };
  const Api = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  Api();

  // 



  return (
    <div className="cards">
      {data.map((item, id) => {
        return (
          <div class="col  ">
            <Card key={id}>
              <Card.Img
              
                variant="top"
                src="https://img.freepik.com/free-photo/holy-bible-with-rays-light-coming-out-ai-generative_123827-23908.jpg?size=626&ext=jpg&ga=GA1.1.588103116.1706013551&semt=sph"
              />
              <Card.Body>
                <h5 class="card-title">
                  <span className="chapter">{item.slug}</span> {item.name}
                </h5>
                <span className="Summary">Chapter Summary:</span>

                <Card.Text>{item.chapter_summary}</Card.Text>
                <div className="btn">
                <Button variant="primary">
                  Continue {item.chapter_number}
                </Button>
                <Button variant="primary" onClick={() => handleAudio(item.chapter_summary)}>
                {isPlaying ? 'Stop' : 'Audio'}
              </Button> 
              </div>
              </Card.Body>
              
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
