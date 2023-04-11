const MUTATIONS_NAME = {
    SET_USER_INFORMATION: 'SET_USER_INFORMATION',
    SET_MODEL_TYPE: 'SET_MODEL_TYPE',
    SET_TECH_TYPE: 'SET_TECH_TYPE',
    SET_STORE_TYPE: 'SET_STORE_TYPE',
    SET_PERFORM_TYPE: 'SET_PERFORM_TYPE',
    SET_SAFETY_TYPE: 'SET_SAFETY_TYPE',
    SET_SOLUTION_TYPE: 'SET_SOLUTION_TYPE',
};

export default {
    namespaced: true,
    state: {
        formData: {
            userInfo: {
                email: '',
                phone: '',
                description: '',
            },
            modelType: {
                appType: {
                    webApp: '',
                    webSinglePage: '',
                    webAPI: '',
                    webAPIApp: '',
                    webStatic: '',
                },
                SourceType: {
                    git: '',
                    gitKaiyouIT: '',
                    Zip: '',
                },
            },
            techType: {
                language: '',
                frameWork: '',
                App: '',
                feature: '',
                domainType: '',
                deployType: '',
            },
            storeType: {
                dataBaseName: '',
                media: '',
                notification: '',
                dataBaseType: '',
                databaseFeature: ''
            },
            performType: [],
            safetyType: [],
            solutionType: {
                serverType1: '',
                serverNum1: '',
                serverType2: '',
                serverNum2: '',
                serverType3: '',
                serverNum3: '',
                price: '',
            },
        }
    },

    getters: {
        user: state => state.formData.userInfo,
        model: state => state.formData.modelType,
        tech: state => state.formData.techType,
        store: state => state.formData.storeType,
        perform: state => state.formData.performType,
        safety: state => state.formData.safetyType,
        solution: state => state.formData.solutionType,
    },

    actions: {
        setUserData({ commit }, data) {
            commit(MUTATIONS_NAME.SET_USER_INFORMATION, data);
        },
        setModelData({ commit }, data) {
            commit(MUTATIONS_NAME.SET_MODEL_TYPE, data);
        },
        setTechData({ commit }, data) {
            commit(MUTATIONS_NAME.SET_TECH_TYPE, data);
        },
        setStoreData({ commit }, data) {
            commit(MUTATIONS_NAME.SET_STORE_TYPE, data);
        },
        setPerformData({ commit }, data) {
            commit(MUTATIONS_NAME.SET_PERFORM_TYPE, data);
        },
        setSafetyData({ commit }, data) {
            commit(MUTATIONS_NAME.SET_SAFETY_TYPE, data);
        },
        setSolutionData({ commit }, data) {
            commit(MUTATIONS_NAME.SET_SOLUTION_TYPE, data);
        },
    },

    mutations: {
        [MUTATIONS_NAME.SET_USER_INFORMATION](state, data) {
            state.formData.userInfo = data
        },
        [MUTATIONS_NAME.SET_MODEL_TYPE](state, data) {
            state.formData.modelType = data
        },
        [MUTATIONS_NAME.SET_TECH_TYPE](state, data) {
            state.formData.techType = data
        },
        [MUTATIONS_NAME.SET_STORE_TYPE](state, data) {
            state.formData.storeType = data
        },
        [MUTATIONS_NAME.SET_PERFORM_TYPE](state, data) {
            state.formData.performType = data
        },
        [MUTATIONS_NAME.SET_SAFETY_TYPE](state, data) {
            state.formData.safetyType = data
        },
        [MUTATIONS_NAME.SET_SOLUTION_TYPE](state, data) {
            state.formData.solutionType = data
        },
    },
}
