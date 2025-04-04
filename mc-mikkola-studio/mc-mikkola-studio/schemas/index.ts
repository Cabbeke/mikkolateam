import type { SchemaTypeDefinition } from "sanity"
import article from "./article"
import pilot from "./pilot"
import sponsor from "./sponsor"
import event from "./event"

export const schemaTypes: SchemaTypeDefinition[] = [article, pilot, sponsor, event]