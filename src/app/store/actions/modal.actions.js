import * as constants from '../constants'

export const openModal = (data) => ({
  type: constants.OPEN_MODAL,
  data
})

export const closeModal = () => ({
  type: constants.CLOSE_MODAL
})
