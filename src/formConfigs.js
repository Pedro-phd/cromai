import * as yup from 'yup';

export let schema = yup.object().shape({
    a: yup.number("").integer(""),
    b: yup.number("").integer(""),
    c: yup.number("").integer(""),
});

export const initialValue = {
    a:0,
    b:0,
    c:0
}