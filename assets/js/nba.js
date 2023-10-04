const papa = require("papaparse")
const getNbaPlayer = async () => {
    const response = await fetch("http://localhost/serveur/nba.php")
    return response;
}
//Filter par équipe
const viewteam=(array,team)=>{
    return array.filter(teams => teams.Team===team)
}

//Recherche joueur
const findPlayer=(array,nameplayer)=>{
    return array.find(teams => teams.Name===nameplayer)
}


getNbaPlayer().then(data => data.text())
    .then(data => papa.parse(data, { header: true }))
    .then(players=>{
        const player=players.data
        console.log(viewteam(player,"Boston Celtics"));
    })