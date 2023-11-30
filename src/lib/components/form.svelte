<script>
  import { Button, Label, Input, Textarea } from "flowbite-svelte";
</script>

<form class="flex flex-col space-y-6" action="#">
  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
    Sign in to our platform
  </h3>
  <Label class="space-y-2">
    <span>Task</span>
    <Input type="text" name="title" required />
  </Label>
  <Label class="space-y-2">
    <span>Description</span>
    <Textarea type="text" name="description" />
  </Label>
  
  <Button type="submit" class="w-full1">Save</Button>
  
</form>
