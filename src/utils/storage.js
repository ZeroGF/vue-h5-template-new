const prefix = "FGBS-SCND-UI/";

const storage = {
    get(name) {
        return JSON.parse(window.localStorage.getItem(`${prefix + name}`));
    },
    set(name, data) {
        window.localStorage.setItem(`${prefix + name}`, JSON.stringify(data));
    },
    remove(name) {
        window.localStorage.removeItem(`${prefix + name}`);
    },
    clear() {
        window.localStorage.clear();
    }
};

export default storage;