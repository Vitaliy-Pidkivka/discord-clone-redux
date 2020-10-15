import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import Chat from './Chat'
import { login, logout, selectUser } from './features/userSlice'
import Login from './Login'
import { auth } from './firebase'

function App() {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//	logged
				dispatch(login({
					uid: authUser.uid,
					photo: authUser.photoURL,
					email: authUser.email,
					displayName: authUser.displayName
				}))
			} else {
				//	logged out
				dispatch(logout())
			}
		})
	}, [dispatch])

	return (
		<div className="app">
			{user ? (
				<>
					<Sidebar/>
					<Chat/>
				</>
			) : (
				<Login/>
			)}
		</div>
	)
}

export default App

