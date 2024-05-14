import React from 'react'
import bgImg from '../assets/img2.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Solicita Información</h2>
                <span>Innova Coop</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("nombres", { required : true })} placeholder='Nombres' />
                    {errors.nombres?.type === "required" && "El nombre es requerido"}
                    <input type="text" {...register("apellidos", { required : true })} placeholder='Apellidos' />
                    {errors.apellidos?.type === "required" && "El apellido es requerido"}
                    <input type="text" {...register("email", { required : true })} placeholder='Correo electrónico' />
                    {errors.email?.type === "required" && "El correo electrónico es requerido"}
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Número de celular' />
                    {errors.mobile?.type === "required" && "El número de celular es requerido"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <textarea name="postContent" rows={4} cols={40} {...register("message")} placeholder='Mensaje'/>
                    <button className='btn'>Enviar</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
