import { observable, action, configure } from 'mobx'

configure({ enforceActions: 'always' })

export default class AppStore {
  @observable
  isEmojiPickerVisible = false

  constructor() {
    this.setProducts()
  }

  @action
  showEmojiPicker = () => {
    this.products = 10
  }

  @action
  clear = () => {
    this.products = []
  }
}
