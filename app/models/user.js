import damo, {BaseModel, Api, initialState, dispatch} from 'damo-core';

export default class User extends BaseModel {
    @initialState profile = {};
    // static initialState = {
    //     profile:{}
    // }

    static displayName = 'user';

    @dispatch getUser(){
    // getUser(){
        return this.getQuery({
            response: Api.get('http://localhost:8009/app/models/user.json'),
            proccessData: res => res.data,
            change:{
                name:'profile',
                callback: data => data
            }
        });
        // })(this.dispatch);
    }
}

//User.displayName = "User";
