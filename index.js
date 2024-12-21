// Este código pertenecía a otro usuario, solamente lo hice funcionar y minimalice el código para una mejor función,
// pronto lanzaré mi propia versión premium.

const ID = 'ID_DE_LA_APLICACIÓN';

// COLOCA 'NPM INSTALL DISCORD-RPC' EN LA TERMINAL
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transporte: 'ipc' });

DiscordRPC.register(ID);

async function actividad() {
  if (!RPC) return;

  // Detalles presencia;
  RPC.setActivity({
    details: ' DETALLES_DE_LA_RPC ',
    state: ' ESTADO_DE_LA_RPC ',    
    largeImageKey: ' CLAVE_DE_IMAGEN_GRANDE ',
    largeImageText: ' TEXTO_ALTERNATIVO_IMAGEN_GRANDE ', 
    smallImageKey: ' CLAVE_DE_IMAGEN_PEQUEÑA ', 
    smallImageText: ' TEXTO_ALTERNATIVO_IMAGEN_PEQUEÑA ',
    instance: false, 
    startTimestamp: Date.now(), 
    // Solo puedes tener 2 botones en el perfil. (en la parte inferior)
    buttons: [
      {
        label: ' TEXTO_DEL_BOTÓN ',  
        url: ' URL_DEL_BOTÓN '      
      },
      {
        label: ' TEXTO_DEL_BOTÓN ',
        url: ' URL_DEL_BOTÓN '
      }
    ]
  });
}

// Usa "node ." para activar la presencia en tu perfil
RPC.on('ready', async () => {
  console.log("Presencia en Discord activada");
  actividad();

  setInterval(() => {
    actividad();
  }, 100000000); // Actualiza la actividad cada 100 segundos (aprox. 1 día y 3 horas)
})

RPC.login({ clientId: ID });
