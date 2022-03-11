import MapaGardenias from "@dmpbxo/mapa-gardenias"

// Instancia
const mapaGardenias = new MapaGardenias({
    token: "pk.eyJ1IjoiZG1wYiIsImEiOiJjbDBobHJ0eHQwOXN4M2ltbmoycm5qMzh5In0.hOuywcDqCkpcuYzEDn0nbA",
    style: "mapbox://styles/dmpb/cl0key28d002q15muz3944tt7",
    container: "map",
    onLote: (result: any) => {
        console.log(result)
    },
})
