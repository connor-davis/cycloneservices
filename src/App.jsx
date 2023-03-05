import { createSignal, onMount } from "solid-js";

import axios from "axios";
import { createStore } from "solid-js/store";
import logo from "./assets/logo.png";
import window from "./assets/window.png";
import window2 from "./assets/window2.png";
import window3 from "./assets/window3.png";
import demo from "./assets/demo.mp4";

function App() {
  const [navMenuEnabled, setNavMenuEnabled] = createSignal(false);
  const [reviews, setReviews] = createStore([], { name: "reviews-list" });

  onMount(() => {
    axios
      .get(
        "https://api.auto-bot.co.za/api/reviews?pagination[pageSize]=3&sort[0]=id:desc"
      )
      .then((response) => {
        setReviews([
          ...response.data.data.map((review) => {
            return { ...review.attributes };
          }),
        ]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  });

  return (
    <div class="flex flex-col w-screen h-screen select-none acrylic">
      <div class="flex justify-between items-center w-screen lg:hidden p-5 border-b border-purple-500 bg-neutral-900">
        <div class="">
          <img src={logo} class="w-32" />
        </div>
        <div class="text-white" onClick={() => setNavMenuEnabled(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      {navMenuEnabled() && (
        <div class="absolute top-0 left-0 w-screen h-screen z-50 bg-neutral-900">
          <div class="flex justify-between items-center w-screen lg:hidden p-5">
            <div class="">
              <img src={logo} class="w-32" />
            </div>
            <div class="text-white" onClick={() => setNavMenuEnabled(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-col space-y-5">
            <a
              href="#whyCyclone"
              class="text-white hover:bg-neutral-800 p-3 hover:text-purple-500 transition-all duration-300 ease-in-out"
              onClick={() => setNavMenuEnabled(false)}
            >
              Why Cyclone
            </a>
            <a
              href="#reviews"
              class="text-white hover:bg-neutral-800 p-3 hover:text-purple-500 transition-all duration-300 ease-in-out"
              onClick={() => setNavMenuEnabled(false)}
            >
              Reviews
            </a>
            <a
              href="#prices"
              class="text-white hover:bg-neutral-800 p-3 hover:text-purple-500 transition-all duration-300 ease-in-out"
              onClick={() => setNavMenuEnabled(false)}
            >
              Prices
            </a>
            <a
              href="#downloads"
              class="text-white hover:bg-neutral-800 p-3 hover:text-purple-500 transition-all duration-300 ease-in-out"
              onClick={() => setNavMenuEnabled(false)}
            >
              Downloads
            </a>
            <a
              href="#partners"
              class="text-white hover:bg-neutral-800 p-3 hover:text-purple-500 transition-all duration-300 ease-in-out"
              onClick={() => setNavMenuEnabled(false)}
            >
              Partners
            </a>
            <a
              href="#staff"
              class="text-white hover:bg-neutral-800 p-3 hover:text-purple-500 transition-all duration-300 ease-in-out"
              onClick={() => setNavMenuEnabled(false)}
            >
              Staff
            </a>
            <a
              href="https://discord.gg/cycloneot"
              class="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg"
              onClick={() => setNavMenuEnabled(false)}
              target="_blank"
            >
              Join Discord
            </a>
          </div>
        </div>
      )}

      <div class="hidden lg:flex g:flex-row lg:items-center lg:justify-between w-full p-5 border-b border-purple-500 px-48 bg-neutral-900">
        <div>
          <img src={logo} class="w-32" />
        </div>
        <div class="space-x-5">
          <a
            href="#whyCyclone"
            class="text-white hover:text-purple-500 transition-all duration-300 ease-in-out"
          >
            Why Cyclone
          </a>
          <a
            href="#reviews"
            class="text-white hover:text-purple-500 transition-all duration-300 ease-in-out"
          >
            Reviews
          </a>
          <a
            href="#prices"
            class="text-white hover:text-purple-500 transition-all duration-300 ease-in-out"
          >
            Prices
          </a>
          <a
            href="#downloads"
            class="text-white hover:text-purple-500 transition-all duration-300 ease-in-out"
          >
            Downloads
          </a>
          <a
            href="#partners"
            class="text-white hover:text-purple-500 transition-all duration-300 ease-in-out"
          >
            Partners
          </a>
          <a
            href="#staff"
            class="text-white hover:text-purple-500 transition-all duration-300 ease-in-out"
          >
            Staff
          </a>
          <a
            href="https://discord.gg/cycloneot"
            class="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg"
          >
            Join Discord
          </a>
        </div>
      </div>

      <div class="flex flex-col w-screen h-full p-5 overflow-y-auto scroll-smooth">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 px-5 md:px-48 justify-between h-screen z-10 mb-96 md:mb-48">
          <div class="flex flex-col space-y-5">
            <div class="text-white text-4xl font-bold">
              Dominate Them With <span class="text-purple-500">Cyclone</span>
            </div>
            <div class="text-neutral-400 text-xl">
              Game Injected. Wall. Unlock All.
            </div>
            <div class="text-neutral-400 text-xl">
              Join Discord to purchase.
            </div>
          </div>
          <div class="flex flex-col space-y-2 w-full justify-between p-2 border-l border-t border-r border-b border-purple-500 shadow-md shadow-purple-500">
            <img src={window} />
            <img src={window2} />
            <img src={window3} />
          </div>
          <video
            autoplay="autoplay"
            loop="true"
            muted
            defaultmuted
            playsinline
            class="flex flex-col space-y-2 w-full h-auto p-2 border-l border-t border-r border-b border-purple-500 shadow-md shadow-purple-500"
          >
            <source src={demo} type="video/mp4" />
          </video>
        </div>

        <div
          id="whyCyclone"
          class="flex flex-col space-y-10 items-center h-screen z-10 mb-48"
        >
          <div class="text-white text-4xl font-bold">Why choose Cyclone?</div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="flex flex-col space-y-3">
              <div class="flex flex-col justify-center items-center text-white bg-purple-500 rounded-lg w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <div class="text-white text-lg">The best support</div>
              <div class="text-neutral-400 max-w-[300px]">
                Cyclone Services offers realtime support through our discord
                server either through chat channels or out tickets system.
              </div>
            </div>
            <div class="flex flex-col space-y-3">
              <div class="flex flex-col justify-center items-center text-white bg-purple-500 rounded-lg w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="text-white text-lg">The lowest prices</div>
              <div class="text-neutral-400 max-w-[300px]">
                Cyclone Services pricing is the cheapest around. You won't get a
                better deal for the value.
              </div>
            </div>
            <div class="flex flex-col space-y-3">
              <div class="flex flex-col justify-center items-center text-white bg-purple-500 rounded-lg w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div class="text-white text-lg">The fastest delivery</div>
              <div class="text-neutral-400 max-w-[300px]">
                Cyclone Services delivers your product to you in no time. As
                soon as you have paid and your payment has been verified you
                receive your product.
              </div>
            </div>
            <div class="flex flex-col space-y-3">
              <div class="flex flex-col justify-center items-center text-white bg-purple-500 rounded-lg w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <div class="text-white text-lg">Undetected tools</div>
              <div class="text-neutral-400 max-w-[300px]">
                Cyclone Services tools remain undetected and we ensure that they
                will be undetected by any new game update.
              </div>
            </div>
          </div>
        </div>

        <div
          id="reviews"
          class="flex flex-col space-y-10 items-center h-screen z-10 px-5 md:px-64 mb-48"
        >
          <div class="text-white text-4xl font-bold">
            What our customers say.
          </div>

          {reviews.length === 0 && (
            <div class="flex w-full justify-center text-neutral-400">
              There are no reviews right now.
            </div>
          )}

          {reviews.length > 0 && (
            <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
                  <div class="text-white">{review.reviewTitle}</div>
                  <div class="text-neutral-400">{review.reviewContent}</div>
                  <div>
                    <div class="text-purple-500">{review.discordUsername}</div>
                    <div class="text-neutral-400">
                      Date of experience: {review.reviewDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          id="prices"
          class="flex flex-col space-y-10 items-center h-screen z-10 mb-48"
        >
          <div class="text-white text-4xl font-bold">Cyclone Prices</div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-8 pb-10">
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">MW2 Unlock All</div>
              <div class="text-purple-500 bold">$7-$55</div>
            </div>
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">MW2 Chair</div>
              <div class="text-purple-500 bold">$7-$45</div>
            </div>
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">MW2 Force Save</div>
              <div class="text-purple-500 bold">$7-$55</div>
            </div>
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">MW19 AIO VIP</div>
              <div class="text-purple-500 bold">$5-$30</div>
            </div>
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">Spoofer</div>
              <div class="text-purple-500 bold">$10-$35</div>
            </div>
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">Autobot</div>
              <div class="text-purple-500 bold">$10-$30</div>
            </div>
          </div>
        </div>

        <div
          id="downloads"
          class="flex flex-col space-y-10 items-center h-screen z-10 mb-48"
        >
          <div class="text-white text-4xl font-bold">Cyclone Downloads</div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-8 pb-10">
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">MW19 AIO</div>
              <a
                href="https://mega.nz/file/YugkxYCB#NZc7OFU2g3OcG8fSTA6KhemewjbWtIYGn2W9V934DhQ"
                target="_blank"
                class="text-purple-500 bold"
              >
                Download
              </a>
            </div>
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">Spoofer</div>
              <a
                href="https://mega.nz/file/RyAADLZA#HCxQTPmab6KUqvaILqTikdMn7sLtOEfqDjaYJxi_Lhg"
                target="_blank"
                class="text-purple-500 bold"
              >
                Download
              </a>
            </div>
          </div>
        </div>

        <div
          id="partners"
          class="flex flex-col space-y-10 items-center h-screen z-10 mb-48"
        >
          <div class="text-white text-4xl font-bold">Cyclone Partners</div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="flex flex-col space-y-3">
                <div class="text-white">Autobot</div>
                <div>
                  <div class="flex justify-between space-x-10 text-neutral-400">
                    <div>Website:</div>
                    <a
                      class="text-purple-500 bold"
                      href="https://auto-bot.co.za"
                      target="_blank"
                    >
                      Click To Open
                    </a>
                  </div>
                  <div class="flex justify-between space-x-10 text-neutral-400">
                    <div>Discord:</div>
                    <a
                      class="text-purple-500 bold"
                      href="https://discord.gg/65drw5qKk4"
                      target="_blank"
                    >
                      Click To Open
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="text-purple-500">Developer: Despair</div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="staff"
          class="flex flex-col space-y-10 items-center h-screen z-10 mb-48"
        >
          <div class="text-white text-4xl font-bold">Cyclone Staff</div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">Quixy</div>
              <div class="text-neutral-400">
                Quixy is the owner of Cyclone Services.
              </div>
              <div>
                <div class="text-purple-500">Quixy#2390</div>
                <div class="text-neutral-400">Role: Owner</div>
              </div>
            </div>
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">Despair</div>
              <div class="text-neutral-400">
                Despair is an admin of Cyclone Services. He is also the web
                developer.
              </div>
              <div>
                <div class="text-purple-500">despair#0407</div>
                <div class="text-neutral-400">Role: Admin, Web Developer</div>
              </div>
            </div>
            <div class="flex flex-col border-l border-t border-r border-b border-purple-500 rounded-lg space-y-5 p-3 bg-neutral-900">
              <div class="text-white">TheGreekShoto</div>
              <div class="text-neutral-400">
                TheGreekShoto is an admin of Cyclone Services. He is also the
                account manager.
              </div>
              <div>
                <div class="text-purple-500">TheGreekShoto#0768</div>
                <div class="text-neutral-400">Role: Admin, Account Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
