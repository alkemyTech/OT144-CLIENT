import { ContactRestrict } from './ContactRestrict'
import { isLogin } from '../Errors/UserNotLogged'

export const LoginAndAdmin = () => {
	if (isLogin === true && ContactRestrict === false) {
		return true
	} else if (isLogin === true && ContactRestrict === true) {
		return false
	} else {
		return false
	}
}
