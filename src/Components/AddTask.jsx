// Importing PropTypes 
import PropTypes from 'prop-types'
// Importing useState
import {useState} from 'react'
// React icons 
import { FaArrowAltCircleUp } from 'react-icons/fa' /* Arrow Icon*/ 


// Component
const AddTask = ({addTask, onClick}) => {
	const [title , setTitle] = useState("")
	const [reminder , setReminder] = useState(false)
	const newTask = {
		"title" : title, 
		"reminder" : reminder,
		"completed" : 0
		}
	return (
		<form className="add-form" onSubmit={(e) =>{
		 e.preventDefault()
		 if (!title ){
		 	alert('Please Type a Task ')
		 	return
		 }
		 addTask(newTask) 
		 // Clearing the form after submiting Data. 
		 setTitle('')
		 setReminder(false)	
		}}>
			<div className="title">
				<input 
					type="text" 
					placeholder="Title.." 
					value={title}
					onChange={(e) => {
						setTitle(e.target.value)
					}}
				/>				
			</div>
			<div className="reminder-add">
				<label htmlFor="title">set Reminder</label>
				<input 
					type="checkbox" 
					checked={reminder}
					onChange={(e) => {
						setReminder(e.currentTarget.checked)
					}}
				/>				
				<button 
					className="add-btn" 
					type="submit"
					
				> 
					Add Task 
				</button>
			</div>
			<span className="closing-arrow">
				<FaArrowAltCircleUp 
					size={30} 
					className="arrow"
					onClick={onClick}
				/>
			</span>

		</form>
	)
}


// Setting PropTypes 
AddTask.propTypes = {
	addTask :PropTypes.func.isRequired,
	onClick :PropTypes.func.isRequired,
}

// Exporting Module AddTask
export default AddTask

