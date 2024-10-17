export default function Selection() {
  return (
    <>
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold">Active Users</h2>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 w-10">
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
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          <span class="sr-only">Add user</span>
        </button>
      </div>
      <div class="flex-1 overflow-auto">
        <div class="grid gap-2 py-4">
          <a
            class="flex items-center gap-3 rounded-md p-2"
            href="#"
            rel="ugc"
          >
            <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 border">
              <img
                class="aspect-square h-full w-full"
                alt="User Avatar"
                src="/placeholder-user.jpg"
              />
            </span>
            <div class="flex-1 truncate">
              <div class="font-medium">Coffee Shop</div>
              <div class="text-sm">Online</div>
            </div>
          </a>
          <a
            class="flex items-center gap-3 rounded-md p-2 "
            href="#"
            rel="ugc"
          >
            <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 border">
              <img
                class="aspect-square h-full w-full"
                alt="User Avatar"
                src="/placeholder-user.jpg"
              />
            </span>
            <div class="flex-1 truncate">
              <div class="font-medium">G Ray</div>
              <div class="text-sm">Offline</div>
            </div>
          </a>
          <a
            class="flex items-center gap-3 rounded-md p-2"
            href="#"
            rel="ugc"
          >
            <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 border">
              <img
                class="aspect-square h-full w-full"
                alt="User Avatar"
                src="/placeholder-user.jpg"
              />
            </span>
            <div class="flex-1 truncate">
              <div class="font-medium">Michael Bluth</div>
              <div class="text-sm">Offline</div>
            </div>
          </a>
          <a
            class="flex items-center gap-3 rounded-md p-2"
            href="#"
            rel="ugc"
          >
            <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 border">
              <img
                class="aspect-square h-full w-full"
                alt="User Avatar"
                src="/placeholder-user.jpg"
              />
            </span>
            <div class="flex-1 truncate">
              <div class="font-medium">Sarah Alder</div>
              <div class="text-sm">Offline</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
