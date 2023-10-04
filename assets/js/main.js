const canvas = document.getElementById("myChart")


const getData = async () => {
    const resp = await fetch("./data/titanic.csv")
    return resp.text()
}
getData()
    .then(data => Papa.parse(data, { header: true }))
    .then(dataparse => {
        const passagers = dataparse.data
        let passager = new titanic(passagers);
        const ctx = document.getElementById('myChart');
        const ctx1 = document.getElementById('myChart1');
        const ctx2 = document.getElementById('myChart2');

        //graph Homme et femme 
        new graph().MenWomen(ctx, "bar", ["Homme", "femme"], "Nombre d'homme et de femme sur le titanic", [
            passager.getMen().length,
            passager.getWomen().length],
            ["gold","#0077b6"])


        //Histogramme par age
        new graph().MenWomen(ctx1, "pie", ["Adulte", "Jeune", "Enfant"], "Histogramme par age ", [
            passager.getByOld("adulte").length,
            passager.getByOld("jeune").length,
            passager.getByOld("enfant").length],
            ["gold","green","#0077b6"])

        //Mortalité
        new graph().MenWomen(ctx2, "bar", ["Adult", "Jeune", "Enfant"], "Mortalité ", [
            passager.getPDdead("adulte").length,
            passager.getPDdead("jeune").length,
            passager.getPDdead("enfant").length],
            ["red","green","pink"])


        tables(passagers)
        find(passagers)
        handleClick(passagers)
    })