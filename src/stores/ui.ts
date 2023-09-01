import { writable } from 'svelte/store';

type UIStore = {
  navbarHeight: number;
};

const createUiStore = () => {
  const { subscribe, update } = writable<UIStore>({
    navbarHeight: 0,
  });

  const setNavbarHeight = (height: number) => {
    update(($store) => {
      $store.navbarHeight = height;
      return $store;
    });
  };

  return {
    subscribe,
    setNavbarHeight,
  };
};

const uiStore = createUiStore();

export default uiStore;
