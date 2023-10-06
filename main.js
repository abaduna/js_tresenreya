
let tuno ="x"
const tablero =["0","1","2","3","4","5","6","7","8","9"]


const prueba = (id)=>{
    
    cambiar = document.getElementById(id)
    
    if (tuno ==="x") {
        cambiar.innerText="X"
        tuno = "O"
        tablero[id] = "x"
        
        
        
    } else if (tuno ==="O") {
        cambiar.innerText="O"
        tuno = "x"
        tablero[id] = "o"
        
    }
    
    haGanado()
    
}

const haGanado=()=>{
    if (tablero[1] == tablero[4] && tablero[4] == tablero[7] && tablero[1]  != "") {
        alert("ganoste felicitaciones")
    } else if (tablero[1] == tablero[2] && tablero[2] == tablero[3]) {
        alert("ganaste felicitaciones")
    } else if (tablero[3] == tablero[4] && tablero[4] == tablero[5]) {
        alert("ganaste felicitaciones")
    } else if (tablero[7] == tablero[8] && tablero[8] == tablero[9]) {
        alert("ganaste felicitaciones")
        
    } else if (tablero[2] == tablero[6] && tablero[6] == tablero[8]) {
        alert("ganaste felicitaciones")
    } else if (tablero[3] == tablero[5] && tablero[2] == tablero[3]) {
        alert("ganaste felicitaciones")
    } else if (tablero[1] == tablero[5] && tablero[5] == tablero[9]) {
        alert("ganaste felicitaciones")
    } else if (tablero[3] == tablero[5] && tablero[5] == tablero[7]) {
        alert("ganaste felicitaciones")
    }else if (tablero[1] != "1" && tablero[2] != "2" &&tablero[3] != "3" &&tablero[4] != "4" &&tablero[5] != "5" &&tablero[6] != "6" && tablero[7] != "7" &&tablero[8] != "8" &&tablero[9] != "9" ){
        alert("empate")
    }
}

const start = ()=>{
    document.getElementById("1").addEventListener("click",()=>prueba("1"))
    document.getElementById("2").addEventListener("click",()=>prueba("2"))
    document.getElementById("3").addEventListener("click",()=>prueba("3"))
    document.getElementById("4").addEventListener("click",()=>prueba("4"))
    document.getElementById("5").addEventListener("click",()=>prueba("5"))
    document.getElementById("6").addEventListener("click",()=>prueba("6"))
    document.getElementById("7").addEventListener("click",()=>prueba("7"))
    document.getElementById("8").addEventListener("click",()=>prueba("8"))
    document.getElementById("9").addEventListener("click",()=>prueba("9"))
    
}
window.onload = start