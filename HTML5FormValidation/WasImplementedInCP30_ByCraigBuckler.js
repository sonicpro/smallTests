function validateForm(e) {
    var t, o = e.target, s = !0;
    toggleProgress(!0);
    for (var r = 0; r < o.elements.length; r++)
        "INPUT" === (t = o.elements[r]).nodeName && -1 !== ["text", "password"].indexOf(t.type) && (void 0 !== t.willValidate && t.parentElement.MaterialTextfield.checkValidity(),
        t.validity.valid || (s = !1));
    return s || (e.preventDefault(),
    toggleProgress(!1)),
    s
}
