import * as yup from 'yup';

export let schema = yup.object().shape({
    a: yup.number("Adicione numeros").integer("Somente numeros positivos"),
    b: yup.number("Adicione numeros").integer("Somente numeros positivos"),
    c: yup.number("Adicione numeros").integer("Somente numeros positivos"),
});

export const initialValue = {
    a:0,
    b:0,
    c:0
}