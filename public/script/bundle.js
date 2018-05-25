(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {

    var input = document.createElement('input'),
        button = document.createElement('a'),
        form = document.querySelector('form'),
        pokemonLi = document.querySelectorAll('.pokemon'),
        pokemonA = document.querySelectorAll('.pokemon a');

    form.appendChild(input);
    input.placeholder = "Search for a Pokémon";

    input.addEventListener('keyup', function () {
        var filter = input.value.toUpperCase();
        console.log(filter);
        for (var i = 0; i < pokemonA.length; i++) {
            if (pokemonA[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                pokemonLi[i].classList.remove('gone');
            } else {
                pokemonLi[i].classList.add('gone');
            }
        }
    });
})()

},{}]},{},[1]);
