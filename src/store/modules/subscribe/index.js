const MUTATIONS_NAME = {
    SET_DATA: 'SET_DATA',
};

export default {
    namespaced: true,
    state: {
        formData: {
            name: '',
            email: '',
            phone: '',
            description: '',
        },
    },

    getters: {
        subscribeData: state => state.formData,
    },

    actions: {
        setData({commit}, data) {
            commit(MUTATIONS_NAME.SET_DATA, data);
        },
    },

    mutations: {
        [MUTATIONS_NAME.SET_DATA](state, data) {
            state.formData = data
        },
    },
}
