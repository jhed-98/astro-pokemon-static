import { createSignal, type Component, type JSX } from "solid-js";
interface Props {
  initValue: number;
  children?: JSX.Element;
}
export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <>
      {props.children}
      <h1 class="text-2xl md:text-4xl">Counter</h1>
      <h3 class="text-xl">Value: {counter()}</h3>

      <div class="space-x-4">
        <button
          onClick={() => setCounter((prev) => ++prev)}
          class="p-2 rounded bg-blue-600"
        >
          +1
        </button>
        <button
          onClick={() => setCounter((prev) => --prev)}
          class="p-2 rounded bg-blue-600"
        >
          -1
        </button>
      </div>
    </>
  );
};
