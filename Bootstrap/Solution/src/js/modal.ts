import $ from 'jquery';

export default class Modal {
  modal: JQuery;
  constructor(selector: string) {
    this.modal = $(selector);
    this.initialize();
  }

  initialize() {
    this.initModals();
  }

  initModals() {
    this.modal.on('shown.bs.modal', () => {
      console.log('modal is open');
    });
  }
}
