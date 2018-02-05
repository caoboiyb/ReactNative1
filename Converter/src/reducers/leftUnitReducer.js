import { CHANGE_LEFT_UNIT } from '../actions/types'

export default (state = 0, action) => {
    return action.type === CHANGE_LEFT_UNIT
        ? action.payload
        : state
}