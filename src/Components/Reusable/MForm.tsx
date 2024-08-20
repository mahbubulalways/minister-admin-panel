import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: SubmitHandler<any>;
} & TFormConfig;
const MForm = ({ children, onSubmit, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const method = useForm(formConfig);
  const { handleSubmit } = method;
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    // reset();
  };
  return (
    <div>
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(submit)} className="w-full">
          {children}
        </form>
      </FormProvider>
    </div>
  );
};

export default MForm;
