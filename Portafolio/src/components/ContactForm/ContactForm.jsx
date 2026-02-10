import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import './ContactForm.css';

const EMAILJS_SERVICE_ID = 'service_ehly0es';
const EMAILJS_TEMPLATE_ID = 'template_jpaijel';
const EMAILJS_PUBLIC_KEY = 'uvs9dnqSLR1JR6vjG';

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef();
  
  const [formulario, setFormulario] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [estado, setEstado] = useState('idle'); // idle | sending | success | error

  const manejarCambio = (campo) => (evento) => {
    setFormulario({
      ...formulario,
      [campo]: evento.target.value
    });
  };

  const manejarEnvio = async () => {
    if (!formulario.name || !formulario.email || !formulario.message) return;
    
    setEstado('sending');

    try {
      const resultado = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: `Mensaje de ${formulario.name}`,
          name: formulario.name,
          email: formulario.email,
          message: formulario.message,
        }
      );

      console.log('EmailJS OK:', resultado);
      setEstado('success');
      setFormulario({ name: '', email: '', message: '' });

      // Resetear estado después de 4 segundos
      setTimeout(() => setEstado('idle'), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setEstado('error');
      setTimeout(() => setEstado('idle'), 4000);
    }
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      color: '#f0f6fc',
      backgroundColor: '#0d1117',
      borderRadius: '8px',
      '& fieldset': {
        borderColor: '#30363d',
      },
      '&:hover fieldset': {
        borderColor: '#0f62fe',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0f62fe',
      },
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#6e7681',
      opacity: 1,
    },
  };

  return (
    <div id="contacto" className="contactoContenedor seccion">
      <div className="contactoContenido contenedor">
        {/* Encabezado */}
        <div className="contactoEncabezado seccionTitulo">
          <span className="seccionEtiqueta">{t('contact.etiqueta')}</span>
          <h2 className="contactoTitulo">
            {t('contact.titulo')} <span className="textoAccento">{t('contact.tituloAccento')}</span>
          </h2>
        </div>

        {/* Formulario */}
        <div className="contactoFormWrapper vidrioCard" ref={formRef}>
          <div className="contactoFormGrid">
            {/* Nombre */}
            <div className="contactoCampo">
              <label className="contactoLabel">{t('contact.labelNombre')}</label>
              <TextField
                variant="outlined"
                placeholder={t('contact.placeholderNombre')}
                value={formulario.name}
                onChange={manejarCambio('name')}
                fullWidth
                className="contactoInput"
                disabled={estado === 'sending'}
                sx={inputSx}
              />
            </div>

            {/* Email */}
            <div className="contactoCampo">
              <label className="contactoLabel">{t('contact.labelEmail')}</label>
              <TextField
                variant="outlined"
                placeholder={t('contact.placeholderEmail')}
                value={formulario.email}
                onChange={manejarCambio('email')}
                fullWidth
                className="contactoInput"
                disabled={estado === 'sending'}
                sx={inputSx}
              />
            </div>
          </div>

          {/* Mensaje */}
          <div className="contactoCampo contactoCampoFull">
            <label className="contactoLabel">{t('contact.labelMensaje')}</label>
            <TextField
              variant="outlined"
              placeholder={t('contact.placeholderMensaje')}
              value={formulario.message}
              onChange={manejarCambio('message')}
              fullWidth
              multiline
              rows={4}
              className="contactoInput"
              disabled={estado === 'sending'}
              sx={inputSx}
            />
          </div>

          {/* Botón enviar */}
          <div className="contactoBtnWrapper" onClick={estado === 'idle' ? manejarEnvio : undefined}>
            <div className={`btnPrimario contactoBtn ${estado !== 'idle' ? 'contactoBtnDisabled' : ''}`}>
              {estado === 'sending' && (
                <>{t('contact.enviando') || 'Enviando...'}</>
              )}
              {estado === 'idle' && (
                <>{t('contact.btnEnviar')} <SendIcon fontSize="small" /></>
              )}
              {estado === 'success' && (
                <><CheckCircleOutlineIcon fontSize="small" /> {t('contact.exito') || '¡Mensaje enviado!'}</>
              )}
              {estado === 'error' && (
                <><ErrorOutlineIcon fontSize="small" /> {t('contact.error') || 'Error, intenta de nuevo'}</>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;