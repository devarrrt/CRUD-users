import React, { useState } from 'react'



export const AddForm = ({ addUser }) => {

const initialForm = {
	id: null, 
	name: '',
	username: '',
  email: ''
}

const [ user, setUser ] = useState(initialForm)


const handleInput = ( e ) => {
	const { name, value } = e.target
	setUser({ ...user, [ name ]: value  })
} 

const handleSubmit = ( e ) => {
e.preventDefault()
if ( !user.name || !user.username || !user.email ) return

addUser( user )
setUser( initialForm )
}

	return (
	<form onSubmit={ handleSubmit }>
		<label> Name </label>
		<input
		 type="text"
		 name="name"
		 value={ user.name }
		onChange={ handleInput }
		/>
		
		<label> Username </label>
		<input
		 type="text"
		 name="username"
		 value={ user.username }
		onChange={ handleInput }
		/>
		
		<label> E-mail </label>
		<input
		 type="text"
		 name="email"
		 value={ user.email }
		onChange={ handleInput }
		/>

		<button> Add new user </button>
	</form>
	)
}
