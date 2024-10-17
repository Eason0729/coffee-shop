export interface DialogueProps {
  side: "left" | "right";
  name: string;
  message: string;
}

export default function Dialogue({ side, message, name }: DialogueProps) {
  const head = (
    <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 border">
      <img
        class="aspect-square h-full w-full"
        alt="User Avatar"
        src="/placeholder-user.jpg"
      />
    </span>
  );
  const body = (
    <div
      class={`flex-1 rounded-md p-3${
        side == "left" ? " text-white bg-slate-700" : " bg-orange-100"
      }`}
    >
      <div class="font-medium">{name}</div>
      <div class="text-sm">
        {message}
      </div>
    </div>
  );
  return (
    <div
      class={`flex items-start gap-4${side == "left" ? " justify-end" : ""}`}
    >
      {side == "left" ? head : body}
      {side == "left" ? body : head}
    </div>
  );
}
