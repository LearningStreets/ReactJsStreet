import {React} from 'react';

function SpellingCheckerComponent() {


    const spell = require('spell-checker-js');

        // Load dictionary
    spell.load('en')
    
    // Checking text
    const check = spell.check('Some text to check, blahblahblah, olololo');
    
    console.log(check);

    return <strong> This is SpellCheckerComponent Component</strong>


}

export default SpellingCheckerComponent
