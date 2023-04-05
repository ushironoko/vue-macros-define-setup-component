import { ref } from "vue";

type Props = {
  title: string;
};

// SetupFnとdefinePropsで共通化したいが、definePropsがインラインで型を渡さないと怒られる
export const Counter: SetupFC<Props> = () => {
  const props = defineProps<{ title: string }>();

  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const CounterChild = () => (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count.value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
  return () => (
    <>
      <h1>{props.title}</h1>
      <CounterChild />
    </>
  );
};
