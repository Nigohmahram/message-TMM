import { useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import { Scrollbars } from 'react-custom-scrollbars';

const Chat = () => {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState('');

	const handleEmoji = e => {
		setText(prev => prev + e.emoji);
		setOpen(false);
	};
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
			<Scrollbars style={{ width: '100%', height: '100%' }}>
				<div className='center'>
					<div className='message'>
						<img src='./avatar.png' alt='avatar' />
						<div className='texts'>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.lo Cupiditate, temporibus.</p>
							<span>1 min ago</span>
						</div>
					</div>
					<div className='message own'>
						<div className='texts'>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus.</p>
							<span>1 min ago</span>
						</div>
					</div>
					<div className='message'>
						<img src='./avatar.png' alt='avatar' />
						<div className='texts'>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus.</p>
							<span>1 min ago</span>
						</div>
					</div>
					<div className='message own'>
						<div className='texts'>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus.</p>
							<span>1 min ago</span>
						</div>
					</div>
					<div className='message'>
						<img src='./avatar.png' alt='avatar' />
						<div className='texts'>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus.</p>
							<span>1 min ago</span>
						</div>
					</div>
					<div className='message own'>
						<div className='texts'>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus.</p>
							<span>1 min ago</span>
						</div>
					</div>
					<div className='message'>
						<img src='./avatar.png' alt='avatar' />
						<div className='texts'>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus.</p>
							<span>1 min ago</span>
						</div>
					</div>
					<div className='message own'>
						<div className='texts'>
							<img src='https://i.ytimg.com/vi/7NwBqivfDwc/maxresdefault.jpg' alt='sourse' />
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,consecteconsectetur adipisicing elit.
								Cupiditate,consectetur adipisicing elit. Cupiditate,Cupiditate,
							</p>
							<span>1 min ago</span>
						</div>
					</div>
				</div>
			</Scrollbars>

			<div className='bottom'>
				<div className='icons'>
					<img src='./img.png' alt='' />
					<img src='./camera.png' alt='' />
					<img src='./mic.png' alt='' />
				</div>
				<input type='text' placeholder='Type a message...' value={text} onChange={e => setText(e.target.value)} />
				<div className='emoji'>
					<img src='./emoji.png' alt='emoji' onClick={() => setOpen(prev => !prev)} />

					<div className='picker'>
						<EmojiPicker className='emojiPicker' open={open} onEmojiClick={handleEmoji} />
					</div>
				</div>
				<button className='sendButton'>Send</button>
			</div>
		</div>
	);
};

export default Chat;
