import Modal from './modal';
import FormModal from './form-modal';
import $ from 'jquery';

const SELECTORS = {
  ADD_PASSWORD_MODAL: '#addingModal',
  EDIT_PASSWORD_MODAL: '#editModal',
  DELETE_PASSWORD_MODAL: '#deleteModal',
  TABLE_CONTENT: '.table tbody' 
};

export default class PasswordManager {
  addPasswordModal: Modal;
  editPasswordModal: Modal;
  deletePasswordModal: Modal;
  $tableContent: JQuery;

  constructor() {
    this.$tableContent = $(SELECTORS.TABLE_CONTENT);
  }

  initialize() {
    this.initModals();
  }

  initModals() {
    this.addPasswordModal = new FormModal(SELECTORS.ADD_PASSWORD_MODAL, 'Add new password', this.onAdd.bind(this));
    this.editPasswordModal = new FormModal(SELECTORS.EDIT_PASSWORD_MODAL, 'Edit password', this.onEdit.bind(this));
    this.deletePasswordModal = new Modal(SELECTORS.DELETE_PASSWORD_MODAL, 'Delete password', this.onDelete.bind(this));
  }

  onAdd(event: JQuery.Event<HTMLElement, null >, data: any) {
    const $tr = this.createRow(data)
    this.$tableContent.append($tr);
  }

  onDelete() {
    console.log('usuwanie');
    console.log(event);
  }

  createRow(data: any) {
    const { account, id, password } = data;

    return $('<tr>')
      .append($('<td>').text(account))
      .append($('<td>').text(id))
      .append($('<td>').text(password))
      .append(this.createBtnsCell());
  }

  createBtnsCell() {
    return $('<td>')
      .append(this.createBtn(SELECTORS.EDIT_PASSWORD_MODAL, 'pencil'))
      .append(this.createBtn(SELECTORS.DELETE_PASSWORD_MODAL, 'x'));
  }

  createBtn(targetModalId: string, btnIconType: string) {
    const $span = $('<span>')
      .addClass(`oi oi-${btnIconType}`);
        
    return $('<button>')
      .addClass('btn btn-primary m-1')
      .attr({
        'data-toggle': 'modal',
        'data-target': targetModalId,
      })
      .append($span);;
  }

  onEdit(data: any) {
    console.log(data);
  }
}
