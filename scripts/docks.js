import { getDocks, getHaulers } from "./database.js"

const docks = getDocks()
const haulers = getHaulers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a dock list item clicked?
        if(itemClicked.dataset.type === "dock")
        {
            // Get the id of the hauler clicked
            const dockId = itemClicked.dataset.id
            
            let haulingShip = { name: "Incorrect" }
            const dockLocation = itemClicked.dataset.location 
            // Iterate the array of hauler objects
            for(const singleHauler of haulers){
                // Does the haulerId foreign key match the id of the current hauler?
                if(parseInt(dockId) === singleHauler.dockId){
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = singleHauler.name
                }                     
                return window.alert(`The ${dockLocation} is currently unloading ${singleHauler.name}`)
            }
        /*
            Your job is to design an algorithm and implement it
            The Shanghai, China dock is currently unloading Boaty McBoatface
        */
    }
}
)

export const DockList = () => {

    let docksHTML = "<ul>"

    for (const singleDock of docks) {

        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-type="dock" data-id="${singleDock.id}" data-location="${singleDock.location}">${singleDock.location}</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}