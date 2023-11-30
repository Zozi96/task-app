<script lang="ts">
  import type { Task } from "$lib/api/task";
  import { Button, Label, Input, Textarea } from "flowbite-svelte";

  export let task: Task | null;
  let title: string | undefined = task?.title ?? "";
  let description: string | undefined = task?.description ?? "";
</script>

<form class="flex flex-col space-y-6" action="#">
  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
    Sign in to our platform
  </h3>
  <Label class="space-y-2">
    <span>Task</span>
    <Input type="text" name="title" required bind:value={title} />
  </Label>
  <Label class="space-y-2">
    <span>Description</span>
    <Textarea type="text" name="description" bind:value={description} />
  </Label>

  <Button type="submit" class="w-full1">Save</Button>
</form>
