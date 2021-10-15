import { useState, useEffect } from 'react';

//teorema
//a^2 + b^2 = c^2

export default function usePitagoras(a,b,c) {

    if(a === 0){
        if(c < b){
            alert("C não pode ser menor que B")
        }
        const resultC = Math.pow(c,2)
        const resultB = Math.pow(b,2)
        const result = Math.sqrt(resultC - resultB)
        return {
            a:result.toFixed(2),
            b:b.toFixed(2),
            c:c.toFixed(2)
        }
    }
    if(b === 0){
        if(c < a){
            alert("C deve ser maior que A")
        }
        else{
            const resultA = Math.pow(a,2)
            const resultC = Math.pow(c,2)
            const result = Math.sqrt(resultC - resultA)
            return {
                a:a.toFixed(2),
                b:result.toFixed(2),
                c:c.toFixed(2)
            }
        }
    }
    if(c === 0){
            const resultA = Math.pow(a,2)
            const resultB = Math.pow(b,2)
            const result = Math.sqrt(resultA + resultB)
            return {
                a:a.toFixed(2),
                b:b.toFixed(2),
                c:result.toFixed(2)
            }
    }
}