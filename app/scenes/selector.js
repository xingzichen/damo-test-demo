import damo, {BaseSelector, Input} from 'damo-core';

export default class Selector extends BaseSelector{
    @Input()
    title(state){
        return state.user.profile.name;
    }

    // static dataBindings = {
    //     title: damo.toselect(User, 'profile.login')
    // }

    initialize(){
        this.getModel('user').getUser();
    }
}
