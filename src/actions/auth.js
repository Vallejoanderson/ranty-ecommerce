// import axios from 'axios';
// const baseUrl = 'https://codealo-commerce-cms.onrender.com';
import { types } from '../components/types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const startRegisterWithEmailPasswordName = (email, password, name) => {
	return ( dispatch ) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then( async({user}) => {
				await user.updateProfile({ displayName: name });
				dispatch( login( user.uid, user.displayName ) )
			})
			.cath( e => {
				console.log(e);
			})
	}
}

export const startRegister = (userData = {}) => {
	// axios
	// 	.post(`${baseUrl}/auth/local/register`, userData)
	// 	.then( res => { console.log(res)} )
	// 	.catch( err => {
	// 		alert( err.response.data.message[0].messages[0].message )
	// 	})
	// dispatch( login( userData.identifier, userData.password) )
}

export const startLogin = (email, password) => {
	// axios
	// 	.post(`${baseUrl}/auth/local/`, userData)
	// 	.then( res => { console.log(res)})
	// 	.catch( err => {
	// 		alert( err.response.data.message[0].messages[0].message )
	// 	})
	// dispatch( login( userData.identifier, userData.password) );
	return ( dispatch ) => {
		// dispatch( uiStartLoading() );
		firebase.auth().signInWithEmailAndPassword( email, password )
			.then( ({ user }) => {
				dispatch(
					login(user.uid, user.displayName)
				)
				// dispatch( uiFinishLoading() );
			} )
			.catch( e => {
				// dispatch( uiFinishLoading() );
				alert(e)
			});
	}
}

export const startLogout = () => {
	return async( dispatch ) => {
		await firebase.auth().signOut();
		dispatch( logout() );
	}
}

export const login = ( uid, displayName ) => {
	return {
		type: types.login,
		payload: {
			uid,
			displayName,
		}
	}
}

export const logout = () => {
	return {
		type: types.logout,
	}
}