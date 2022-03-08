import * as types from "../types"

const initialState = {
  usuarios: [],
}

const usuariosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USUARIOS_GET:
        return {
            usuarios: action.payload,
        }
    case types.USUARIOS_ADD:
        return {
            usuarios: [ ...state.usuarios, action.payload]
        }
    case types.USUARIOS_UPDATE:
        return {
        usuarios: state.usuarios.map((elem) => elem.id === action.payload.id ?
                 action.payload : elem)}
      case types.USUARIOS_DELETE:
        return {
        usuarios: state.usuarios.filter(elem => elem.id !== action.payload)}
      default:
        return { ...state }
    }
}

export default usuariosReducer