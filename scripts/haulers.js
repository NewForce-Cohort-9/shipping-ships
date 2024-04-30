import { getHaulers, getCargoShips } from "./database.js"

const haulers = getHaulers()
const cargoShips = getCargoShips()
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
            if(itemClicked.dataset.type === "hauler")
            {
                // Get the id of the hauler clicked
                const haulerId = itemClicked.dataset.id
                
                // Start a counter variable at 0
                let haulerCounter = 0   
                // Iterate all of the shipping ships (cargo ships)
                for(const singleCargoShip of cargoShips){
                    // Does the haulerId foreign key match the id?
                    if(parseInt(haulerId) === singleCargoShip.haulerId){
                        // Increase the counter by 1
                       haulerCounter++
                    }
                }                    
                return window.alert(`This hauler has ${haulerCounter} cargo ships`)
            }
    }
)

export const HaulerList = () => {

    let haulersHTML = "<ul>"

    for (const singleHauler of haulers) {

        // Convert each dock object to an <li> and append to the haulersHTML string
        haulersHTML += `<li data-type="hauler" data-id="${singleHauler.id}">${singleHauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}