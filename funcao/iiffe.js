// IIFE -> immediately invoked function expression

(function () {
    console.log('sera executado na hr.')
    console.log('fugindo do escopo mais abrangente.')
}) ()

// não toca o escopo global.
// o lance é fugir do escopo global.
