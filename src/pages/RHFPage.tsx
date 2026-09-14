import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "username minimal 3 karakter" })
      .max(10, { message: "username maximal 10 karakter" }),
    password: z
      .string()
      .min(8, { message: "password minimal 8 karakter" })
      .regex(/(.*[A-Z]){2,}/, {
        message: "Harus menggunakan minimal 2 huruf kapital",
      }) // Minimal 2 huruf kapital dengan posisi acak
      .regex(/[0-9]/, { message: "Harus menggunakan minimal 1 angka" }),
    confirmPassword: z.string(),
    age: z.coerce.number().min(18, { message: "Usia minimal 18 tahun" }),
    dob: z.coerce.date().max(new Date()).optional(),
  })
  .superRefine((argument, context) => {
    if (argument.password !== argument.confirmPassword) {
      context.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Password tidak sama",
      });
    }
  });
// "coerce" to force data type to number/other from string(html input type)

type RegisterFormInput = z.input<typeof registerFormSchema>;
type RegisterFormOutput = z.output<typeof registerFormSchema>;

const RHFPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<RegisterFormInput, unknown, RegisterFormOutput>({
    resolver: zodResolver(registerFormSchema),
  });

  // You can also destructure the form
  // const { register } = useForm()

  const handleRegister = (values: RegisterFormOutput) => {
    alert("Form submitted");
    console.log(values);
    // form.setValue("username", "farhan") // seperti setState
  };

  return (
    <div>
      <h1>React Hook Form</h1>

      <form
        onSubmit={form.handleSubmit(handleRegister)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          border: "1px solid black",
          width: "350px",
          padding: "9px",
        }}
      >
        <span style={{ color: "red" }}>
          {form.formState.errors.username?.message}
        </span>
        <label>
          Username:
          <input
            type="text"
            placeholder="Nama"
            {...form.register("username")}
          />
        </label>

        <span style={{ color: "red" }}>
          {form.formState.errors.password?.message}
        </span>
        <label>
          Password:
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...form.register("password")}
          />
        </label>

        <span style={{ color: "red" }}>
          {form.formState.errors.confirmPassword?.message}
        </span>
        <label>
          Confirm Password:
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            {...form.register("confirmPassword")}
          />
        </label>

        <label>
          <input
            type="checkbox"
            onChange={(event) => setShowPassword(event.target.checked)}
          />
          Show Password
        </label>

        <span style={{ color: "red" }}>
          {form.formState.errors.age?.message}
        </span>
        <label>
          Age:
          <input type="number" placeholder="age" {...form.register("age")} />
        </label>

        <span style={{ color: "red" }}>
          {form.formState.errors.dob?.message}
        </span>
        <label>
          Date of Birth:
          <input type="date" placeholder="dob" {...form.register("dob")} />
        </label>

        <button style={{ backgroundColor: "greenyellow" }}>Register</button>
      </form>
    </div>
  );
};

export default RHFPage;
