import { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './chatList.css';
import AddUser from './addUser/addUser';

const ChatList = () => {
	const [addMode, setAddMode] = useState(false);
	return (
		<div className='chatList'>
			<div className='search'>
				<div className='searchBar'>
					<img src='./search.png' alt='search' />
					<input type='text' placeholder='Search' />
				</div>
				<img src={addMode ? './minus.png' : './plus.png'} alt='plus' className='add' onClick={() => setAddMode(prev => !prev)} />
			</div>
			<Scrollbars style={{ width: '100%', height: '85%' }}>
				<div className='item'>
					<img src='./avatar.png' alt='avatar' />
					<div className='texts'>
						<span>Usmonov Kh</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='item'>
					<img src='./avatar.png' alt='avatar' />
					<div className='texts'>
						<span>Usmonov Kh</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='item'>
					<img src='./avatar.png' alt='avatar' />
					<div className='texts'>
						<span>Usmonov Kh</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='item'>
					<img src='./avatar.png' alt='avatar' />
					<div className='texts'>
						<span>Usmonov Kh</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='item'>
					<img src='./avatar.png' alt='avatar' />
					<div className='texts'>
						<span>Usmonov Kh</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='item'>
					<img src='./avatar.png' alt='avatar' />
					<div className='texts'>
						<span>Usmonov Kh</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='item'>
					<img src='./avatar.png' alt='avatar' />
					<div className='texts'>
						<span>Usmonov Kh</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='item'>
					<img src='./avatar.png' alt='avatar' />
					<div className='texts'>
						<span>Usmonov Kh</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='item'>
					<img src='./avatar.png' alt='avatar' />
					<div className='texts'>
						<span>Usmonov Kh</span>
						<p>Hello</p>
					</div>
				</div>
			</Scrollbars>
			{addMode && <AddUser />}
		</div>
	);
};

export default ChatList;
