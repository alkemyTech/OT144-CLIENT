import { isLogin } from '../Errors/UserNotLogged'
import userIsAdmin from '../Errors/UserIsAdmin'

export const LoginAndAdmin = () => {
	// eslint-disable-next-line sonarjs/prefer-single-boolean-return
	if (isLogin() && !userIsAdmin()) {
		return true
	} else {
		return false
	}
}
