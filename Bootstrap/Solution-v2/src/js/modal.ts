import $ from 'jquery';

const SELECTORS = {
  TITLE: '.modal-header h5',
  SAVE_BUTTON: '.btn-primary'
};

export default class Modal {
  modalContainer: JQuery<HTMLElement>;
  title: string;
  
  constructor(selector: string, title: string = '') {
    this.modalContainer = $(selector);
    this.title = title;
    this.initialize();
  }

  initialize() {
    this.initModal();
  }

  initModal() {
    this.addTitle();
    this.registerEvents();
  }

  registerEvents() {
    this.modalContainer.on('shown.bs.modal', (event) => this.onShow()); 
    this.modalContainer.find(SELECTORS.SAVE_BUTTON).on('click', this.onSave.bind(this))
  }

  onShow() {
    this.focusFirstInput();
    console.log('modal is open');
  }

  onSave(event: JQuery.Event<HTMLElement, null>) { 
    this.modalContainer.modal('hide');
    this.modalContainer.find('input').val('');
    console.log(event);
  }

  addTitle() {
    if (this.title.length) {
      this.modalContainer.find(SELECTORS.TITLE).text(this.title);
    }
  }

  focusFirstInput() {
    const $firstInput = this.modalContainer.find('input').first();

    if ($firstInput) {
      $firstInput.focus();
    }
  }
}
