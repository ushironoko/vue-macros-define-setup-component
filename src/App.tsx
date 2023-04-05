import { Counter } from "./components/Counter";
import { Form } from "./components/Form";

export const App = defineSetupComponent(() => {
  const formHandler = (e: Event & { target: { value: string } }) => {
    alert(e.target.value);
  };

  return () => (
    <div class="App">
      <Counter title={"counter"} />
      <Form formHandler={formHandler} />
    </div>
  );
});
