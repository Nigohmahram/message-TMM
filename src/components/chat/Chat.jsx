import { useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className='chat'>
			<div className='top'>
				<div className='user'>
					<img src='./avatar.png' alt='avatar' />
					<div className='texts'>
						<span>Usmonov KH</span>
						<p>Lorem ipsum dolor sit sdf.</p>
					</div>
				</div>
				<div className='icons'>
					<img src='./phone.png' alt='phone' />
					<img src='./video.png' alt='video' />
					<img src='./info.png' alt='info' />
				</div>
			</div>
			<div className='center'></div>
			<div className='bottom'>
				<div className='icons'>
					<img src='./img.png' alt='' />
					<img src='./camera.png' alt='' />
					<img src='./mic.png' alt='' />
				</div>
				<input type='text' placeholder='Type a message...' />
				<div className='emoji'>
					<img src='./emoji.png' alt='emoji' onClick={() => setOpen(prev => !prev)} />
					<EmojiPicker open={open} onEmojiClick={handleEmoji} />
				</div>
				<button className='sendButton'>Send</button>
			</div>
		</div>
	);
};

export default Chat;
