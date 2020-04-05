function getCharacterLength (str) {
    return [...str].length;
}
Object.defineProperty(String.prototype, 'charLength', {
    get () {
        return getCharacterLength(this);
    }
});