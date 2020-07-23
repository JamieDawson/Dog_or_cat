import React,{ useState, useEffect} from 'react';
import './App.css';
import dog_photo from './images/dog_photo.png';
import cat_photo from './images/cat_photo.png';
import axios from 'axios';


function App(){ 
	const [dogVotes, setDogVotes] = useState(0);
	const [catVotes, setCatVotes] = useState(0);

	const handleVote = (e) => {
		//setDogVotes(dogVotes => dogVotes + 1);
		//alert(e.target.value)
		if (e.target.value === "dogButton"){
			setDogVotes(dogVotes => dogVotes + 1);
		} 
		if (e.target.value === "catButton") {
			setCatVotes(catVotes => catVotes + 1);
		}
	}




//loads when the page loads.
  useEffect(() => {
	  console.log('found')
	  //setDogVotes(dogVotes => dogVotes + 1)
	  axios.get('/api/default/create')
	  .then(response => console.log(response))
	  .catch(error => console.log("DID NOT WORK"));
  }, []);
  

		return(
			<>
				<h1>Are you a dog person or cat person!!</h1>
				<div className="languages">
					
						<div key="dogKey" className="language">
							<div className="voteCount">
								{dogVotes}
							</div>
								<img alt="" src={dog_photo}></img>
							<button value="dogButton" onClick={handleVote}>Upvote Dog</button>
						</div>
							<div key="catKey" className="language">
							<div className="voteCount">
								{catVotes}
							</div>
								<img alt="" src={cat_photo}></img>
							<button value="catButton" onClick={handleVote}>Upvote Cat</button>
						</div>
						
					
				</div>
			</>
		);
	}

export default App;