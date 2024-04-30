const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: 43.5 },
        { id: 2, location: "Busan, South Korea", volume: 21.6 },
        { id: 3, location: "Rotterdam, The Netherlands", volume: 14.35 },
        { id: 4, location: "Antwerp, Belgium", volume: 12.04 }
    ],
    haulers: [
        {
            id: 1,
            dockId: 1,
            loadingStatus: false,
            name: "Big"
        }
    ],
    cargoShips: [
        {
            id: 1,
            name: "Boat",
            haulerId: 1
        },
        {
            id: 2,
            name: "Another Boat",
            haulerId: 1
        },
        {
            id: 3,
            name: "And yet another Boat",
            haulerId: 1
        }
    ]
}

export const getDocks = () => {
    return database.docks.map(singleDock => ({...singleDock}))
}
export const getHaulers = () => {
    return database.haulers.map(singleHauler => ({...singleHauler}))
}
export const getCargoShips = () => {
    return database.cargoShips.map(singleCargoShip => ({...singleCargoShip}))
}