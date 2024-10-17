import { getCookies, setCookie } from "$std/http/cookie.ts";

import Selection from "../components/Selection.tsx";
import Room from "../components/Room.tsx";

import { Handlers, PageProps } from "$fresh/server.ts";
import { DialogueProps } from "../components/Dialogue.tsx";
import { Chat, Dialogue } from "../dialogue.ts";

const dialoguesMemory: Map<string, Dialogue[]> = new Map();

type role = "system" | "user" | "assistant";
type lax = "Lax";

export const handler: Handlers = {
  GET(req, ctx) {
    const cookie = getCookies(req.headers);

    let dialogues: DialogueProps[] = [];
    if (cookie.session && dialoguesMemory.has(cookie.session)) {
      dialogues = dialoguesMemory.get(cookie.session) as DialogueProps[];
    }

    return ctx.render(dialogues);
  },
  async POST(req, ctx) {
    const cookie = getCookies(req.headers);

    let session = cookie.session;

    if (!session) session = crypto.randomUUID();
    if (!dialoguesMemory.has(session)) dialoguesMemory.set(session, []);

    const dialogues = dialoguesMemory.get(session) as Dialogue[];

    const form = await req.formData();
    const userMessages = new Dialogue(
      form.get("message")?.toString() || "empty user input",
      false,
    );
    dialogues?.push(userMessages);

    await Chat(dialogues);

    const res = await ctx.render(dialogues);
    if (!cookie.session) {
      setCookie(res.headers, {
        name: "session",
        value: session,
        maxAge: 120,
        sameSite: "Lax" as lax,
        domain: new URL(req.url).hostname,
        path: "/",
        secure: true,
      });
    }
    return res;
  },
};

export default function Home({ data }: PageProps<DialogueProps[]>) {
  return (
    <div class="grid min-h-screen w-full grid-cols-[280px_1fr]">
      <div class="flex flex-col border-r p-4">
        <Selection />
      </div>
      <div class="flex flex-col">
        <Room dialogues={data} />
      </div>
    </div>
  );
}
