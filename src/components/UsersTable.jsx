import React from 'react'




export const UsersTable = ({ users, deleteUser, editRow }) => {

const handleDeleteUser = ( id ) => {
	if ( window.confirm( 'Are you sure you want to delete the user?' )) {
		deleteUser(id)
	} 
}

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Username</th>
					<th>E-mail</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody>
				{users ? users.map(user => (
					<tr key={user.id} >
						<td> { user.name } </td> 
						<td> { user.username } </td> 
						<td> { user.email } </td> 
						<td> 
							<button className="btn-dark"
							onClick={ ()=> editRow( user ) }
							> Edit </button>
							<button className="btn-dark"
							onClick={ ()=> handleDeleteUser( user.id ) }
							> Delete </button>
						</td>
					</tr>
				)) :
					<tr>
						<td colSpan={3}>No users</td>
					</tr>
				}
			</tbody>

		</table>
	)
}
