import Modal from './modal';

const SELECTORS = {
  ADD_PASSWORD_MODAL: '#addPasswordModal',
}

export default class PasswordManager {
  addPasswordModal: Modal;
  constructor() {}

  initialize() {
    this.initModals();
  }

  initModals() {
    this.addPasswordModal = new Modal(SELECTORS.ADD_PASSWORD_MODAL);
  }
}