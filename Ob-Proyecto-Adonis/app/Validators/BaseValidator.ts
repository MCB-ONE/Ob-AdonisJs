export default class BaseValidator {
  public messages = {
    minLength: '{{ field }} ha de tener como mínimo {{ options.minLength }} carácteres',
    maxLength: '{{ field }} ha de tener como mínimo {{ options.maxLength }} carácteres',
    email: '{{ field }} ha de tenerer formato {{email}}',
    unique: '{{ field }} ya existe',
  };
}
