import Modal from './modal';

export default class FormModal extends Modal {
  handleSave: (param: any) => any;
  constructor(selector: string, title: string, onModalSave: () => any) {
    super(selector, title);
    this.handleSave = onModalSave;
  }

  onShow() {
    super.onShow();
    console.log('form modal is open');
  }

  onSave(event: JQuery.Event<HTMLElement, null>) {
    this.handleSave(this.getFormData());
    super.onSave(event);
  }

  getFormData() {
    const inputs = this.modalContainer.find('input');

    return Array.from(inputs).reduce((obj: any, input: HTMLInputElement) => {
      const name = input.name;
 
      if (name) {
        obj[name] = input.value;
      } 

      return obj;
    }, {});
  }
}

// https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types