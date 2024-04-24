import toast from 'react-hot-toast';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

function sms({ phoneNumber, message, messages }) {
  const raw = JSON.stringify({
    icc: phoneNumber,
    message,
    messages,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  if (!phoneNumber || phoneNumber.length !== 19) return toast.error('No se ha ingresado un número de teléfono');

  fetch(
    'https://faas-sfo3-7872a1dd.doserverless.co/api/v1/web/fn-5075ff73-6671-403d-9b7e-7e0ca64f2ccb/default/sms',
    requestOptions,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((result) => {
      toast.success(`Mensaje enviado correctamente: ${result}`);
    })
    .catch((error) => {
      toast.error(`Error: ${error.message}`);
    });
  return true;
}

// Stops motor function
export function stopMotor({ phoneNumber }) {
  sms({ phoneNumber, message: 'quickstop123456' });
}

// Starts motor function
export function runMotor({ phoneNumber }) {
  sms({ phoneNumber, message: 'resume123456' });
}

// Configures devices function
export function configDevice({ phoneNumber }) {
  sms({
    phoneNumber,
    messages: [
      'apn123456 m2mglobal.telefonica.mx',
      'dns123456 24.199.121.252 5001',
      'angle123456 30',
      'fix060s***n123456',
      'sleep123456 on',
    ],
  });
}

export function sendSMS({ phoneNumber, message }) {
  sms({ phoneNumber, message });
}
export function resumeDevice({ phoneNumber }) {
  sms({
    phoneNumber,
    messages: ['resume123456', 'fix060s***n123456'],
  });
}

export async function checkStatus({ phoneNumber }) {
  toast.error('No se pudo obtener el estado de la red');
}
export async function resetRed({ phoneNumber }) {
  const raw = JSON.stringify({
    icc: phoneNumber,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  fetch(
    'https://faas-sfo3-7872a1dd.doserverless.co/api/v1/web/fn-5075ff73-6671-403d-9b7e-7e0ca64f2ccb/default/resetred',
    requestOptions,
  )
    .then((response) => response.text())
    .then((result) => {
      if (result === 'OK') {
        toast.success('Red reseteada correctamente');
      } else {
        toast.error('No se pudo resetear la red');
      }
    })
    .catch((error) => {
      toast.error(error);
    });
}
