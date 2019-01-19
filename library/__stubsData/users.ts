import { UserSelection, User } from '../shared';
import { Colours } from '../shared/colour'

export const user1: UserSelection = {
    id: "1",
    name: "Ben Af",
    colourIndicator: Colours.Cobalt,
    isSelected: false
}

export const user2: UserSelection = {
    id: "2",
    name: "Cardano",
    colourIndicator: Colours.Cardinal,
    isSelected: false
}

export const user3: UserSelection = {
    id: "3",
    name: "Zester",
    colourIndicator: Colours.Zest,
    isSelected: false
}

export const user4: UserSelection = {
    id: "4",
    name: "Green Lantern",
    colourIndicator: Colours.LaPalma,
    isSelected: false
}

export const userSelectionCollection: UserSelection[] = [
    user1,
    user2,
    user3,
    user4
]

export const userCollections: User[] = [
    {id: "1", name: "Adam", colourIndicator: "blue"},
    {id: "2", name: "Adi", colourIndicator: "green"},
    {id: "3", name: "Bruno", colourIndicator: "red"},
    {id: "4", name: "George", colourIndicator: "pink"},
    {id: "5", name: "Chiro", colourIndicator: "black"},
    {id: "6", name: "Olivia", colourIndicator: "grey"}
]
