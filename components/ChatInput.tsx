export default function ChatInput() {
  return (
    <form class="relative" method="POST" action="/" f-partial="/">
      <textarea
        class="resize-none flex text-sm min-h-[48px] w-full rounded-2xl border border-neutral-400 p-4 pr-16 shadow-sm"
        name="message"
        placeholder="Type your message..."
      >
      </textarea>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground h-10 w-10 absolute right-3 top-3"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
        >
          <path d="m22 2-7 20-4-9-9-4Z"></path>
          <path d="M22 2 11 13"></path>
        </svg>
        <span class="sr-only">Send</span>
      </button>
    </form>
  );
}
