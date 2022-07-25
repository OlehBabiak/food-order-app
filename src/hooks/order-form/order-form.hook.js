import { useForm } from "react-hook-form";

const useOrderForm = ({ defaultValues }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  return {
    register,
    errors,
    handleSubmit,
    reset,
  };
};

export { useOrderForm };
