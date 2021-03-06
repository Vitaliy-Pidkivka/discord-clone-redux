import React from 'react'
import './Message.scss'
import Avatar from '@material-ui/core/Avatar'

const Message = ({timestamp, message, user}) => {
	console.log(user)
	return (
		<div className="message">
			<Avatar src={user.photo}/>
			<div className="message__info">
				<h4>
					{user.displayName}
					<span className="message__timestamp">
						{new Date(timestamp?.toDate()).toUTCString()}
					</span>
				</h4>
				<p>{message}</p>
			</div>
		</div>
	)
}

export default Message
