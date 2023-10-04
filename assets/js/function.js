const tab = document.querySelectorAll(".tab")
const rescherche = (array, value) => {
    return new titanic(array).find(value)

}

//Toggle sur les élement
/**
 * Prend en parametre la id de l'element  qu'on veux afficher
 * @param {*} id 
 */
const display = (id) => {
    tab.forEach(e => {
        e.style.display = "none"
    })
    document.getElementById(id).style.display = "inline"

}

const dispayGraph = (id) => {
    const graph=document.querySelectorAll(".graph")
    graph.forEach(e => {
        e.style.display = "none"
    })
    document.getElementById(id).style.display = "inline"

}

display("Chart")
dispayGraph("chart1")




