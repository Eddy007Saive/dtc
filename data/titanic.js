Papa = require("papaparse");
const chart = require("chart.js");
//const id=document.getElementById("myChart")

const getData = async () => {
    const resp = await fetch("http://localhost/serveur/titanic.php")
    return resp
}
getData()
    .then(response => response.text())
    .then(body => Papa.parse(body, {
        //Pour capturer les entête
        header: true
    }))
    .then(datas => {
        const passagers = datas.data
        //Afficher toute les femme 
        const femme = passagers.filter(passager => passager.sex === "female")
        console.log(`Nombres de femme sur le Titanic : ${femme.length}`);
        // femme.forEach(fem => {
        //     console.log(fem);
        // })

        //Nombre d'homme
        const homme = passagers.filter(passager => passager.sex === "male")
        console.log(`Nombres de femme sur le Titanic : ${homme.length}`);

        console.log(`Total passager : ${femme.length + homme.length}`);

        //Compter les survivant 
        const survivant = passagers.filter(passager => passager.survived === "1")
        console.log(`Nombre de survivant : ${survivant.length}`);

        //Compter les survivant 
        const mort = passagers.filter(passager => passager.survived === "0")
        console.log(`Nombre de mort : ${mort.length}`);

        //Nombre d'homme mort
        const hommeMort = passagers.filter(passager => passager.survived === "0" && passager.sex === "male")
        console.log(`Nombre d'homme mort : ${hommeMort.length}`);

        //Nombre d'homme mort
        const femmeMort = passagers.filter(passager => passager.survived === "0" && passager.sex === "female")
        console.log(`Nombre de femme mort : ${femmeMort.length}`);

        //Nombre de gens de moins de 18 ans 
        const mineur = passagers.filter(passager => passager.age < 18)
        console.log(`Nombre de mineur : ${mineur.length}`);

        /* new chart.Chart(id,{
              type:"bar",
              data:{
                  labels:["Homme","Femme"],
                  datasets:[
                      {
                          label:"Nombre de homme es*t de femme",
                          data:[
                              datas.data.filter(data=>data.sex==="male"),
                              datas.data.filter(data=>data.sex==="female")
      
                          ]
                      }
                  ]
              }
          })*/



    })

