import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get("secret")
  const slug = searchParams.get("slug")

  // Controleer de geheime sleutel
  if (secret !== process.env.SANITY_API_READ_TOKEN) {
    return new Response("Invalid token", { status: 401 })
  }

  // Schakel draft mode in
  (await draftMode()).enable()

  // Redirect naar de pagina
  redirect(slug ? `/${slug}` : "/")
}

