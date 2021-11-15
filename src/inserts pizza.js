db.pizza.deleteMany({})
db.pizza.insertOne(
					{
						_id: 1,
						pizza: "Desierta",
						ingredientes:   [
									"tomate", 
									"mozzarella"
										],
						tamaño: [
							        "pequeña",
							        "mediana",
							        "familiar"
								],
						precio: 
								{
									pequeña: 4.90,
									mediana: 6.90,
									familiar: 9.90},
						complementos: {
							extra_queso: false, 
							masa_fina: true, 
							salsa_texmex: false, 
							bordes_rellenos: false
									}, 
					opiniones:[
								{
								    hombres:{valoración: 7.9, favorita:false},
								    mujeres: {valoración: 7.3, favorita:false},
								    niños: {valoración: 9, favorita:true}, 
								    ancianos: {valoración: 9.5, favorita:true}
								}
							  ],
					numero_porciones: [1,2,4,6,8],
					ultimo_pedido: new Date ("2021-11-01")
					}
				)


db.pizza.drop({})
db.pizza.insertMany([
					{_id: 1,
					pizza: "Desierta",
					ingredientes: ["tomate", "mozzarella"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 4.90, mediana: 6.90, familiar: 9.90},
					complementos: {extra_queso: false, masa_fina: true, 
									salsa_texmex: false, bordes_rellenos: false}, 
					opiniones:[{hombres:{valoración: 7.9, favorita:false},
								mujeres: {valoración: 7.3, favorita:false},
								niños: {valoración: 9, favorita:true}, 
								ancianos: {valoración: 9.5, favorita:true}}],
					numero_porciones: [1,2,4,6,8],
					ultimo_pedido: new Date ("2021-11-01")},

					{_id:2,
					pizza: "Baconera",
					ingredientes: ["tomate", "mozzarella", "bacon"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 5.90, mediana: 9.90, familiar: 11.90},
					complementos: {extra_queso: false, masa_fina: true,
								   salsa_texmex: false, bordes_rellenos: false}, 
					opiniones:[{hombres:{valoración: 8.5, favorita:true},
								mujeres: {valoración: 8, favorita:false},
								niños: {valoración: 7, favorita:false}, 
								ancianos: {valoración: 7.5, favorita:true}}],
					ultimo_pedido: new Date ("2021-11-06")},

					{_id:3,
					pizza: "Jamonera",
					ingredientes: ["tomate", "mozzarella", "jamon york"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 5.90, mediana: 9.90, familiar: 11.90},
					complementos: {extra_queso: true, masa_fina: true,
								   salsa_texmex: false, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 7.8, favorita:false},
								mujeres: {valoración: 8.3, favorita:true},
								niños: {valoración: 7, favorita:true}, 
								ancianos: {valoración: 7.5, favorita:false}}],
					ultimo_pedido: new Date ("2021-11-05")},

					{_id:4,
					pizza: "Choricera",
					ingredientes: ["tomate", "mozzarella", "chorizo"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 5.90, mediana: 9.90, familiar: 11.90},
					complementos: {extra_queso: true, masa_fina: true, 
								   salsa_texmex: true, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 9, favorita:false},
								mujeres: {valoración: 6.4, favorita:false},
								niños: {valoración: 7.9, favorita:false}, 
								ancianos: {valoración: 7.5, favorita:true}}],
					ultimo_pedido: new Date ("2021-11-10")},

					{_id:5,
					pizza:"Serrana",
					ingredientes: ["tomate", "mozzarella", "jamon serano"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 5.90, mediana: 9.90, familiar: 11.90},
					complementos: {extra_queso: false, masa_fina: true,
								   salsa_texmex: false, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 6.9, favorita:false},
								mujeres: {valoración: 7.7, favorita:true},
								niños: {valoración: 7.3, favorita:false}, 
								ancianos: {valoración: 6.5, favorita:false}}],
					ultimo_pedido: new Date ("2021-11-09")},

					{_id: 6,
					pizza: "Ohana",
					ingredientes: ["tomate", "mozzarella", "jamon York", "piña"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 6.90, mediana: 10.90, familiar:12.90},
					complementos: {extra_queso: true, masa_fina: false, 
								   salsa_texmex: false, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 7.4, favorita:false},
								mujeres: {valoración: 7.5, favorita:true},
								niños: {valoración: 7.9, favorita:true}, 
								ancianos: {valoración: 6, favorita:false}}],
					ultimo_pedido: new Date ("2021-11-05")},

					{_id: 7,
					pizza: "Mafiosa",
					ingredientes: ["tomate", "mozzarella", "pepperoni", "extra_queso"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 6.90, mediana: 10.90, familiar:12.90},
					complementos: {extra_queso: true, masa_fina: false,
								   salsa_texmex: false, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 10, favorita:true},
								mujeres: {valoración: 9.8, favorita:true},
								niños: {valoración: 10, favorita:true}, 
								ancianos: {valoración: 9, favorita:true}}],
					ultimo_pedido: new Date ("2021-11-13")},

					{_id: 8,
					pizza:"Cremosa",
					ingredientes: ["tomate", "queso", "nata", "bacon", "champiñones"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 7.90, mediana: 11.90, familiar: 13.90},
					complementos: {extra_queso: true, masa_fina: false,
								   salsa_texmex: true, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 8.2, favorita:true},
								mujeres: {valoración: 8.5, favorita:true},
								niños: {valoración: 7, favorita:false}, 
								ancianos: {valoración: 7.3, favorita:false}}],
					ultimo_pedido: new Date ("2021-11-11")},

					{_id: 9,
					pizza:"Salsera",
					ingredientes: ["tomate", "mozzarella", "pepperoni", "guacamole", "nachos"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 7.90, mediana: 11.90, familiar:13.90},
					complementos: {extra_queso: true, masa_fina: false, 
								   salsa_texmex: true, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 9.2, favorita:true},
								mujeres: {valoración: 8.7, favorita:false},
								niños: {valoración: 5, favorita:false}, 
								ancianos: {valoración: 5, favorita:false}}],
								ultimo_pedido: new Date ("2021-11-09")},

					{_id: 10,
					pizza: "Rodeo",
					ingredientes: ["tomate", "mozzarella", "carne picada", "salsa barbacoa", "cebolla caramelizada"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 7.90, mediana:11.90, familiar:13.90},
					complementos: {extra_queso: true, masa_fina: false, 
								   salsa_texmex: true, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 8.3, favorita:false},
								mujeres: {valoración: 9.4, favorita:true},
								niños: {valoración: 9.5, favorita:true}, 
								ancianos: {valoración: 7.8, favorita:false}}],
				 	ultimo_pedido: new Date ("2021-11-07")},

					{_id: 11,
					pizza: "Iberica",
					ingredientes: ["tomate", "mozzarella", "chorizo", "jamon serrano", "ternera"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 7.90, mediana: 11.90, familiar:13.90},
					complementos: {extra_queso: true, masa_fina: false,
								   salsa_texmex: true, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 9.1, favorita:false},
								mujeres: {valoración: 8, favorita:false},
								niños: {valoración: 8.5, favorita:false}, 
								ancianos: {valoración: 8.3, favorita:false}}],
					ultimo_pedido: new Date ("2021-11-12")},

					{_id: 12,
					pizza: "Hulka",
					ingredientes: ["tomate", "mozzarella", "espinacas", "pimiento", "champiñones"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 7.90, mediana: 11.90, familiar:13.90},
					complementos: {extra_queso: false, masa_fina: true,
								   salsa_texmex: false, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 7, favorita:false},
								mujeres: {valoración: 8.7, favorita:true},
								niños: {valoración: 6, favorita:false}, 
								ancianos: {valoración: 7.7, favorita:false}}],
								ultimo_pedido: new Date ("2021-11-02")},

					{_id: 13,
					pizza: "Llorona",
					ingredientes: ["tomate", "mozarella", "cebolla", "queso cabra", "cebolla caramelizada", "salsa yogurt"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 8.90, mediana: 12.90, familiar: 14.90},
					complementos: {extra_queso: true, masa_fina: true,
								   salsa_texmex: false, bordes_rellenos: false}, 
					opiniones:[{hombres:{valoración: 8.7, favorita:true},
								mujeres: {valoración: 9.4, favorita:false},
								niños: {valoración: 6, favorita:false}, 
								ancianos: {valoración: 8, favorita:true}}],
					ultimo_pedido: new Date ("2021-11-11")},

					{_id: 14,
					pizza: "Chingona",
					ingredientes: ["tomate", "mozarella", "pimiento", "cheddar", "jalapeños", "aceitunas", "salsa infierno"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 9.90, mediana:13.90, familiar:15.90},
					complementos: {extra_queso: true, masa_fina: false,
					salsa_texmex: true, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 9.5, favorita:true},
								mujeres: {valoración: 9.9, favorita:true},
								niños: {valoración: 5, favorita:false}, 
								ancianos: {valoración: 5, favorita:false}}],
					ultimo_pedido: new Date ("2021-11-01")},

					{_id: 15,
					pizza: "CheesyFantasy",
					ingredientes: ["tomate", "mozzarella", "gouda", "edam", "cheddar", "parmesano", "maasdamer"],
					tamaño: ["pequeña", "mediana", "familiar"],
					precio: {pequeña: 9.90, mediana: 13.90, familiar: 15.90},
					complementos: {extra_queso: true, masa_fina: false, 
								   salsa_texmex: false, bordes_rellenos: true}, 
					opiniones:[{hombres:{valoración: 10, favorita:true},
								mujeres: {valoración: 10, favorita:true},
								niños: {valoración: 10, favorita:true}, 
								ancianos: {valoración: 10, favorita:true}}],
					ultimo_pedido: new Date ("2021-11-13")}

					])


					

					

					










					

			





