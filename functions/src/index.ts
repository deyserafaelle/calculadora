import * as functions from 'firebase-functions';
import { soma } from './operacoes';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const adicao = functions.https.onRequest((request, response) => {
    const resultado = soma(+request.query.numero1, +request.query.numero2);
    console.log(`Resultado: ${resultado}`);
    response.send(
        { resultado }
    );
});
