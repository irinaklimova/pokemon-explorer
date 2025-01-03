export interface Entity {
    name: string
    url: string
}

interface Ability {
    ability: Entity
    is_hidden: boolean
    slot: number
}

interface GameIndex {
    game_index: number
    version: Entity
}

interface VersionGroup {
    level_learned_at: number
    move_learn_method: Entity,
    version_group: Entity
}
interface Move {
    move: Entity,
    version_group_details: VersionGroup[]
}

interface Stat {
    base_stat: number,
    effort: number,
    stat: Entity
}

interface Sprite {
    front_default: string
    front_shiny: string
    front_female: string
    front_shiny_female: string
    back_default: string
    back_shiny: string
    back_female: string
    back_shiny_female: string
    other: {
        dream_world: {
            front_default: string
        }
    }
}

interface HeldItem {
    item: object
    version_details: object
}

interface Type {
    slot: number,
    type: Entity
}

export interface Pokemon {
    abilities: Ability[]
    base_experience: number
    cries: {
        latest: string
        legacy: string
    }
    forms: Entity[]
    game_indices: GameIndex[]
    height: number
    held_items: HeldItem[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Move[]
    name: string
    order: number
    past_abilities: []
    past_types: []
    species: Entity,
    sprites: Sprite
    stats: Stat[]
    types: Type[]
    weight: number
}
