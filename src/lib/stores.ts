import { writable } from 'svelte/store';

export let darkMode = writable(false);
export let loggedIn = writable(false);