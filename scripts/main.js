import {DockList} from "./docks.js"
import { CargoShipList } from "./cargos.js"
import { HaulerList } from "./haulers.js"

let parentHTMLcontainer = document.getElementById("container")

parentHTMLcontainer.innerHTML = `
${DockList()}
${CargoShipList()}
${HaulerList()}
`