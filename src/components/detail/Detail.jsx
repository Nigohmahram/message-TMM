import './detail.css';
import { Scrollbars } from 'react-custom-scrollbars';

const Detail = () => {
	return (
		<div className='detail'>
			<div className='user'>
				<img src='./avatar.png' alt='' />
				<h2>Usmonov KH</h2>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
			<Scrollbars style={{ width: '100%', height: '85%' }}>
				<div className='info'>
					<div className='option'>
						<div className='title'>
							<span>Account</span>
							<img src='./arrowUp.png' alt='arrow' />
						</div>
					</div>
					<div className='option'>
						<div className='title'>
							<span>Chat Settings</span>
							<img src='./arrowUp.png' alt='arrow' />
						</div>
					</div>
					<div className='option'>
						<div className='title'>
							<span>Privacy & help</span>
							<img src='./arrowUp.png' alt='arrow' />
						</div>
					</div>
					<div className='option'>
						<div className='title'>
							<span>Shared photos</span>
							<img src='./arrowDown.png' alt='Down' />
						</div>
						<div className='photos'>
							<div className='photoItem'>
								<div className='photoDetail'>
									<img src='https://th.bing.com/th/id/OIP.HoJzdbR1alp1BmuueKlGOAAAAA?w=350&h=450&rs=1&pid=ImgDetMain' alt='' />
									<span>photo_2024_2.png</span>
								</div>
								<img src='./download.png' alt='' className='icon' />
							</div>
							<div className='photoItem'>
								<div className='photoDetail'>
									<img src='https://th.bing.com/th/id/OIP.HoJzdbR1alp1BmuueKlGOAAAAA?w=350&h=450&rs=1&pid=ImgDetMain' alt='' />
									<span>photo_2024_2.png</span>
								</div>
								<img src='./download.png' alt='' className='icon' />
							</div>
							<div className='photoItem'>
								<div className='photoDetail'>
									<img src='https://th.bing.com/th/id/OIP.HoJzdbR1alp1BmuueKlGOAAAAA?w=350&h=450&rs=1&pid=ImgDetMain' alt='' />
									<span>photo_2024_2.png</span>
								</div>
								<img src='./download.png' alt='' className='icon' />
							</div>
							<div className='photoItem'>
								<div className='photoDetail'>
									<img src='https://th.bing.com/th/id/OIP.HoJzdbR1alp1BmuueKlGOAAAAA?w=350&h=450&rs=1&pid=ImgDetMain' alt='' />
									<span>photo_2024_2.png</span>
								</div>
								<img src='./download.png' alt='' className='icon' />
							</div>
							<div className='photoItem'>
								<div className='photoDetail'>
									<img src='https://th.bing.com/th/id/OIP.HoJzdbR1alp1BmuueKlGOAAAAA?w=350&h=450&rs=1&pid=ImgDetMain' alt='' />
									<span>photo_2024_2.png</span>
								</div>
								<img src='./download.png' alt='' className='icon' />
							</div>
							<div className='photoItem'>
								<div className='photoDetail'>
									<img src='https://th.bing.com/th/id/OIP.HoJzdbR1alp1BmuueKlGOAAAAA?w=350&h=450&rs=1&pid=ImgDetMain' alt='' />
									<span>photo_2024_2.png</span>
								</div>
								<img src='./download.png' alt='' className='icon' />
							</div>
						</div>
					</div>
					<div className='option'>
						<div className='title'>
							<span>Shared Files</span>
							<img src='./arrowUp.png' alt='arrow' />
						</div>
					</div>
					<button>Block User</button>
					<button className='logout'>LogOut</button>
				</div>
			</Scrollbars>
		</div>
	);
};

export default Detail;
