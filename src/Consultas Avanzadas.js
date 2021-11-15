/*CONSULTAS AVANZADAS*/

/*Encontrar las que cumplan más de una condición*/

db.pizza.find({$and: [{pizza: {$ne:"Iberica"}},
					{ingredientes: {$elemMatch: {$eq:"guacamole"}}}]})

/*Encontrar pizzas que no tengan la opcion de extra de queso, O que si tengan texmex*/

db.pizza.find({$or: [{"complementos.extra_queso": {$ne:true}},
	                 {"complementos.salsa_texmex":{$ne:false}}]}).pretty()

/*Que no se cumplan una o las dos condiciones*/
db.pizza.find({$nor: [{"precio.familiar": {$gt: 15}},
					{"complementos.bordes_rellenos": {$eq:true}}]})

	


/*CONSULTAS COMBINADAS*/

/*Carlos ha descubierto, una promocion especial por el dia de su cumpleaños, las pizzas que empiecen por su inicial tienen 5 dolares de descuento, quiere pedir una con queso cheddar y que tenga salsa texmex como complemento*/

db.pizza.find({$and: [
			{pizza: {$regex:/^C/i}},
			{ingredientes: {$elemMatch:{$eq:"cheddar"}}},
			{"complementos.salsa_texmex":{$eq:true}}]})


/*Pizzas pedidas entre el 8 de noviembre y el 14 de noviembre, que contengan chorizo, y un precio inferior a 10 para el tamaño mediano*/
db.pizza.find({$and: [
				{ultimo_pedido:{$gte: new Date ("2021-11-08")}},
				{ultimo_pedido:{$lte: new Date ("2021-11-14")}},
				{ingredientes: {$in: ["chorizo"]}},
				{"precio.mediana": {$lt:10}}]})



/*A silvia le toca este fin de semana quedarse con su hijo, ha decidido llevarselo a una pizzeria por primera vez y no sabe lo que le puede gustar, pide las recomendaciones segun las estadísticas del restaurante*/

db.pizza.find({opiniones: {$all: [{"$elemMatch":{"niños.valoración":{$gt:9}}},
									{"$elemMatch":{"mujeres.favorita":true}}]
								}})

/*Voy a llevarme a comer a mi jefe, para recibir un ascenso, la cuenta la paga el, buscame las pizzas mas valoradas y las mas caras*/

db.pizza.find({$and: [{opiniones: {$all: [{"$elemMatch":{"hombres.valoración":{$gt:9}}}]}},
						{"precio.mediana":{$gte:10}}]}).sort({"precio.mediana":-1}).pretty()


