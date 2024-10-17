import { Partial } from "$fresh/runtime.ts";
import ChatInput from "./ChatInput.tsx";
import Dialogue, { DialogueProps } from "./Dialogue.tsx";

export default function Room({ dialogues }: { dialogues: DialogueProps[] }) {
  return (
    <>
      <div class="flex-1 overflow-auto p-4">
        <div class="grid gap-4" f-f-client-nav>
          <Partial name="dialogue" mode="append">
            <Dialogue
              side="left"
              name="Shop Staff"
              message="here is the start of chat! Try to get flag by asking Bot questions."
            >
            </Dialogue>
            {dialogues.map(({
              side,
              name,
              message,
            }) => (
              <Dialogue
                side={side}
                name={name}
                message={message}
              >
              </Dialogue>
            ))}
          </Partial>
        </div>
      </div>
      <div class="sticky bottom-0 bg-background p-4">
        <ChatInput />
      </div>
    </>
  );
}
