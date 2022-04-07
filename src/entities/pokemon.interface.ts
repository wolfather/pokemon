export interface Abilities {
    ability: NameUrl;
    is_hidden: boolean;
    slot: number;
}

export interface NameUrl {
    name: string;
    url: string;
}
export interface GameIndex {
    game_index: number;
    version: NameUrl;
}

export interface VersionDetails {
    rarity: number;
    version: NameUrl;
}
export interface HeldItem {
    item: NameUrl;
    version_details: VersionDetails[];
}

export interface VersionGroupDetails {
    level_learned_at: number;
    move_learn_method: NameUrl;
    version_group: NameUrl;
}
export interface Move {
    move: NameUrl;
    version_group_details: VersionGroupDetails[];
}

export interface Stats {
    base_stat: number;
    effort: number;
    stat: NameUrl;
}

export interface Types {
    slot: number;
    type: NameUrl;
}

export interface Pokemon {
    abilities: Abilities[];
    base_experience: number;
    forms: NameUrl[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any[];
    species: NameUrl;
    stats: Stats[];
    types: Types[];
    weight: number;
    sprites: {
      back_default: string|null;
      back_female: string|null;
      back_shiny: string|null;
      back_shiny_female: string|null;
      front_default: string|null;
      front_female: string|null;
      front_shiny: string|null;
      front_shiny_female: string|null;
      other: {
        dream_world: {
          front_default: string|null;
          front_female: string|null;
        };
        home: {
          front_default: string|null;
          front_female: string|null;
          front_shiny: string|null;
          front_shiny_female: string|null;
        };
        'official-artwork': {
          front_default: string|null;
        };
      };
      versions: {
        'generation-i': {
          'red-blue': {
            back_default: string|null;
            back_gray: string|null;
            back_transparent: string|null;
            front_default: string|null;
            front_gray: string|null;
            front_transparent: string|null;
          };
          yellow: {
            back_default: string|null;
            back_gray: string|null;
            back_transparent: string|null;
            front_default: string|null;
            front_gray: string|null;
            front_transparent: string|null;
          };
        };
        'generation-ii': {
          crystal: {
            back_default: string|null;
            back_shiny: string|null;
            back_shiny_transparent: string|null;
            back_transparent: string|null;
            front_default: string|null;
            front_shiny: string|null;
            front_shiny_transparent: string|null;
            front_transparent: string|null;
          };
          gold: {
            back_default: string|null;
            back_shiny: string|null;
            front_default: string|null;
            front_shiny: string|null;
            front_transparent: string|null;
          };
          silver: {
            back_default: string|null;
            back_shiny: string|null;
            front_default: string|null;
            front_shiny: string|null;
            front_transparent: string|null;
          };
        };
        "generation-iii": {
          emerald: {
            front_default: string|null;
            front_shiny: string|null;
          },
          "firered-leafgreen": {
            back_default: string|null;
            back_shiny: string|null;
            front_default: string|null;
            front_shiny: string|null;
          },
          "ruby-sapphire": {
            back_default: string|null;
            back_shiny: string|null;
            front_default: string|null;
            front_shiny: string|null;
          }
        };
        "generation-iv": {
          "diamond-pearl": {
            back_default: string|null;
            back_female: string|null;
            back_shiny: string|null;
            back_shiny_female: string|null;
            front_default: string|null;
            front_female: string|null;
            front_shiny: string|null;
            front_shiny_female: string|null;
          },
          "heartgold-soulsilver": {
            back_default: string|null;
            back_female: string|null;
            back_shiny: string|null;
            back_shiny_female: string|null;
            front_default: string|null;
            front_female: string|null;
            front_shiny: string|null;
            front_shiny_female: string|null;
          };
          platinum: {
            back_default: string|null;
            back_female: string|null;
            back_shiny: string|null;
            back_shiny_female: string|null;
            front_default: string|null;
            front_female: string|null;
            front_shiny: string|null;
            front_shiny_female: string|null;
          };
        };
        "generation-v": {
          "black-white": {
            animated: {
              back_default: string|null;
              back_female: string|null;
              back_shiny: string|null;
              back_shiny_female: string|null;
              front_default: string|null;
              front_female: string|null;
              front_shiny: string|null;
              front_shiny_female: string|null;
            };
            back_default: string|null;
            back_female: string|null;
            back_shiny: string|null;
            back_shiny_female: string|null;
            front_default: string|null;
            front_female: string|null;
            front_shiny: string|null;
            front_shiny_female: string|null;
          }
        };
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default: string|null;
            front_female: string|null;
            front_shiny: string|null;
            front_shiny_female: string|null;
          },
          "x-y": {
            front_default: string|null;
            front_female: string|null;
            front_shiny: string|null;
            front_shiny_female: string|null;
          }
        },
        "generation-vii": {
          icons: {
            front_default: string|null;
            front_female: string|null;
          };
          "ultra-sun-ultra-moon": {
            front_default: string|null;
            front_female: string|null;
            front_shiny: string|null;
            front_shiny_female: string|null;
          };
        };
        "generation-viii": {
          icons: {
            front_default: string|null;
            front_female: string|null;
          };
        };
      }
    };
  }