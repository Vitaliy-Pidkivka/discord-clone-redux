import React from 'react'
import './Login.scss'
import Button from '@material-ui/core/Button'
import { auth, provider } from './firebase'

const Login = () => {
	const signIn = () => {
		auth.signInWithPopup(provider)
			.catch(e => alert(e.message))
	}

	return (
		<div className="login">
			<div className="login__logo">
				<img src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo.wine.svg" alt=""/>
			</div>
			<Button onClick={signIn}>Sign in</Button>
		</div>
	)
}

export default Login
