const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')
Database.then(async(db) => {
    //inserir dados na tabela 
    /*await saveOrphanage(db,{
        lat:"-27.223811",
        lng:"-49.6387039",
        name: "Lar da paz",
        about:"Presta assitência a criançsa de 6 a 15 anos que se encontre em situação de risco ou vulnerabilidade social",
        whatsapp:"48999547468",
        images:[
            "https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1598136490929-292a0a7890c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas das 8h até 18h.",
        open_on_weekends:"1"

    })*/
    //consultar dados na tabela
    const selectOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectOrphanages)
    //consultar apenas um orfanato
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)*/

    /*await db.run("DELETE FROM orphanage WHERE id ='4'")*/
})