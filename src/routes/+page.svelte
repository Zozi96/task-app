<script lang="ts">
  import type { Task } from "$lib/api/task";
  import type { PageData } from "./$types";
  import Form from "$lib/components/form.svelte";
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Modal,
  } from "flowbite-svelte";
  export let data: PageData;
  let tasks: Task[] = data.tasks;
  let formModal: boolean = false;
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

<div class="flex flex-col justify-center items-center">
  <div class="w-1/2">
    <Table>
      <caption
        class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
      >
        Your tasks
      </caption>
      <TableHead>
        <TableHeadCell>Task title</TableHeadCell>
        <TableHeadCell>Created at</TableHeadCell>
        <TableHeadCell>
          <button
            class="font-medium text-emerald-600 hover:underline dark:text-primary-500"
            on:click={() => (formModal = true)}>Add New Task</button
          >
        </TableHeadCell>
      </TableHead>
      <TableBody class="divide-y">
        {#each tasks as item}
          <TableBodyRow>
            <TableBodyCell>{item.title}</TableBodyCell>
            <TableBodyCell>{item.createdAt}</TableBodyCell>
            <TableBodyCell>
              <button
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Edit</button
              >
              <button
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Remove</button
              >
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  </div>
</div>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
<Form></Form>
</Modal>
