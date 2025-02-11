<script setup lang="ts">
const url: Ref<string> = useState("url");
const email: Ref<string> = useState("email");
const description: Ref<string> = useState("description");
const medus: Ref<string> = useState("medus");

const submit = (e) => {
  e.preventDefault(); // Prevent page from reloading.
  if (url.value && email.value && !medus.value) {
    console.log(url.value, email.value, description.value, medus.value);
    fetch("https://api.izveide.lv/latvijaai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url.value,
        email: email.value,
        description: description.value,
      }),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        alert(
          `Paldies, pieteikums pievienot ${url.value} katalogam ir saņemts!`
        );
        url.value = "";
        description.value = "";
      })
      .catch((error) => {
        alert(`Notikusi kļūda: ${error}`);
        console.error(error);
      });
  }
};
</script>

<template>
  <div>
    <form class="block max-w-md m-auto">
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-3 flex items-center pointer-events-none"
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
            ></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
        </div>
        <input
          id="email"
          class="rounded-lg shadow-md bg-gray-100 border text-black text-sm w-full pl-10 pr-4"
          type="email"
          name="e-pasts"
          placeholder="Tavs e-pasts"
          required="true"
          v-model="email"
        />
      </div>

      <div class="relative mt-4">
        <div
          class="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-3 flex items-center pointer-events-none"
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-world-www"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"
            ></path>
            <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
            <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
            <path
              d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"
            ></path>
            <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
            <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
            <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
            <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
            <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
          </svg>
        </div>
        <input
          id="url"
          class="rounded-lg shadow-md bg-gray-100 border border-gray-600 text-black text-sm w-full pl-10 pr-4"
          type="text"
          name="url"
          placeholder="Mājaslapas adrese"
          required="true"
          v-model="url"
        />
      </div>
      <div class="relative mt-4">
        <textarea
          id="description"
          class="rounded-lg shadow-md bg-gray-100 border border-gray-600 text-black text-sm w-full p-4"
          name="description"
          placeholder="Īss mājaslapas apraksts"
          v-model="description"
        />
      </div>
      <input type="text" class="hidden" v-model="medus" />
      <button
        class="w-full transition-all mt-2 shadow-md text-white bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-4 py-2 text-center dark:bg-primary-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        @click="submit"
        data-umami-event="Signup"
      >
        Pievienot mājaslapu
      </button>
    </form>
  </div>
</template>
