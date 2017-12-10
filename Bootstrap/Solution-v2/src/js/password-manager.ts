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
  tableContent: JQuery;

  constructor() {
    this.tableContent = $(SELECTORS.TABLE_CONTENT)
  }

  initialize() {
    this.initModals();
  }

  initModals() {
    this.addPasswordModal = new FormModal(SELECTORS.ADD_PASSWORD_MODAL, 'Add new password', this.onAdd.bind(this));
    this.editPasswordModal = new FormModal(SELECTORS.EDIT_PASSWORD_MODAL, 'Edit password', this.onEdit.bind(this));
    this.deletePasswordModal = new Modal(SELECTORS.DELETE_PASSWORD_MODAL, 'Delete password');
  }

  // Do poprawienia, tak jak się uczyliśmy
  onAdd(data: any) {
    $(`<tr>
      < td > ${data.id} < /td>
      < td > ${data.account} < /td>
      < td > ${data.password} < /td>
      < td >
      <button class="btn btn-primary m-1" data - toggle="modal" data - target="#editModal" > <span class="oi oi-pencil" > </span></button >
      <button class="btn btn-primary m-1" data - toggle="modal" data - target="#deleteModal" > <span class="oi oi-x" > </span></button >
      </td>
      </tr>`).appendTo(this.tableContent);
      console.log(data);
  }

  onEdit(data: any) {
    console.log(data);
  }
}
