import { ContactRestrict } from './ContactRestrict'
import { isLogin } from '../Errors/UserNotLogged'

export const LoginAndAdmin = () => {
	// eslint-disable-next-line sonarjs/prefer-single-boolean-return
	if (isLogin === true && ContactRestrict === false) {
		return true
	} else {
		return false
	}
}
