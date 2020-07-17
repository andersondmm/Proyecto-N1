window.addEventListener('load', function(){
    let carts = document.querySelectorAll('.add-cart');
                             
    let products =[
        {
            name: 'Vinagre Blanco',
            etiqueta: 'Gustadina 500ml',
            precio: 1.61,                                        
            inCart:0
        },
        {
            name: 'Ají 200ml',
            etiqueta: 'Gustadina',
            precio: 1.16,
            inCart:0
        },
        {
            name: 'Aceite la Favorita',
            etiqueta: "aceite",
            precio: 4.70,
            inCart:0
        },
        {
            name: 'Aceite Girasol 2lt',
            etiqueta: "aceite",
            precio: 6.97,
            inCart:0
        },                                                                                                                        
        {
            name: "Aceite Girasol 1lt",
            etiqueta: "aceite",
            precio: 3.25,
            inCart:0
        },  
        {
            name: "Aceite Oliva 500ml",
            etiqueta: "aceite",
            precio: 8.42,
            inCart:0
        },                                                          
        {
            name: "Ajo en Polvo",
            etiqueta: "ajo",
            precio: 2.02,
            inCart:0
        },  
        {
            name: "Sabora Ilé",
            etiqueta: "sabora",
            precio: 2.17,
            inCart:0
        },  
        {
            name: "Maggi 240gr",
            etiqueta: "maggi",
            precio: 1.47,
            inCart:0
        },  
        {
            name: "Maggi 550gr",
            etiqueta: "sabora",
            precio: 3.03,
            inCart:0
        }, 
        {
            name: "Cubito Maggi",
            etiqueta: "cubitoMaggi",
            precio: 2.42,
            inCart:0
        }, 
        {
            name: "Aceite Girasol",
            etiqueta: "gustadina",
            precio: 3.25,
            inCart:0
        }, 
        {
            name: "Achiote ",
            etiqueta: "la favorita",
            precio: 2.08,
            inCart:0
        },  
        {
            name: "Cris-Salero",
            etiqueta: "salero",
            precio: 2.23,
            inCart:0
        },   
        {
            name: "Aliño Ile 200gr",
            etiqueta: "aliño",
            precio: 0.63,
            inCart:0
        },   
        {
            name: "Cuero en Rollo Cancho",
            etiqueta: "mr chancho",
            precio: 4.98,
            inCart:0
        },  
        {
            name: "Filete de Pechuga",
            etiqueta: "mr pollo",
            precio: 19.34,
            inCart:0
        }, 
        {
            name: "Filete de Pechuga en Bandeja",
            etiqueta: "mr pollo",
            precio: 11.35,
            inCart:0
        }, 
        {
            name: "Mr Pollo Grande",
            etiqueta: "mr pollo",
            precio: 7.56,
            inCart:0
        },  
        {
            name: "Mr Pollo Extragrande",
            etiqueta: "mr pollo",
            precio: 8.16,
            inCart:0
        },   
        {
            name: "Muslos de Pollo",
            etiqueta: "mr pollo",
            precio: 4.60,
            inCart:0
        },  
        {
            name: "Pechuga Especial",
            etiqueta: "mr pollo",
            precio: 6.30,
            inCart:0
        },   
        {
            name: "Pechuga Pollo",
            etiqueta: "mr pollo",
            precio: 2.47,
            inCart:0
        },    
        {
            name: "Piernas y Muslos",
            etiqueta: "mr pollo",
            precio: 4.74,
            inCart:0
        }, 
        {
            name: "Piernita en Bandeja",
            etiqueta: "mr pollo",
            precio: 4.62,
            inCart:0
        },    
        {
            name: "Piernitas",
            etiqueta: "mr pollo",
            precio: 5.29,
            inCart:0
        }, 
        {
            name: "Carne Asadero",
            etiqueta: "mr chancho",
            precio: 7.14,
            inCart:0
        },   
        {
            name: "Chicharrón ",
            etiqueta: "mr chancho",
            precio: 5.06,
            inCart:0
        }, 
        {
            name: "Chuleta Ahumada",
            etiqueta: "juris",
            precio: 4.51,
            inCart:0
        }, 
        {
            name: "Chuleta en Bandeja",
            etiqueta: "mr chancho",
            precio: 8.51,
            inCart:0
        },  
        {
            name: "Chocolate en Barra",
            etiqueta: "chocolate",
            precio: 10.64,
            inCart:0
        },    
        {
            name: "Chocolate Negro",
            etiqueta: "chocolate",
            precio: 19.34,
            inCart:0
        },  
        {
            name: "Chocolate con Sal",
            etiqueta: "chocolate",
            precio: 5.60,
            inCart:0
        },   
        {
            name: "Mix de Cocoa en Polvo",
            etiqueta: "cocoa",
            precio: 15.00,
            inCart:0
        },   
        {
            name: "Tic Tac Naranja",
            etiqueta: "tic tac",
            precio: 0.61,
            inCart:0
        },  
        {
            name: "Tic Tac Mint",
            etiqueta: "tic tac",
            precio: 0.55,
            inCart:0
        },   
        {
            name: "Tic Tac Fruit",
            etiqueta: "tic tac",
            precio: 0.61,
            inCart:0
        }, 
        {
            name: "Tic Tac frutos Rojos",
            etiqueta: "tic tac",
            precio: 0.61,
            inCart:0
        },   
        //Lácteos y Huevos
        {
            name: "Crema de Leche",
            etiqueta: " la lechera",
            precio: 1.93,
            inCart:0
        }, 
        {
            name: "Huevos Indaves",
            etiqueta: "huevos",
            precio: 5.99,
            inCart:0
        },  
        {
            name: "Huevos Indaves 12 Unidades",
            etiqueta: "huevos",
            precio: 2.45,
            inCart:0
        },   
        {
            name: "Huevos Indaves 12 Unidades",
            etiqueta: "huevos",
            precio: 2.39,
            inCart:0
        },  
        {
            name: "Leche Vita Deslactosa",
            etiqueta: "vita",
            precio: 1.63,
            inCart:0
        }, 
        {
            name: "Leche Vita Descremada",
            etiqueta: "vita",
            precio: 1.22,
            inCart:0
        },   
        {
            name: "Leche Vita Entera",
            etiqueta: "vita",
            precio: 1.14,
            inCart:0
        },  
        {
            name: "Margarina Bonella",
            etiqueta: "bonella",
            precio: 2.65,
            inCart:0
        },  
        {
            name: "Margarina Imperial",
            etiqueta: "imperial",
            precio: 1.08,
            inCart:0
        },  
        {
            name: "Queso Kiosko",
            etiqueta: "mozzarrela",
            precio: 2.66,
            inCart:0
        },  
        {
            name: "Yogurt Kiosko Frutilla",
            etiqueta: "kiosko",
            precio: 2.88,
            inCart:0
        },    
        {
            name: "Yogurt Kiosko Mora",
            etiqueta: "kiosko",
            precio: 0.63,
            inCart:0
        },     
        {
            name: "Yogurt Kiosko Mora",
            etiqueta: "kiosko",
            precio: 2.88,
            inCart:0
        },   
        {
            name: "Yogurt Toni Frutilla",
            etiqueta: "toni",
            precio: 5.06,
            inCart:0
        },   
        {
            name: "Yogurt Toni Natural",
            etiqueta: "toni",
            precio: 5.37,
            inCart:0
        },   
        {
            name: "Yogurt Toni Natural",
            etiqueta: "toni",
            precio: 0.89,
            inCart:0
        }, 
        //Vinos y Licores
        {
            name: "Cerveza Heineken Lata",
            etiqueta: "heinekem",
            precio: 2.17,
            inCart:0
        },   
        {
            name: "Cerveza Heiniken",
            etiqueta: "heineken",
            precio: 2.23,
            inCart:0
        },   
        //Arroz - Pastas - Granos
        {
            name: "Arroz Gramolino 500gr",
            etiqueta: "gramolino",
            precio: 0.92,
            inCart:0
        },  
        {
            name: "Arroz Envejecido 25lbs",
            etiqueta: "envejecido",
            precio: 13.78,
            inCart:0
        },   
        {
            name: "Fideo Espirales",
            etiqueta: "don vittorio",
            precio: 1.70,
            inCart:0
        },   
        {
            name: "Fideo Linguini",
            etiqueta: "don vittorio",
            precio: 1.70,
            inCart:0
        },   
        {
            name: "Fideo Rigatoni",
            etiqueta: "don vittorio",
            precio: 1.70,
            inCart:0
        },   
        {
            name: "Fideo Spagueti",
            etiqueta: "don vittorio",
            precio: 1.70,
            inCart:0
        },   
        {
            name: "Fideo Spagueti 400g",
            etiqueta: "don vittorio",
            precio: 1.50,
            inCart:0
        },   
        {
            name: "Lenteja del Sur",
            etiqueta: "lenteja",
            precio: 1.03,
            inCart:0
        },   
        {
            name: "Maíz Gramolino",
            etiqueta: "gramolino",
            precio: 2.08,
            inCart:0
        },  
        {
            name: "Mote Gramolino",
            etiqueta: "gramolino",
            precio: 1.70,
            inCart:0
        },  
        {
            name: "Quinua Gramolino",
            etiqueta: "gramolino",
            precio: 2.08,
            inCart:0
        },  
           //Cereales
           {
            name: "Avena del Sur",
            etiqueta: "avena",
            precio: 0.76,
            inCart:0
        },   
        {
            name: "Avena Quaker",
            etiqueta: "quaker",
            precio: 1.15,
            inCart:0
        },   
        {
            name: "Cereal Integral Trix",
            etiqueta: "trix",
            precio: 7.27,
            inCart:0
        },   
        {
            name: "Cereales Integral 230gr",
            etiqueta: "trix",
            precio: 4.11,
            inCart:0
        }, 
        {
            name: "Chocapic Nestle",
            etiqueta: "nestle",
            precio: 3.15,
            inCart:0
        },    
        {
            name: "Avena Orgánica",
            etiqueta: "avena",
            precio: 5.20,
            inCart:0
        }, 
        {
            name: "",
            etiqueta: "",
            precio: 2.17,
            inCart:0
        },    
        //Embutidos
        {
            name: "Chorizo Fritz",
            etiqueta: "fritz",
            precio: 3.18,
            inCart:0
        }, 
        {
            name: "Jamón Light",
            etiqueta: "fritz",
            precio: 4.72,
            inCart:0
        },   
        {
            name: "Tocino Ahumado",
            etiqueta: "juris",
            precio: 6.04,
            inCart:0
        },  
        //Panadería
        {
            name: "Mezcla para Pancakes",
            etiqueta: "quinua",
            precio: 3.62,
            inCart:0
        },   
        {
            name: "Mezcla Brownies",
            etiqueta: "cacao",
            precio: 6.72,
            inCart:0
        }, 
        {
            name: "Mezcla para Pastel de Chocolate",
            etiqueta: "cacao",
            precio: 6.72,
            inCart:0
        },  
        {
            name: "Nestle Galleta Coco",
            etiqueta: "nestle",
            precio: 3.20,
            inCart:0
        },    
        //Bebidas Calientes
        {
            name: "Té Hornimans Toronjil",
            etiqueta: "hornimans",
            precio: 1.08,
            inCart:0
        },    
        {
            name: "Té Hornimans Menta",
            etiqueta: "hornimans",
            precio: 1.21,
            inCart:0
        },   
        {
            name: "Té Hornimans Cedrón",
            etiqueta: "hornimans",
            precio: 1.20,
            inCart:0
        }, 
        {
            name: "Té Toronjil Natures",
            etiqueta: "org natures",
            precio: 1.01,
            inCart:0
        },  
        //Congelados
        {
            name: "Helado de Chocolate",
            etiqueta: "cacao",
            precio: 11.20,
            inCart:0
        }, 
        {
            name: "Helado Cremoso",
            etiqueta: "garden",
            precio: 4.46,
            inCart:0
        },    
        {
            name: "Helado Green Garden",
            etiqueta: "garden",
            precio: 5.62,
            inCart:0
        },     
        {
            name: "Helado Green Garden Chocolate",
            etiqueta: "garden",
            precio: 4.46,
            inCart:0
        },    
        //Frutas - Flores - Vegetales
        {
            name: "Aguacate",
            etiqueta: "aguacate",
            precio: 0.63,
            inCart:0
        },   
        {
            name: "Champiñón Rebanado",
            etiqueta: "green garden",
            precio: 1.21,
            inCart:0
        },  
        {
            name: "Kiwi ",
            etiqueta: "kiwi",
            precio: 2.31,
            inCart:0
        },    
        {
            name: "Mango 3 Unidades",
            etiqueta: "mango",
            precio: 1.30,
            inCart:0
        },  
        {
            name: "Megacanasta",
            etiqueta: "megacanasta",
            precio: 84.99,
            inCart:0
        },     
        {
            name: "Zapallo Cortado",
            etiqueta: "green garden",
            precio: 1.63,
            inCart:0
        },   
        // Salsas 
        {
            name: "Mayonesa Maggi",
            etiqueta: "maggi",
            precio: 3.44,
            inCart:0
        },  
        {
            name: "Mayonesa Maggi 400gr",
            etiqueta: "maggi",
            precio: 23.15,
            inCart:0
        },  
        {
            name: "Salsa de Soya",
            etiqueta: "gustadina",
            precio: 0.74,
            inCart:0
        },    
        {
            name: "Sopa de Pollo Fideos",
            etiqueta: "maggi",
            precio: 0.87,
            inCart:0
        },   
        {
            name: "Sopa Crema de Choclo",
            etiqueta: "maggi",
            precio: 1.35,
            inCart:0
        }, 
        //Bebidas Frías
        {
            name: "Coca Cola",
            etiqueta: "coca cola",
            precio: 2.06,
            inCart:0
        },  
        {
            name: "Frutaris Manzana",
            etiqueta: "frutaris",
            precio: 0.75,
            inCart:0
        },   
        {
            name: "Fuze Tea",
            etiqueta: "fuze",
            precio: 1.06,
            inCart:0
        },  
        {
            name: "Néctar Natura",
            etiqueta: "natura",
            precio: 2.66,
            inCart:0
        },    
        //Conservas y Enlatados
        {
            name: "Atún en Lomitos",
            etiqueta: "real",
            precio: 1.22,
            inCart:0
        },    
        {
            name: "Leche Condensada",
            etiqueta: "nestle",
            precio: 4.17,
            inCart:0
        },     
        {
            name: "Maiz Dulce",
            etiqueta: "gustadina 425gr",
            precio: 2.15,
            inCart:0
        },    
        {
            name: "Mermelada Facundo Piña",
            etiqueta: "facundo",
            precio: 1.91,
            inCart:0
        },   
        {
            name: "Palmito Snob",
            etiqueta: "snob",
            precio: 2.97,
            inCart:0
        },   
        // Hogar
        {
            name: "Platos Desechables",
            etiqueta: "plastiUtil",
            precio: 0.45,
            inCart:0
        },   
        {
            name: "Sorbetes de Café",
            etiqueta: "fupel",
            precio: 0.33,
            inCart:0
        }, 
        {
            name: "Vasos Desechables",
            etiqueta: "plastiUtil",
            precio: 0.83,
            inCart:0
        },  
        // Snacks
        {
            name: "Almendra Natures",
            etiqueta: "hear",
            precio: 5.42,
            inCart:0
        },  
        {
            name: "Doritos Desafío",
            etiqueta: "doritos",
            precio: 3.12,
            inCart:0
        },   
        {
            name: "Doritos Sabor Limón",
            etiqueta: "doritos",
            precio: 3.95,
            inCart:0
        },   
        {
            name: "Pasas sin Semilla",
            etiqueta: "del sur",
            precio: 1.04,
            inCart:0
        },    
        {
            name: "Tostitos Jalapenos",
            etiqueta: "tostitos",
            precio: 0.60,
            inCart:0
        },    
        //Alimentación de Bebé
        {
            name: "Cereal Infantil Frutilla",
            etiqueta: "nestum",
            precio: 4.54,
            inCart:0
        },    
        {
            name: "Cereal de Trigo&Quinua",
            etiqueta: "nestum",
            precio: 4.93,
            inCart:0
        },   
        {
            name: "Cerelac Trigo y Leche",
            etiqueta: "nestle",
            precio: 5.64,
            inCart:0
        },   
        //Higiene para bebés
        {
            name: "Aceite Johnsons",
            etiqueta: "johnsons",
            precio: 2.61,
            inCart:0
        },   
        {
            name: "Jabón Johnson",
            etiqueta: "johnsons",
            precio: 4.59,
            inCart:0
        },   
        {
            name: "Jabón Johnsons Avena y Aceite",
            etiqueta: "johnsons",
            precio: 6.54,
            inCart:0
        },   
        {
            name: "Shampoo Johnsons Manzanilla",
            etiqueta: "johnsons",
            precio: 5.65,
            inCart:0
        },   
        {
            name: "Vaselina Johnsons",
            etiqueta: "johnsons",
            precio: 3.81,
            inCart:0
        },   
        // Pañales para bebé
        {
            name: "Toallitas Húmedas Aloe",
            etiqueta: "johnsons",
            precio: 2.57,
            inCart:0
        },   
        {
            name: "Toallitas Húmedas Baby",
            etiqueta: "johnsons",
            precio: 2.05,
            inCart:0
        },  
        // Cuidado Capilar
        {
            name: "Acondicionador Sedal",
            etiqueta: "sedal",
            precio: 4.08,
            inCart:0
        },   
        {
            name: "Shampoo Control Caspa",
            etiqueta: "sedal",
            precio: 6.47,
            inCart:0
        },   
        {
            name: "Shampoo Dove Oleo",
            etiqueta: "dove",
            precio: 7.84,
            inCart:0
        },  
        {
            name: "Shampoo Head&Shoulders",
            etiqueta: "head&shoulders",
            precio: 8.90,
            inCart:0
        },  
        {
            name: "Shampoo Pantene",
            etiqueta: "pantene",
            precio: 8.57,
            inCart:0
        },     
        {
            name: "Shampoo Sedal",
            etiqueta: "sedal",
            precio: 4.77,
            inCart:0
        },   
        //Higiene Íntima
        {
            name: "Protector Carefree",
            etiqueta: "carefree",
            precio: 1.74,
            inCart:0
        },
        {
            name: "Protector Diario x150",
            etiqueta: "carefree",
            precio: 7.61,
            inCart:0
        },
        {
            name: "Protectoras Nosotras  x150",                                 
            etiqueta: "nosotros",
            precio: 10.03,
            inCart:0
        },
        {
            name: "Toallas Higiénicas Nosotras",
            etiqueta: "nosotras",
            precio: 2.04,
            inCart:0
        },
        {
            name: "Toallas Stayfree",
            etiqueta: "",
            precio: 4.77,
            inCart:0
        },
        //Cuidado Corporal
        {
            name: "Crema Lubriderm",
            etiqueta: "lubriderm",
            precio: 8.16,
            inCart:0
        },
        {
            name: "Jabon Lq Isabella",
            etiqueta: "isabela",
            precio: 2.48,
            inCart:0
        },
        {
            name: "Jabón Líquido Misty",
            etiqueta: "misty",
            precio: 5.25,
            inCart:0
        },
        {
            name: "Protector Solar Sundown",
            etiqueta: "sundown",
            precio: 17.62,
            inCart:0
        },
        //Salud Bucal
        {
            name: "Cepilo Dental Colgate Twister",
            etiqueta: "colgate",
            precio: 3.23,
            inCart:0
        },
        {
            name: "Crema Dental Colgate Menta",
            etiqueta: "colgate",
            precio: 1.45,
            inCart:0
        },
        {
            name: "Crema Dental Triple Acción",
            etiqueta: "colgate",
            precio: 1.80,
            inCart:0
        },
        {
            name: "Enjuague Bucal Listerine",
            etiqueta: "listerine",
            precio: 8.26,
            inCart:0
        },
        {
            name: "Enjuague Bucal Listerine Fresh",
            etiqueta: "listerine",
            precio: 6.76,
            inCart:0
        },
        {
            name: "Enjuague Bucal Listerine Menta Verde",
            etiqueta: "listerine",
            precio: 9.10,
            inCart:0
        },
        //Cuidado Facial
        {
            name: " Protector Solar fps50",
            etiqueta: "sundown",
            precio: 16.32,
            inCart:0
        },
        {
            name: "Protector Sundown Kids fps60",
            etiqueta: "sundown",
            precio: 17.62,
            inCart:0
        },
        {
            name: "Protector Solar Sundown fps60 ",
            etiqueta: "",
            precio: 20.54,
            inCart:0
        },
        //Salud Sexual
        {
            name: "Preservativo Control Adapta",
            etiqueta: "control",
            precio: 2.12,
            inCart:0
        },
        {
            name: "Preservativo Nature X3",
            etiqueta: "control",
            precio: 2.12,
            inCart:0
        },
        {
            name: "Preservativo Retardante",
            etiqueta: "control",
            precio: 2.12,
            inCart:0
        },
        {
            name: "Preservativo Duo",
            etiqueta: "duo",
            precio: 2.60,
            inCart:0
        },
        //Desodorantes Corporales
        {
            name: "Desodorante en Polvo",
            etiqueta: "nodorex",
            precio: 3.63,
            inCart:0
        },
        {
            name: "Desodorante Lady Speed",
            etiqueta: "speed",
            precio: 3.78,
            inCart:0
        },
        {
            name: "Desodorante Speed Stick Pro",
            etiqueta: "speed",
            precio: 4.55,
            inCart:0
        },
        {
            name: "Desodorante Men Speed Xtreme",
            etiqueta: "speed",
            precio: 3.78,
            inCart:0
        },
        {
            name: "Desodorante Rollon Dove",
            etiqueta: "dove",
            precio: 2.80,
            inCart:0
        },
        {
            name: "Desodorante Calvin-Klein",
            etiqueta: "Calvin-Klein",
            precio: 5.80,
            inCart:0
        },
        // Lavavajillas
        {
            name: "Lava con Extracto de Avena",
            etiqueta: "lava",
            precio: 3.00,
            inCart:0
        },
        {
            name: "Lava Crema Limon",
            etiqueta: "lava",
            precio: 0.94,
            inCart:0
        },
        {
            name: "Lavavajillas Axión",
            etiqueta: "axion",
            precio: 1.80,
            inCart:0
        },
        // Desinfectante y Cloros
        {
            name: "Cloro Estrella",
            etiqueta: "cloro",
            precio: 1.28,
            inCart:0
        },
        {
            name: "Kalipto Original CC",
            etiqueta: "kalipto",
            precio: 2.40,
            inCart:0
        },
        {
            name: "Kalipto Original Galón",
            etiqueta: "",
            precio: 9.62,
            inCart:0
        },
        {
            name: "Limpiador Fabuloso",
            etiqueta: "fabuloso",
            precio: 1.56,
            inCart:0
        },
        {
            name: "Limpiador Lavanda",
            etiqueta: "fabuloso",
            precio: 1.56,
            inCart:0
        },
        {
            name: "Limpiador Fragancia Manzana",
            etiqueta: "fabuloso",
            precio: 2.54,
            inCart:0
        },
        //Implementos de Limpieza
        {
            name: "Cepillo de Ropa Estrella",
            etiqueta: "plancha",
            precio: 0.48,
            inCart:0
        },
        {
            name: "Escoba Standar",
            etiqueta: "standar",
            precio: 1.12,
            inCart:0
        },
        {
            name: "Esponja Tejida",
            etiqueta: "estrella",
            precio: 1.55,
            inCart:0
        },
        {
            name: "Funda de Basura Industrial",
            etiqueta: "industrial",
            precio: 0.76,
            inCart:0
        },
        {
            name: "Paño Húmedo Absorvente",
            etiqueta: "estrella",
            precio: 3.50,
            inCart:0
        },
        //Ambientadores
        {
            name: "Airwick Ambientador",
            etiqueta: "air wick",
            precio: 15.73,
            inCart:0
        },
        {
            name: "Glade Toque Lavanda",
            etiqueta: "glade",
            precio: 7.58,
            inCart:0
        },
        //Aluminio Film y Conservación
        {
            name: "Diamond Papel Aluminio",
            etiqueta: "diamond",
            precio: 6.69,
            inCart:0
        },
        {
            name: "Papel Aluminio",
            etiqueta: "diamond",
            precio: 2.35,
            inCart:0
        },
        {
            name: "Papel Aluminio",
            etiqueta: "goldery",
            precio: 32.71,
            inCart:0
        },
        //Detergente
        {
            name: "Deja Polvo Antibacterial",
            etiqueta: "deja",
            precio: 1.16,
            inCart:0
        },
        {
            name: "Detergente Deja Floral",
            etiqueta: "deja",
            precio: 4.37,
            inCart:0
        },
        {
            name: "Detergente Ultralav",
            etiqueta: "cierto",
            precio: 6.70,
            inCart:0
        },
        {
            name: "Detergente Ultralav 3L",
            etiqueta: "cierto",
            precio: 10.18,
            inCart:0
        },
        {
            name: "Detergente Surf ",
            etiqueta: "surf",
            precio: 3.41,
            inCart:0
        },
        {
            name: "Woolite Detergente Líquido",
            etiqueta: "woolite",
            precio: 12.20,
            inCart:0
        },
        {
            name: "Woolite Detergente 2000ml",
            etiqueta: "woolite",
            precio: 9.12,
            inCart:0
        },
        //Papel
        {
            name: "Papel Higiénico Familia",
            etiqueta: "familia",
            precio: 11.49,
            inCart:0
        },
        {
            name: "Papel Higiénico Rosal",
            etiqueta: "rosal",
            precio: 9.58,
            inCart:0
        },
        {
            name: "Servilletas Familia",
            etiqueta: "familia",
            precio: 2.15,
            inCart:0
        },
        {
            name: "Toalla de Cocina Duramax",
            etiqueta: "scott",
            precio: 6.77,
            inCart:0
        },
        {
            name: "Toalla Manos Sanitisu",
            etiqueta: "sanitisu",
            precio: 1.90,
            inCart:0
        },
        {
            name: "Toalla Sanitisu Zfold",
            etiqueta: "sanitisu",
            precio: 2.35,
            inCart:0
        },
        //Alimentos Mascotas
        {
            name: "Procan Adultos",
            etiqueta: "procan",
            precio: 4.47,
            inCart:0
        },
        {
            name: "Procan Adultos 2kg",
            etiqueta: "procan",
            precio: 4.22,
            inCart:0
        },
        {
            name: "Procan Adultos 4kg ",
            etiqueta: "procan",
            precio: 8.19,
            inCart:0
        },
        //Conservas Gourmet
        {
            name: "Aceitunas Verdes con Pimiento",
            etiqueta: "snob",
            precio: 3.51,
            inCart:0
        },
        {
            name: "Choclitos Gr Baby Corn",
            etiqueta: "snob",
            precio: 3.91,
            inCart:0
        },
        {
            name: "Pepinillo Entero",
            etiqueta: "snob",
            precio: 3.91,
            inCart:0
        },
]
    for(let i=0; i< carts.length; i++){
        carts[i].addEventListener('click', () =>{
            cartNumbers(products[i]);
            totalCost(products[i])
        })
    }
                                    
    function onLoadCartNumbers(){
        let productNumbers = localStorage.getItem('cartNumbers');
        
        if(productNumbers){
            document.querySelector('.cart span').textContent=  productNumbers;
        }
    }


    function cartNumbers(product){
        
        let productNumbers = localStorage.getItem('cartNumbers');
            
        productNumbers= parseFloat(productNumbers);

        if(productNumbers){
            localStorage.setItem('cartNumbers',productNumbers + 1);
            document.querySelector('.cart span').textContent=  productNumbers + 1;
        }else{
            localStorage.setItem('cartNumbers',1);
            document.querySelector('.cart span').textContent=1;
        }
        setItems(product);
}
    function setItems(product){
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        if(cartItems != null){

            if(cartItems[product.etiqueta] == undefined){
                cartItems= {
                    ...cartItems,
                    [product.etiqueta]:product
                }
            }
                cartItems[product.etiqueta].inCart +=1;
            }else{
                product.inCart=1;
                cartItems={
                    [product.etiqueta]:product
            }
        }
        localStorage.setItem("productsInCart", JSON.stringify
        (cartItems));
    }
//Función para obtener el precio del producto
function totalCost(product){
    //console.log("El precio del producto es" , product.precio);
    let cartCost = localStorage.getItem('totalCost');

    console.log(" My cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseFloat(cartCost);// parseFloat x  cambio parseInt 
        localStorage.setItem("totalCost", cartCost + product.precio);
    }else {
        localStorage.setItem("totalCost" ,product.precio);
    }
        
    }
    
    

    //Función del cart                                       
    function displayCart (){
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector
        (".products");
        let cartCost = localStorage.getItem('totalCost');
        console.log(cartItems);
        if(cartItems && productContainer){
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item =>{
                productContainer.innerHTML +=
                `
                <div class="products">
               
               <!--
               <img src="../Supermercado/imgSupermercado/IMG_Aceites/aceiteFavorita/${item.etiqueta}.jpg">
               --> 
                    <span>${item.name}</span>
                </div>
                <div class="precio">$${item.precio},00</div>
                <div class="cantidad">                                 
                
                <span> ${item.inCart}</span>
               
                </div>
                <div class="total">
                $${item.inCart * item.precio}

                `;
            });
            productContainer.innerHTML +=`
            <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Total
                </h4>
                <h4 class="basketTotal">
                $${totalCost= Math.round(cartCost * 100) / 100}
                </h4>
            `
        }
}
                                     


onLoadCartNumbers();
displayCart();
})
             