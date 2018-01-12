import Modal from './modal';

export default class FormModal extends Modal {
  constructor(selector: string, title: string, onModalSave: () => any) {
    super(selector, title, onModalSave);
    this.handleSave = onModalSave;
  }

  onShow(event: JQuery.Event<HTMLElement, null>) {
    super.onShow(event);
    console.log('form modal is open');
  }

  onSave(nativeBtn: any, event: JQuery.Event<HTMLElement, null>) {
    console.log(event, 'event');
    const data = this.getFormData();
    super.onSave(nativeBtn, event, data);
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