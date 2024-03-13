export default interface ShopItem {
    name: string
    description: string
    cost: number
}

export interface TechnologyShopItem extends ShopItem {
    techLevel: number // Some items can have a range of tech levels (General equipment)
}