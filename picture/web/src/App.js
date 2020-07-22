import React,{Component} from 'react';
import './App.css';
import dog_photo from './images/dog_photo.png';
import cat_photo from './images/cat_photo.png';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "Dog", votes: 0, photo: dog_photo},
				{name: "Cat", votes: 0, photo: cat_photo},
			]
		}
  }
  
 
  

	vote (i) {
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
		// function swap(array, i, j) {
		// 	var temp = array[i];
		// 	array[i] = array[j];
		// 	array[j] = temp;
		// }
		this.setState({languages: newLanguages});
		
  }
  
	// downVote (i) {
	// 	let newLanguages = [...this.state.languages];
	// 	newLanguages[i].votes--;
	// 	this.setState({languages: newLanguages});
		
  // }


	render(){
		return(
			<>
				<h1>Which animal is better?!</h1>
				<div className="languages">
					{
						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
                <img alt="" src={lang.photo}></img>

			
								<button onClick={this.vote.bind(this, i)}>Upvote {lang.name}</button>
                {/* <button onClick={this.downVote.bind(this, i)}>Downvote {lang.name}</button> */}
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default App;