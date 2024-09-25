import type { RDKitModule } from '@rdkit/rdkit';

declare global {
	interface StructureInput {
		RDKit: RDKitModule
	}
}

