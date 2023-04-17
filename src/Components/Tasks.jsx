import PropTypes from 'prop-types'
import Task from './Task'


const Tasks = ({tasks , onDelete , onToggle}) => {
	return (
			tasks.map((task) => (
				<Task 
					key={task.id}
					data={task}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			)	
			
		)
	)
}

Tasks.propTypes = {
	tasks : PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired,
	onToggle : PropTypes.func.isRequired,
}
export default Tasks