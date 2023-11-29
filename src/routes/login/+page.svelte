<script lang="ts">
  import type { ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import { Button, Helper } from "flowbite-svelte";
  import { Label, Input } from "flowbite-svelte";

  export let form: ActionData;

  let username = form?.username ?? "";
  let password = form?.password ?? "";
  let show: boolean = false;

  let usernameErrors: string[] | undefined = form?.errors?.username;
  let passwordErrors: string[] | undefined = form?.errors?.password;
  let serverErrorMessage: string | undefined = form?.serverErrorMessage;
  
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <form method="POST" use:enhance>
    <div>
      <Label class="mb-2">
        <span>Email</span>
        <Input
          label="Email"
          id="email"
          name="username"
          size="lg"
          bind:value={username}
          required
          placeholder="name@flowbite.com"
        />
      </Label>
      {#if usernameErrors}
        <Helper class="mt-2" color="red">
          {usernameErrors[0]}
        </Helper>
      {/if}
    </div>
    <div>
      <Label for="show-password" class="mb-2">Your password</Label>
      <Input
        id="show-password"
        name="password"
        type={show ? "text" : "password"}
        placeholder="Password"
        bind:value={password}
        size="lg"
      ></Input>
      {#if passwordErrors}
        <Helper class="mt-2" color="red">
          {passwordErrors[0]}
        </Helper>
      {/if}
    </div>
    {#if serverErrorMessage}
      <Helper class="mt-4" color="red"
        ><span class="font-medium">{serverErrorMessage}</span></Helper
      >
    {/if}

    <div class="mt-4">
      <Button type="submit" size="lg" color="primary">Login</Button>
    </div>
  </form>
</div>
