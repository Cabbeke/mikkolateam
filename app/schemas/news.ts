const newsSchema = {
    name: "news",
    title: "Nieuws",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Titel",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "publishedAt",
        title: "Publicatiedatum",
        type: "datetime",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "mainImage",
        title: "Hoofdafbeelding",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "excerpt",
        title: "Samenvatting",
        type: "text",
        rows: 3,
      },
      {
        name: "body",
        title: "Inhoud",
        type: "array",
        of: [
          {
            type: "block",
          },
          {
            type: "image",
            options: {
              hotspot: true,
            },
          },
        ],
      },
    ],
    preview: {
      select: {
        title: "title",
        media: "mainImage",
      },
    },
  }
  
export default newsSchema;
  
  