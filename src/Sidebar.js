import React, { useEffect, useState } from 'react'
import './Sidebar.scss'

import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import PhoneIcon from '@material-ui/icons/Phone'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'

import SidebarChannel from './SidebarChannel'
import Avatar from '@material-ui/core/Avatar'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import db, { auth } from './firebase'

const Sidebar = () => {
	const user = useSelector(selectUser)
	const [channels, setChannels] = useState([])

	useEffect(() => {
		db.collection('channels').onSnapshot(snapshot => {
			setChannels(snapshot.docs.map(doc => ({
				id: doc.id,
				channel:doc.data()
		})))
		})
	}, [])

	const handleAddChannel = () => {
		const channelName = prompt("Enter a new channel name")
		if(channelName){
			db.collection('channels').add({
				channelName: channelName
			})
		}
	}

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				Smart programmer
				<ExpandMoreIcon/>
			</div>

			<div className="sidebar__channels">
				<div className="sidebar__channelsHeader">
					<div className="sidebar__header">
						<h4>Text Channels</h4>
						<ExpandMoreIcon/>
					</div>
					<AddIcon
						onClick={handleAddChannel}
						className="sidebar__addChannel"
					/>
				</div>

				<div className="sidebar__channelsList">
					{channels.map(({ id,  channel }) => (
						<SidebarChannel channel={channel} id={id} key={id}/>
					))}
				</div>
			</div>

			<div className="sidebar__voice">
				<SignalCellularAltIcon
					className="sidebar__voiceIcon"
					fontSize="large"
				/>
				<div className="voiceInfo">
					<h3>Voice Connected</h3>
					<p>Stream</p>
				</div>
				<div className="sidebar__voiceIcons">
					<InfoOutlinedIcon/>
					<PhoneIcon/>
				</div>
			</div>

			<div className="sidebar__profile">
				<Avatar
					onClick={() => auth.signOut()}
					src={user.photo}
				/>
				<div className="sidebar__profileInfo">
					<h3>{user.displayName}</h3>
					<p>{user.uid.substring(0, 6)}</p>
				</div>
				<div className="sidebar__profileIcons">
					<MicIcon/>
					<HeadsetIcon/>
					<SettingsIcon/>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
