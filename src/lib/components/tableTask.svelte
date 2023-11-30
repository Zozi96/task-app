<script lang="ts">
  import {
    Modal,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
  import type { Task } from "$lib/api/task";
  import Form from "$lib/components/form.svelte";
  let formModal: boolean = false;
  let isEdition: boolean = false;
  export let tasks: Task[];
</script>

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
            on:click={() => {
              formModal = true;
              isEdition = false;
            }}>Add New Task</button
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
                on:click={() => {
                  formModal = true;
                  isEdition = true;
                }}>Edit</button
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
  <Form isEdition={isEdition}></Form>
</Modal>
