import PropTypes from 'prop-types'


const Buttons = ({ text , onClick}) => {

	return (
		<div>
			<button 
			onClick = {onClick}
			className="btn"
			>
				{text === '' ? Buttons.defaultProps.text : text}
			</button>			
		</div>
	)

}

Buttons.defaultProps = {
	text : 'Add',

}

Buttons.propTypes ={
	text : PropTypes.string.isRequired, 
	onClick : PropTypes.func,
}

export default Buttons