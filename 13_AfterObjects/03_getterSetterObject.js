const User = {
    _email: "rabi@google.com",
    _password: "rabiGoogle123",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    },
}