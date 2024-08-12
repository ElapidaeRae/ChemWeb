# What in the world is SMILES?

---
SMILES or the Simplified Molecular Input Line Entry System is a system for representing the skeletal structure of a 
chemical compound in a way that is easy for both computers and people to understand.

SMILES strings are designed to be human-readable and as such can be used to represent the structure of a molecule in a 
way that is independent of the language of the user. This makes SMILES a useful tool for chemists and other scientists 
who need to communicate about chemical structures.

SMILES strings are generated algorithmically from the structure of a molecule, and as a part of my website, I need to 
figure out how that's done.

As an example, the SMILES string for Guanine, a nucleobase found in DNA, is `C1=NC2=C(N1)C(=O)N=C(N2)N`.

## How are SMILES strings generated?

Before I can generate the SMILES string, I first need to know the rules at play.

### The rules of SMILES

Bond types are represented by the following symbols:
- Single bond: `-`
- Double bond: `=`
- Triple bond: `#`
- Aromatic bond: `:`
- Any bond: `~`
- No bond: `.`

Atoms are represented by their atomic symbol. For example, carbon is represented by `C`, oxygen by `O`, and nitrogen by `N`. 
All atoms in the organic subset of the periodic table are represented by their atomic symbol, except hydrogen, which is usually omitted.
Atoms outside this subset are represented by square brackets `[]` containing the atomic symbol, like `[Os]` for osmium.

Branches are represented by parentheses `()` and are used to indicate that a group of atoms is attached to a central atom. 
For example, the SMILES string for acetic acid, `CC(=O)O`, indicates that the second carbon atom is attached to both the 
oxygen atom in the brackets with a double bond and the oxygen atom outside the brackets with a single bond.

Rings are written by enclosing the atoms in the ring with numbers. For example, the SMILES string for cyclohexane, `C1CCCCC1`,
indicates that the six carbon atoms are arranged in a ring. The numbers are used to indicate which atoms are connected to each other.
The numbers are not particularly important, not needing to have an order or be unique, simply being used to demarcate the ring.

Aromatic rings are represented by lowercase letters. For example, the SMILES string for benzene, `c1ccccc1`, indicates that
the six carbon atoms are arranged in a ring with alternating single and double bonds. In the case of something like naphthalene,
the SMILES string could be `c1ccc2ccccc2c1`. In the case a chemical such as biphenyl, the SMILES string could be `c1ccccc1-c2ccccc2`
as the two rings are connected by a single bond unlike naphthalene.

Isotope information is represented by a number before the atomic symbol. For example, the SMILES string for deuterium, `D`, is `[2H]`.

Charge information can be represented by a number after the atomic symbol. For example, an aluminum ion
Alternatively, the charge can be represented by a repeated symbol. For example an iron(III) ion, `Fe3+`, can be represented as `[Fe+++]`.

### Generating the SMILES string


# What am I doing this for?

I'm doing this because I want to be able to generate SMILES strings for molecules in my website. This will allow users to
search for molecules by their SMILES string, and will also allow me to generate images of molecules from their SMILES string.

Then I realised that SMARTS strings are a thing, and they are far more relevant to searching for molecules than SMILES strings
as they allow for the specification of substructures.