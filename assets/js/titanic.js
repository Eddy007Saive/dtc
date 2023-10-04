class titanic {

    constructor(titanic) {
        this.titanic = titanic
    }

    getByOld(value) {
        if (value.toLowerCase() === "enfant") {
            return this.titanic.filter(passager => passager.age < 18);
        } else if (value.toLowerCase() === "jeune") {
            return this.titanic.filter(passager => passager.age <= 30);
        } else if (value.toLowerCase() === "adulte") {
            return this.titanic.filter(passager => passager.age > 30);
        }
    }


    getPDdead(value) {
        if (value.toLowerCase() === "enfant") {
            return this.titanic.filter(passager => passager.age < 18 && passager.survived==="0");
        } else if (value.toLowerCase() === "jeune") {
            return this.titanic.filter(passager => passager.age <= 30 && passager.survived==="0");
        } else if (value.toLowerCase() === "adulte") {
            return this.titanic.filter(passager => passager.age > 30 && passager.survived==="0");
        }
    }

    // Récupere la liste des femme 
    getWomen() {
        return this.titanic.filter(passager => passager.sex === "female");
    }
    //Récupere la liste des homme
    getMen() {
        return this.titanic.filter(passager => passager.sex === "male");
    }
    //Récupere la liste des survivantt
    getAlive(sexe) {
        return this.titanic.filter(passager => passager.survived === "1" && passager.sex === sexe);
    }

    //Récupere la liste des mort
    getDead(sexe) {
        return this.titanic.filter(passager => passager.survived === "0" && passager.sex === sexe);

    }

    find(value) {
        let survived = "0"
        if (value.toLowerCase() === "mort") {
            return this.titanic.filter(passager => passager.survived === "0" || passager.sex === value || passager.pclass === value || passager.age === value || passager.name === value);

        } else if (value.toLowerCase() === "survivant") {
            return this.titanic.filter(passager => passager.survived === "1" || passager.sex === value || passager.pclass === value || passager.age === value || passager.name === value);

        }
        return this.titanic.filter(passager => passager.survived === value || passager.sex === value || passager.pclass === value || passager.age === value || passager.name === value);

    }





}