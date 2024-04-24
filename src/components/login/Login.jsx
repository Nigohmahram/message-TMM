import { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {
	const [avatar, setAvatar] = useState({
		file: null,
		url: '',
	});

	const handleAvatar = e => {
		if (e.target.files[0]) {
			setAvatar({
				file: e.target.files[0],
				url: URL.createObjectURL(e.target.files[0]),
			});
		}
	};

	const handleRegister = async e => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const { username, email, password } = Object.fromEntries(formData);

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);

			await setDoc(doc(db, 'users', res.user.uid), {
				username: username,
				email: email,
				id: res.user.uid,
				blocked: [],
			});
			await setDoc(doc(db, 'userchats', res.user.uid), {
				chars: [],
			});
			toast.success('Account created! You can login now!');
		} catch (err) {
			// console.log(err);
			toast.error(err.message);
		}
	};
	const handleLogin = e => {
		e.preventDefault();
		toast.success('Successfully');
	};
	return (
		<div className='login'>
			<div className='item'>
				<h2>Welcome back</h2>
				<form onSubmit={handleLogin}>
					<input type='text' placeholder='Email' name='email' />
					<input type='password' placeholder='Password' name='password' />
					<button>Sign In</button>
				</form>
			</div>
			<div className='separator'></div>
			<div className='item'>
				<h2>Create an Account</h2>
				<form onSubmit={handleRegister}>
					<label htmlFor='file'>
						<img src={avatar.url || './avatar.png'} alt='' />
						Upload an image
					</label>
					<input type='file' id='file' style={{ display: 'none' }} onChange={handleAvatar} />
					<input type='Username' name='username' placeholder='Username' />
					<input type='Email' name='email' placeholder='Email' />
					<input type='password' placeholder='Password' name='password' />
					<button>Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
