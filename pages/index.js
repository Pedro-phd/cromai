import { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { initialValue, schema} from '../src/formConfigs'
import usePitagoras from '../src/hooks/usePitagoras'

export default function Home() {

  const [values, setValues] = useState({a:0,b:0,c:0})
  const [disabledA, setDisabledA] = useState(false)
  const [disabledB, setDisabledB] = useState(false)
  const [disabledC, setDisabledC] = useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValue
  });

  const onSubmit = data =>{
    const a = parseInt(data.a)
    const b = parseInt(data.b)
    const c = parseInt(data.c)
    const result = usePitagoras(a,b,c)
    setValues(result)
    console.log(values)
  }

  useEffect(()=>{
    const a = parseInt(watch('a'))
    const b = parseInt(watch('b'))
    const c = parseInt(watch('c'))

    if(a != 0 && b != 0){
      setDisabledC(true)
    }
    if(a != 0 && c != 0){
      setDisabledB(true)
    }
    if(c != 0 && b != 0){
      setDisabledA(true)
    }
    if(
      c == 0 && b == 0 ||
      b == 0 && a == 0 ||
      c == 0 && a == 0 
      ){
      setDisabledA(false)
      setDisabledB(false)
      setDisabledC(false)
    }

  },[watch(['a','b','c'])])

  return (
    <div>
      <h1>Calculadora de  Pitagoras</h1>
      <div className="container">
        <div className="calc">
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="fields">
              <label className="inputText">A = </label>
              <input type="number" {...register("a")} disabled={disabledA} className="input"/>
            </div>

            <div className="fields">
              <label className="inputText">B = </label>
              <input type="number" {...register("b")} disabled={disabledB} className="input"/>
            </div>

            <div className="fields">
              <label className="inputText">C = </label>
              <input type="number" {...register("c")} disabled={disabledC} className="input"/>
            </div>

            <button className="calculate">Calcular</button>
          </form>
          <img src="https://i.imgur.com/7jh43qB.png" className="resultLogo"/>
          <p>a = {values.a} b = {values.b} c = {values.c} </p>
      </div>
      <img src="https://i.imgur.com/FK0fBBl.png" className="triangle"/>
      </div>
    </div>
  )
}
