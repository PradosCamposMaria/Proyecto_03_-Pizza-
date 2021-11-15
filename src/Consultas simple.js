/*CONSULTAS SIMPLES*/

/*por campo*/

db.pizza.find({pizza:"Llorona"}) 
db.pizza.find({_id:3}) 

/*por campo dentro de otro*/

db.pizza.find({"precio.pequeña":{$lte:8}}).pretty() 
db.pizza.find({"precio.familiar":{$gte:12}})

/*por fecha*/

db.pizza.find({ultimo_pedido: {$gt: new Date ("2021-11-10")}})
db.pizza.find({ultimo_pedido: {$lt: new Date ("2021-11-15")}})

/*Por elemento exacto dentro de un array*/

db.pizza.find({ingredientes: {$elemMatch:{$eq:"jalapeños"}}})
db.pizza.find({ingredientes: {$elemMatch:{$ne:"cheddar"}}})
db.pizza.find({tamaño: {$elemMatch: {$eq:"familiar"}}}) 

/*Por caracteres especiales*/

db.pizza.find({pizza: {$regex:/^M/i}})

db.pizza.find({pizza: {$regex:/a$/i}})


/*Por no contener elementos*/

/*Mi amigo es vegetariano, encuentra todas las pizzas que no lleven nada de carne ni pescado, usando el comando $Nin*/ 

db.pizza.find({ingredientes: {$nin: ["bacon", "Jamon York", "chorizo", "jamon serrano", "ternera", "pepperoni", "carne picada", "salsa barbacoa"]}})

/*Contener elementos, no excluyente*/

db.pizza.find({ingredientes: {$in: ["cebolla", "guacamole", "espinacas"]}})

/*Buscar las pizzas que tengan los campos existentes*/

db.pizza.find({"complementos.extra_queso": {$exists:true}})
db.pizza.find({"complementos.masa_fina": {$exists:false}})

/*Buscar las pizzas que tengas esos complementos disponibles o no*/

db.pizza.find({"complementos.extra_queso":{$eq:true}}).pretty()
db.pizza.find({"complementos.masa_fina":{$eq:false}}).pretty()

/*Negar un condicionante*/
db.pizza.find({ingredientes: {$not: {$eq:"ternera"}}})
db.pizza.find({"precio.pequeña":{$not: {$lte:7}}})



/*NO VISTO EN CLASE*/

/*Operador Text para buscar cualquier texto*/

 db.pizza.createIndex({ingredientes:"text"})

 db.pizza.find({$text:{$search:"champiñones"}})



