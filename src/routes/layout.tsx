import {component$, createContextId, Slot, useContextProvider, useStore} from "@builder.io/qwik";
import Modal from "~/components/modal";

export const MyContext  = createContextId('qwik-affirmations');

export default component$(() => {
  const state = useStore({
    affirmations: [],
    openModal: false
  });

  useContextProvider(MyContext, state);

  return (
      <>
        {state.openModal && <Modal />}
        <header>
          icon
        </header>
        <main class="flex-1 flex flex-col max-w-[1200px] mx-auto w-full">
          <Slot />
        </main>
        <footer>
          footer
        </footer>
      </>
  );
});
