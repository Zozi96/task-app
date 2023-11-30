<script lang="ts">
  import type { Task } from "$lib/api/task";
  import type { PageData } from "./$types";
  import TableTask from "$lib/components/tableTask.svelte";
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
  } from "flowbite-svelte";
  export let data: PageData;
  let tasks: Task[] = data.tasks;
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      {data.user.email}</span
    >
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/services">Logout</NavLi>
  </NavUl>
</Navbar>

<TableTask {tasks}></TableTask>
