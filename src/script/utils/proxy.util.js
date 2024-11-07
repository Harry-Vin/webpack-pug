import {isNil, isNumber, isPlainObject, isString} from "lodash-es";

export function getStoreKeys() {
    return {
        SHOW_TEXT: 'SHOW_TEXT',

    }
}

const store = new Proxy({}, {
    get: function (target, propKey, receiver) {
        console.log(`getting ${propKey}!`);
        return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
        console.log(`setting ${propKey}!`);
        if (Object.hasOwn(SoreSettingHandlers, propKey)) {
            SoreSettingHandlers[propKey](value);
        }
        return Reflect.set(target, propKey, value, receiver);
    }
});

export const StoreActions = {
    setShowText: function (value) {
        store[getStoreKeys().SHOW_TEXT] = value;
    },
}

export const StoreGetters = {

}

const SoreSettingHandlers = {
    [getStoreKeys().SHOW_TEXT]: function (value) {
        const showTextEl = document.getElementById("show-text");
        if (isNil(showTextEl)) {
            return;
        }
        if (isString(value)) {
            showTextEl.innerText = value;
        } else {
            showTextEl.innerText = "";
        }
    },
}
