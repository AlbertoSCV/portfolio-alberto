"use client";
import React, {useState} from 'react'
import { SocialIcon } from 'react-social-icons'

const EmailSection = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }

        console.log(data)

        const JSONdata = JSON.stringify(data);
        console.log(JSONdata)
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);

        if(response.status === 200){
            console.log('Message sent.')
            setEmailSubmitted(true);
        }
    }

    const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <section id='contact-me' className="grid md:grid-cols-2 my-12 md:my-12 sm:py-24 gap-4 relative">
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2" '></div>
        <div className='z-10'>
            <h5 className="text-xl font-bold text-white my-2">
                Charlemos
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                ¡Gracias por visitar mi portafolio! 
                Estoy emocionado de poder conectar contigo. 
                Si tienes alguna pregunta, comentario o simplemente quieres 
                charlar sobre colaboraciones o proyectos, no dudes en ponerte en 
                contacto conmigo a través de este formulario. 
            </p>
            <div className="socials flex flex-row gap-2 mb-8">
                <SocialIcon
                    network='github'
                    url="https://github.com/AlbertoSCV"
                />
                <SocialIcon
                    network='linkedin'
                    url="https://www.linkedin.com/in/alberto-somoza-17781a264/"
                />
                <SocialIcon
                    network='instagram'
                    url="https://www.instagram.com/alberto.s.cv"
                />
            </div>
        </div>
        <div className='z-20'>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor="email" className="text-white mb-2 block text-sm font-medium">
                            Ingresa tu Email
                        </label>
                        <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-2.5" 
                            type="email" 
                            id="email" 
                            name='email'
                            required 
                            placeholder='tu-correo@ejemplo.com'/>
                    </div>
                    <div className=''>
                        <label htmlFor="subject" className="text-white mb-2 block text-sm font-medium">
                            Asunto
                        </label>
                        <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-2.5" 
                            type="text" 
                            id="subject" 
                            name='subject'
                            required 
                            placeholder='Motivo de Contacto'/>
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message"
                            className='text-white mb-2 block text-sm font-medium'>
                            Mensaje
                        </label>
                        <textarea name="message" 
                            id="message" 
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-2.5' 
                            placeholder='Déjame tu propuesta, comentario o sugerencia...'
                        ></textarea>
                    </div>
                    <button type='submit'
                        className='px-6 py-3 w-full md:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-400 via-orange-600 to-red-500 text-white font-bold hover:bg-slate-200'
                    >
                        Enviar
                    </button>
                    {
                        emailSubmitted && (
                            <p className='text-green-400 text-sm mt-2'>
                                El email fue enviado correctamente.
                            </p>
                        )
                    }
                </form>
            </div>
    </section>
  )
}

export default EmailSection