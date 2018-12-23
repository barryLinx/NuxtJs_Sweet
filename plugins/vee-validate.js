import Vue from 'vue';
import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';

Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW',zhTWValidate);


// const config = {
//   aria: true,
//   classNames: {},
//   classes: false,
//   delay: 0,
//   dictionary: null,
//   errorBagName: 'errors', // change if property conflicts
//   events: 'input|blur',
//   fieldsBagName: 'fields',
//   i18n: null, // the vue-i18n plugin instance
//   i18nRootKey: 'validations', // the nested key under which the validation messages will be located
//   inject: true,
//   locale: 'en',
//   validity: false
// };