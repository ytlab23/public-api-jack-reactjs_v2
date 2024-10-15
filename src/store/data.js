import { init } from "@rematch/core";
import storage from "./storage";
import createPersistPlugin from "@rematch/persist";
import { getPersistor } from "@rematch/persist";
// 
const auths = {
    state: {}, 
    reducers: {
        SET(state, payload) {
            return { ...state, ...payload }
        },
        DEL(state, payload) {
            storage.removeItem('persist:root');
            return {}
        }
    }
};
// 
const apis = {
    state: {
        api_favourties: []
    }, 
    reducers: {
        SET(state, payload) {
            return { ...state, ...payload }
        },
        DEL(state, payload) {
            storage.removeItem('persist:root');
            return {}
        }
    }
}
// 
const models = {
    state: {
        onCategory: 'home',
        onLearn: 'introduction'
    }, 
    reducers: {
        SET(state, payload) {
            return { ...state, ...payload }
        }
    }
};
// 
const persistPlugin = createPersistPlugin({
	key: 'root',
	storage,
	version: 2,
	whitelist: ['auths', 'apis']
})
// 
const store = init({ 
    models: {
        auths, 
        models,
        apis
    },
    plugins: [persistPlugin]
});
// 
const persistor = getPersistor();
// 
export { store, persistor }