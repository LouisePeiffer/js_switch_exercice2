// Exo 1
let num = prompt('Donne un nombre')
let rep = (num % 2 == 0)
switch (rep) {
    case true:
        alert("Le nombre est pair")
        break;
    default:
        alert("Le nombre est impair")
        break;
}

// Exo 2
let mois = prompt('Nombre entre 1 et 12?')
switch (mois) {
    case "1":
        alert('Janvier')
        break;
    case "2":
        alert('Février')
        break;
    case "3":
        alert('Mars')
        break;
    case "4":
        alert('Avril')
        break;  
    default:
        break;
}