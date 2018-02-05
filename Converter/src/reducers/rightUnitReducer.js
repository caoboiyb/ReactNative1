import { CHANGE_RIGHT_UNIT } from '../actions/types'

export default (state = 0, action) => {
    return action.type === CHANGE_RIGHT_UNIT
        ? action.payload
        : state
}