const keySequence = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    ];
    
    let userInput = new Array( keySequence.length );

    window.addEventListener( 'keydown', ( { key } ) => {
    userInput = [ ...userInput.slice( 1 ), key ];

    if ( keySequence.every( ( v, k ) => v === userInput[ k ] ) ) {
        alert( '                                            Yatta!' );
    }} );