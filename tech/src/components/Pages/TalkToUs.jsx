import React, { useRef  } from 'react';
import emailjs from '@emailjs/browser';

const TalkToUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Nota: Use a chave pública aqui
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          alert('Email enviado com sucesso!');
        },
        (error) => {
          console.log('FAILED:', error.text);
          alert('Erro ao enviar email.');
        }
      );
  };

  return (
    <main className='py-10 w-full bg-gray-50'>

      <section className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">

        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Fale Conosco</h1>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Nome:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">Mensagem:</label>
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
};

export default TalkToUs;
