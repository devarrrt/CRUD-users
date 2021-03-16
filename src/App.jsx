import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { AddForm } from './components/AddForm'
import { UsersTable } from './components/UsersTable'
import { EditForm } from './components/EditForm'



const App = () => {
	const [users, setUsers] = useState([])
	const [edit, setEdit] = useState(false)
	const initialFormState = {
		id: null,
		name: '',
		username: '',
		email: ''
	}
	const [currentUser, setCurrentUser] = useState(initialFormState)


	useEffect(() => {
		axios.get('http://localhost:3000/db.json')
			.then(res => setUsers(res.data))
	}, [])

	const deleteUser = (id) => {
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, upUser) => {
		setEdit(false)
		setUsers(users.map(user => (user.id === id ? upUser : user)))
	}

	const editRow = (user) => {
		setEdit(true)
		setCurrentUser({
			id: user.id,
			name: user.name,
			username: user.username,
			email: user.email
		})
	}

	const addUser = (user) => {
		user.id = users.length + 1
		setUsers([...users, user])
	}


	return (
		<div className="container">
			<h1>  CRUD REACT </h1>
			<div className="flex-row">
				<div className="flex-large">
					{edit ?
						<div>
							<h2> Edit user </h2>
							<EditForm
								edit={edit}
								setEdit={setEdit}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</div>
						:
						<div>
							<h2>Add user</h2>
							<AddForm
								addUser={addUser} />
						</div>
					}
				</div>
				<div className="flex-large">
					{users ?
						<>
							<h2> View  users ({users.length}) </h2>
							<UsersTable
								users={users}
								deleteUser={deleteUser}
								editRow={editRow}
							/>
						</>
						: <h2> Sorry, we couldn't find any users </h2>}
				</div>
			</div>
		</div>
	)
}




export default App
