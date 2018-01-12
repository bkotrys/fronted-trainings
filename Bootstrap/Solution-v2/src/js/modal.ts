import $ from 'jquery';

const SELECTORS = {
  TITLE: '.modal-header h5',
  SAVE_BUTTON: '.btn-primary'
};

export default class Modal {
  modalContainer: JQuery<HTMLElement>;
  title: string;
  handleSave: (event: JQuery.Event<HTMLElement, null>, param: any) => any;

  constructor(selector: string, title: string = '', handleSave: () => any) {
    this.modalContainer = $(selector);
    this.title = title;
    this.handleSave = handleSave;
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
    this.modalContainer.on('shown.bs.modal', this.onShow.bind(this));
  }

  onShow(event: JQuery.Event<HTMLElement, null>) {
    this.focusFirstInput();
    console.log('modal is open');
    const nativeBtn = event.relatedTarget;
    this.modalContainer.find(SELECTORS.SAVE_BUTTON).on('click', this.onSave.bind(this, nativeBtn));

    // this.modalContainer.find(SELECTORS.SAVE_BUTTON).on('click', this.onSave.bind(this, event.relatedTarget));
    console.log(event);
  }

  // tutaj dodaj nowy parametr: np relatedTarget
  onSave(nativeBtn: any, event: JQuery.Event<HTMLElement, null>, data: () => any) {
    this.modalContainer.modal('hide');
    this.modalContainer.find('input').val('');
    this.handleSave(event, data);
    console.log(nativeBtn);
    //console.log(event.relatedTarget);
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
