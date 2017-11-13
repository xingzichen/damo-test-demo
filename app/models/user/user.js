import damo, {BaseModel, Api, initialState, dispatch} from 'damo-core';

export default class User extends BaseModel {
    @initialState profile = {};
    // static initialState = {
    //     profile:{}
    // }

    static displayName = 'user';

    getUser(){
    //@dispatch getUser(){
        // return this.getQuery({
        //     response: Api.get('http://localhost:8009/app/models/user/user.json'),
        //     proccessData: res => res.data,
        //     change:{
        //         name:'profile',
        //         callback: data => {console.log(data); return {login:data.data.name}}
        //     }
        // });
        // })(this.dispatch);

      return this.setState({
        profile : {
          response: damo.Api.get('http://localhost:8009/app/models/user/user.json'),
          processData: res =>{ res.data.name = 'what\'s wrong in proccessData'; return res;},
          change:data => { console.log(data);return {login:data.data.name}; }
        }
      });
    }
}

//User.displayName = "User";
