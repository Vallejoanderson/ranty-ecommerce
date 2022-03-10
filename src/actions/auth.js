import { types } from '../components/types/types'
import { firebase } from '../firebase/firebase-config'

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name })
        dispatch(login(user.uid, user.displayName))
      })
      .cath(e => {
        console.log(e)
      })
  }
}

export const startLogin = (email, password) => {
  return (dispatch) => {
    // dispatch( uiStartLoading() );
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
        )
        // dispatch( uiFinishLoading() );
      })
      .catch(e => {
        // dispatch( uiFinishLoading() );
        alert(e)
      })
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
    dispatch(logout())
  }
}

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
}

export const logout = () => {
  return {
    type: types.logout
  }
}
