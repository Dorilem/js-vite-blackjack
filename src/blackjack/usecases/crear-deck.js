import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo mazo de cartas
 */
 
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if( !tiposDeCartas || tiposDeCartas.length === 0 ) throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );

    return deck;
}