
const table = document.querySelector(".table")

const tables = (passagers) => {
    passagers.forEach((passager,index) => {
        let survived = "Survivant"
        if (passager.survived === "0") {
            survived = "Mort"
        }
        const row = document.createElement("tr")
        row.innerHTML = `
        <td>${passager.pclass}</td>
        <td>${survived}</td>
        <td>${passager.name}</td>
        <td>${passager.sex}</td>
        <td>${passager.age}</td>
        ` 
        table.appendChild(row)
    })
}

const find=(array)=>{
    let input=document.getElementById("filtre")
    input.addEventListener("keyup",()=>{
        let rowcount=table.rows.length
       for (let index = rowcount-1 ; index >0; index--) {
        table.deleteRow(index)
       }
       
       new titanic(array).find(input.value).forEach(passager => {
        const row = document.createElement("tr")
        let survived = "Survivant"
        if (passager.survived === "0") {
            survived = "Mort"
        }
        row.innerHTML = `
        <td>${passager.pclass}</td>
        <td>${survived}</td>
        <td>${passager.name}</td>
        <td>${passager.sex}</td>
        <td>${passager.age}</td>
        `
        table.appendChild(row)
       });
      
    })

    
    
}
const handleClick=(array)=>{
    const input=document.getElementById("filtre")
    const form=document.getElementById("form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let rowcount=table.rows.length
       for (let index = rowcount-1 ; index >0; index--) {
        table.deleteRow(index)
       }
       
       new titanic(array).find(input.value).forEach(passager => {
        const row = document.createElement("tr")
        let survived = "Survivant"
        if (passager.survived === "0") {
            survived = "Mort"
        }
        row.innerHTML = `
        <td>${passager.pclass}</td>
        <td>${survived}</td>
        <td>${passager.name}</td>
        <td>${passager.sex}</td>
        <td>${passager.age}</td>
        `
        table.appendChild(row)
       });
      
    })

    
    
}

