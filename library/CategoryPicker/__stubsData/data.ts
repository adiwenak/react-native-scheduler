import { Category, CategorySelection, Colours } from "../../shared"

export const cat1: CategorySelection = {
    id: "1",
    name: "Ben Af",
    colour: Colours.Cobalt,
    isSelected: false
}

export const cat2: CategorySelection = {
    id: "2",
    name: "Cardano",
    colour: Colours.Cardinal,
    isSelected: false
}

export const cat3: CategorySelection = {
    id: "3",
    name: "Zester",
    colour: Colours.Zest,
    isSelected: false
}

export const cat4: CategorySelection = {
    id: "4",
    name: "Green Lantern",
    colour: Colours.LaPalma,
    isSelected: false
}

export const userSelectionCollection: CategorySelection[] = [
    cat1,
    cat2,
    cat3,
    cat4
]
