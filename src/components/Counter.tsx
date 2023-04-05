import { ref } from "vue";

const Counter = defineSetupComponent(() => {
  const props = defineProps<{
    title: string;
  }>();

  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return () => (
    <div>
      <h1>{props.title}</h1>
      <button onClick={decrement}>-</button>
      <span>{count.value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
});

export default Counter;
