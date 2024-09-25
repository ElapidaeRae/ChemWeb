// Atom class
// The atom class is meant to represent an atom in a chemical structure graph



export declare type ElementLabel = 'H' | 'He' | 'Li' | 'Be' | 'B' | 'C' | 'N' | 'O' | 'F' | 'Ne' | 'Na' | 'Mg' | 'Al' | 'Si' | 'P' | 'S' | 'Cl' | 'Ar' | 'K' | 'Ca' | 'Sc' | 'Ti' | 'V' | 'Cr' | 'Mn' | 'Fe' | 'Co' | 'Ni' | 'Cu' | 'Zn' | 'Ga' | 'Ge' | 'As' | 'Se' | 'Br' | 'Kr' | 'Rb' | 'Sr' | 'Y' | 'Zr' | 'Nb' | 'Mo' | 'Tc' | 'Ru' | 'Rh' | 'Pd' | 'Ag' | 'Cd' | 'In' | 'Sn' | 'Sb' | 'Te' | 'I' | 'Xe' | 'Cs' | 'Ba' | 'La' | 'Ce' | 'Pr' | 'Nd' | 'Pm' | 'Sm' | 'Eu' | 'Gd' | 'Tb' | 'Dy' | 'Ho' | 'Er' | 'Tm' | 'Yb' | 'Lu' | 'Hf' | 'Ta' | 'W' | 'Re' | 'Os' | 'Ir' | 'Pt' | 'Au' | 'Hg' | 'Tl' | 'Pb' | 'Bi' | 'Po' | 'At' | 'Rn' | 'Fr' | 'Ra' | 'Ac' | 'Th' | 'Pa' | 'U' | 'Np' | 'Pu' | 'Am' | 'Cm' | 'Bk' | 'Cf' | 'Es' | 'Fm' | 'Md' | 'No' | 'Lr' | 'Rf' | 'Db' | 'Sg' | 'Bh' | 'Hs' | 'Mt' | 'Ds' | 'Rg' | 'Cn' | 'Nh' | 'Fl' | 'Mc' | 'Lv' | 'Ts' | 'Og';
export declare type ElementName = 'Hydrogen' | 'Helium' | 'Lithium' | 'Beryllium' | 'Boron' | 'Carbon' | 'Nitrogen' | 'Oxygen' | 'Fluorine' | 'Neon' | 'Sodium' | 'Magnesium' | 'Aluminium' | 'Silicon' | 'Phosphorus' | 'Sulfur' | 'Chlorine' | 'Argon' | 'Potassium' | 'Calcium' | 'Scandium' | 'Titanium' | 'Vanadium' | 'Chromium' | 'Manganese' | 'Iron' | 'Cobalt' | 'Nickel' | 'Copper' | 'Zinc' | 'Gallium' | 'Germanium' | 'Arsenic' | 'Selenium' | 'Bromine' | 'Krypton' | 'Rubidium' | 'Strontium' | 'Yttrium' | 'Zirconium' | 'Niobium' | 'Molybdenum' | 'Technetium' | 'Ruthenium' | 'Rhodium' | 'Palladium' | 'Silver' | 'Cadmium' | 'Indium' | 'Tin' | 'Antimony' | 'Tellurium' | 'Iodine' | 'Xenon' | 'Cesium' | 'Barium' | 'Lanthanum' | 'Cerium' | 'Praseodymium' | 'Neodymium' | 'Promethium' | 'Samarium' | 'Europium' | 'Gadolinium' | 'Terbium' | 'Dysprosium' | 'Holmium' | 'Erbium' | 'Thulium' | 'Ytterbium' | 'Lutetium' | 'Hafnium' | 'Tantalum' | 'Tungsten' | 'Rhenium' | 'Osmium' | 'Iridium' | 'Platinum' | 'Gold' | 'Mercury' | 'Thallium' | 'Lead' | 'Bismuth' | 'Polonium' | 'Astatine' | 'Radon' | 'Francium' | 'Radium' | 'Actinium' | 'Thorium' | 'Protactinium' | 'Uranium' | 'Neptunium' | 'Plutonium' | 'Americium' | 'Curium' | 'Berkelium' | 'Californium' | 'Einsteinium' | 'Fermium' | 'Mendelevium' | 'Nobelium' | 'Lawrencium' | 'Rutherfordium' | 'Dubnium' | 'Seaborgium' | 'Bohrium' | 'Hassium' | 'Meitnerium' | 'Darmstadtium' | 'Roentgenium' | 'Copernicium' | 'Nihonium' | 'Flerovium' | 'Moscovium' | 'Livermorium' | 'Tennessine' | 'Oganesson';
export declare type Period = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export declare type Group = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export interface Element {
    number: number;
    label: ElementLabel;
    period: Period;
    group: Group;
    name: ElementName;
    mass: number;
    leftH?: boolean;
}

export class Atom {
    // The atomic number of the atom
    number: number;
    // The element label of the atom
    label: ElementLabel;
    // The period of the atom
    period: Period;
    // The group of the atom
    group: Group;
    // The name of the atom
    name: ElementName;
    // The mass of the atom
    mass: number;
    // Whether the atom has a left hydrogen
    leftH?: boolean;

    // The constructor for the Atom class
    constructor(element: Element) {
        this.number = element.number;
        this.label = element.label;
        this.period = element.period;
        this.group = element.group;
        this.name = element.name;
        this.mass = element.mass;
        this.leftH = element.leftH;
    }
}