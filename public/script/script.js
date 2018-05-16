import {input, form, button, pokemonLi, pokemonA} from './variables'

(function() {

    form.appendChild(input)
    input.placeholder = "Search for a Pokémon"
        
    input.addEventListener('keyup', function() {
        const filter = input.value.toUpperCase()
        console.log(filter)
        for (let i = 0; i < pokemonA.length; i++) {
            if (pokemonA[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                pokemonLi[i].classList.remove('gone')
            } else {
                pokemonLi[i].classList.add('gone')
            }
        }
    })
})()