import { jsx } from 'react/jsx-runtime';
import 'react';

function button() {
    return /*#__PURE__*/ jsx("div", {
        className: "button",
        children: "button"
    });
}

function loading() {
    return /*#__PURE__*/ jsx("div", {
        className: "loading",
        children: "loading"
    });
}

export { button as Button, loading as Loading };
