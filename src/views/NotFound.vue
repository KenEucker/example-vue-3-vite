<script lang="ts" setup></script>

<template>
  <div class="flex items-center justify-center w-9/12 min-h-screen py-16 m-auto">
    <div class="pb-8 overflow-hidden bg-white shadow sm:rounded-lg">
      <div class="pt-8 text-center border-t border-gray-200">
        <h1 class="font-bold text-purple-400 text-9xl">404</h1>
        <h1 class="py-8 text-6xl font-medium">oops! Page not found</h1>
        <p class="px-12 pb-8 text-2xl font-medium">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <a
          href="/dashboard"
          class="px-6 py-2 mr-6 font-semibold text-white rounded-md bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
        >
          HOME
        </a>
        <a
          href="/"
          class="px-6 py-2 font-semibold text-white rounded-md bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.text-9xl {
  font-size: 14rem;
}
@media (max-width: 645px) {
  .text-9xl {
    font-size: 5.75rem;
  }

  .text-6xl {
    font-size: 1.75rem;
  }

  .text-2xl {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  .py-8 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .px-6 {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  .mr-6 {
    margin-right: 0.5rem;
  }

  .px-12 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
