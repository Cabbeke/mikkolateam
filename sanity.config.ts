import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "default",
  title: "MC MIKKOLA CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "dXTTN1MR3mwnTbqkclsBtYAI",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

