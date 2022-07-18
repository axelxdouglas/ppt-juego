// 0. Iniciar el juego
alert('Inicia el juego!')
alert('Elige tu ataque')
// 1. Elegir ataque de los jugadores
let player = prompt('Elige 0 para piedra, 1 para papel y 2 para tijera')

if(player == 0){
    alert('Elegiste piedra')
} else if (player == 1){
    alert('Elegiste papel')
} else if (player == 2){
    alert('Elegiste tijera')
}

// 2. Elegir el ataque ALEATORIO del enemigo
/*Cada vez que llamemos a la función Math.random() devuelve un nro aleatorio entre 0-1 pero nosotros necesitamos 0,1,2 nada más para eso multiplicamos por 2 para que sea entre 0 y 2 y le redondeamos el nro con Math.round y metemos entre los () lo que nos saque el math.round

Entonces hacemos que guarde este math.round del math.random * 2 para que de un 0, 1 o 2 */
let enemy = Math.round(Math.random() * 2)

/*Lo mismo, decirle a los jdrs cual fue el ataque de los enemigos*/
if(enemy == 0){
    alert('El enemigo elegió piedra')
} else if (enemy == 1){
    alert('El enemigo elegió  papel')
} else if (enemy == 2){
    alert('El enemigo elegió  tijera')
}

// 3. Mostrar el resultado

if (player == enemy){
    alert('Empate :|')
} else if (player == 0 && enemy == 2){
    alert('Ganaste :)')
} else if (player == 1 && enemy == 0){
    alert('Ganaste :)')
}else if (player == 2 && enemy == 1){
    alert('Ganaste :)')
} else {
    alert('Perdiste :(')
}

// 4. Next steps / TODOs
// - Arreglar bugs
// - Arreglar aleatoriedad
// - Interactividad con una página web (manipulación del DOM)
// - Multijugador (backend - servidor central)