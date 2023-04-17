import PropTypes from 'prop-types'
import {FiDelete} from 'react-icons/fi'
const Task = ({ data, onDelete , onToggle}) => {
	return (
		<div 
			className={`Task ${data.reminder ? "reminder" : ""}`} 
			key={data.id}
			onDoubleClick={() => onToggle(data.id)}
		>
			<div className="task-title">{data.title}</div>
			<div className="checkbox">
				<input 
					type="checkbox" 
					defaultChecked={data.completed === 1 ? true : false}
				/>
			</div>	
			<div className="delete"> 
				<FiDelete 
					className="fidel"  
					onClick={() => onDelete(data.id)}
				/>
			</div>
		</div>
	)
}


Task.propTypes = {
	data : PropTypes.object.isRequired , 
	onDelete : PropTypes.func.isRequired,
	onToggle : PropTypes.func.isRequired,
}

export default Task