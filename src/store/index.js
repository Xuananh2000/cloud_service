import {createStore} from 'vuex'

import ServiceStore from './modules/service'
import ContactStore from './modules/contact'
import SubscribeStore from './modules/subscribe'

const store = createStore({
    modules: {
        ServiceStore,
        ContactStore,
        SubscribeStore
    }
})

export default store
