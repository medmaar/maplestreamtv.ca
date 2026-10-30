import assert from "node:assert/strict";
import test from "node:test";
import { GET, runtime } from "../src/app/chat/wa/route.ts";

test("WhatsApp route is included in the Cloudflare-compatible edge build", () => {
  assert.equal(runtime, "edge");
});

for (const [message, expected] of [
  [null, "Hi MapleStreamTV!"],
  ["Hi MapleStreamTV, I'd like the 12 Months plan for 3 devices at $135.", "Hi MapleStreamTV! I'd like the 12 Months plan for 3 devices at $135."],
  ["Bonjour, je voudrais un essai gratuit.", "Hi MapleStreamTV! Bonjour, je voudrais un essai gratuit."],
]) {
  test(`WhatsApp handoff preserves the message: ${message ?? "default greeting"}`, async () => {
    const requestUrl = new URL("https://maplestreamtv.ca/chat/wa");
    if (message !== null) requestUrl.searchParams.set("msg", message);
    const response = await GET(new Request(requestUrl));
    assert.equal(response.status, 302);
    const target = new URL(response.headers.get("location"));
    assert.equal(target.protocol, "https:");
    assert.equal(target.hostname, "wa.me");
    assert.match(target.pathname, /^\/\d+$/);
    assert.equal(target.searchParams.get("text"), expected);
    // Next.js must be able to modify response headers in its edge adapter.
    response.headers.set("x-adapter-check", "mutable");
    response.headers.delete("x-adapter-check");
  });
}
