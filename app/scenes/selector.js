import damo, {BaseSelector, Input} from 'damo-core';

export default class Selector extends BaseSelector{
  static dataBindings = ['user'];
  static eventBindings = ['user'];
}
