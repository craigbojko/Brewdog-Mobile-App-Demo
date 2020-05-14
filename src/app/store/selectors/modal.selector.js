import { createSelector } from 'reselect'

const selectModal = state => state.get('modal')

const selectActiveModal = createSelector(
  selectModal,
  modalState => modalState.get('active')
)

const selectModalContent = createSelector(
  selectModal,
  modalState => {
    return modalState.get('content').toJS() || {}
  }
)

export {
  selectActiveModal,
  selectModalContent
}
