import damo from 'damo-core';

export default class TestService {
  static displayName='testService';
  getUser() {
    return fetch('https://api.github.com/users/baqian').then(response => response.json());
  }
}

damo.service(TestService);
//damo.service({testService:TestService})Cnb@12345
