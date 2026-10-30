import { onRequestGet } from "../../../../functions/chat/wa.js";

export const runtime = "edge";

// Include the existing Pages handler in Next.js and next-on-pages builds too.
export async function GET(request: Request) {
  const response = await onRequestGet({ request });
  // Response.redirect() has immutable headers; Next's edge adapter edits them.
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}
