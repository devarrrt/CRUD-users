import React, { useState } from 'react'



export const EditForm = ({ currentUser, updateUser }) => {
const [user, setUser] = useState(currentUser)


const handleFormSubmit = ( e ) => {
	e.preventDefault()

	if ( !user.name || !user.username || !user.email ) {
	 return alert(' Fields must be filled')
	} 
	updateUser( user.id, user )
}

const handleInput = ( e ) => {
	setUser({ ...user, [e.target.name]: e.target.value  })
}



return (
<form onSubmit={ handleFormSubmit }>

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

<button className="btn btn-dark"
onClick={ handleFormSubmit }
> Update user </button>
<button
 className="btn btn-dark"
 > Cancel </button>
</form>	
)
}
