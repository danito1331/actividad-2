let Puntos = 0
let FondoColor = "Original"

game.showLongText("¿Cuánto es 2 + 2?", DialogLayout.Full)
input.onButtonPressed( A, function () {
    Puntos += 2
    scene.setBackgroundColor(0) // Cambia a verde o color que elijas
})
