import { ref } from "vue";

type Props = {
  formHandler: (e: Event & { target: { value: string } }) => void;
};

export const Form: SetupFC<Props> = () => {
  const props = defineProps<{
    formHandler: (e: Event & { target: { value: string } }) => void;
  }>();

  const inputValue = ref("");

  const onChangeHandler = (e: Event) => {
    e.preventDefault();
    props.formHandler(e as Event & { target: { value: string } });
  };

  return () => (
    <>
      <input type="text" value={inputValue.value} onChange={onChangeHandler} />
    </>
  );
};
