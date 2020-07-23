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

		axios.post('https://apigcp.nimbella.io/api/v1/web/jamierob-hzoysjqazdd/default/addVote', {
			for: e.target.value,
		  })
		  .then(function (response) {
			console.log(response);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	}


	useEffect(() => {
		axios.get('https://apigcp.nimbella.io/api/v1/web/jamierob-hzoysjqazdd/default/getVotes')
		  .then((response) => { return (response.status === 200) ? response.data: {}; })
		  .then((json) => {
			console.log(json);
			setDogVotes(json.dog);
			setCatVotes(json.cat);
		  });
	  }, [])


//loads when the page loads.
//not working
//   useEffect(() => {
// 	  console.log('found')
// 	  //setDogVotes(dogVotes => dogVotes + 1)
// 	  axios.get('/api/default/hello')
// 	  .then(response => console.log(response))
// 	  .catch(error => console.log("DID NOT WORK"));
//   }, []);
  

		return(
			<>
				<h1>Are you a dog person or cat person??????</h1>
				<div className="languages">
					
						<div key="dogKey" className="language">
							<div className="voteCount">
								{dogVotes}
							</div>
								<img alt="" src={dog_photo}></img>
							<button value="dog" onClick={handleVote}>Upvote Dog</button>
						</div>
							<div key="catKey" className="language">
							<div className="voteCount">
								{catVotes}
							</div>
								<img alt="" src={cat_photo}></img>
							<button value="cat" onClick={handleVote}>Upvote Cat</button>
						</div>
						
					
				</div>
			</>
		);
	}

export default App;