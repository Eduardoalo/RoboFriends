import React from 'react';


/*class Card extends Component {
	render(){
		return(

			<div>
				<img alt='photo' src = ""/>
			</div>

			<div>
				<h2></h2>
				<p></p>
			</div>

			);
	}
}*/

const Card = (props) => {

return(
			
			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
				<img alt='robots' src = {`https://robohash.org/${props.id}?200x200`} />
			
			<div>
				<h2>{props.name}</h2>

				<p>{props.email}</p>
			</div>
			</div>
		);

}

export default Card;