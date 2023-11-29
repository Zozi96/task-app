<script lang="ts">
  import type { PageData } from "./$types";
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
  } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";

  export let data: PageData;
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      {data.email}</span
    >
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Mega menu<ChevronDownOutline
        class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
      />
    </NavLi>

    <NavLi href="/services">Services</NavLi>
    <NavLi href="/services">Products</NavLi>
    <NavLi href="/services">Contact</NavLi>
  </NavUl>
</Navbar>
