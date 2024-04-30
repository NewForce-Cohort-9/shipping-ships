import { getCargoShips, getHaulers } from "./database.js"

const cargoShips = getCargoShips()
const haulers = getHaulers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
            if(itemClicked.dataset.type = "cargoship"){

                // Get the haulerId value of the shipping ship clicked
                const haulerId = itemClicked.dataset.cargoshipforeignkey
                const cargoShipName = itemClicked.dataset.name
                // Define a default object for the found hauler
                let haulingShip = { name: "Incorrect" }
                
                // Iterate the array of hauler objects
                for(const singleHauler of haulers){
                    // Does the haulerId foreign key match the id of the current hauler?
                    if(parseInt(haulerId) === singleHauler.id){
                        // Reassign the value of `haulingShip` to the current hauler
                        haulingShip = singleHauler.name
                    }                    
                    
                    // Show an alert to the user with this format...
                    // Palais Royal is being hauled by Seawise Giant
                    window.alert(`${cargoShipName} is being hauled by ${haulingShip}`)
                }
            }
    }
)

export const CargoShipList = () => {

    let cargoShipsHTML = "<ul>"

    for (const singleCargoShip of cargoShips) {

        // Convert each dock object to an <li> and append to the cargoShipsHTML string
        cargoShipsHTML += `<li data-type="cargoship" data-name="${singleCargoShip.name}" data-cargoshipforeignkey="${singleCargoShip.haulerId}">${singleCargoShip.name}</li>`
    }

    cargoShipsHTML += "</ul>"

    return cargoShipsHTML
}