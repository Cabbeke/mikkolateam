import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "default",
  title: "MC MIKKOLA CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0u29u9fd",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

