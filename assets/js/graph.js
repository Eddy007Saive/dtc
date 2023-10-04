class graph {
    /**
     * Pour faire une graphe 
     * @param {*} canvas Id du canvas pour afficher le graph 
     * @param {*} type ttype de graphe soit :"bar","pie",..
     * @param {*} labels les élement a afficher sur le grapr array
     * @param {*} label nom du graphe
     * @param {*} data:array les données a afficher
     * @param {*} color couleur du graphe
     * @returns 
     */
    MenWomen(canvas, type, labels, label, data, color) {
        return new Chart(canvas, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: color,
                }]
            },

        });
    }
}