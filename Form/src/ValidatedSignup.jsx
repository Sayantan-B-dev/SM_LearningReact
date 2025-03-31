import { useForm } from "react-hook-form";
import "./Signup.css";

function SignUpForm2() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" }); // ✅ Enable real-time validation

  // ✅ Form submission handler
  const onSubmit = (data) => {
    console.log(data.firstName, data.lastName, data.password);
    reset(); // ✅ Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}> {/* ✅ Use handleSubmit from react-hook-form */}
      <div className="eachInput">
        <label htmlFor="firstName">Enter First Name</label>
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          {...register("firstName", {
            required: "First name is required", // 🔴 Show if empty
            minLength: { value: 2, message: "Must be at least 2 characters" }, // 🔴 Show if too short
          })}
        />
        {errors?.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
      </div>

      <div className="eachInput">
        <label htmlFor="lastName">Enter Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          {...register("lastName", {
            required: "Last name is required",
            minLength: { value: 2, message: "Must be at least 2 characters" },
          })}
        />
        {errors?.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}
      </div>

      <div className="eachInput">
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Must be at least 6 characters" },
          })}
        />
        {errors?.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      </div>

      <button type="submit" disabled={!isValid}>Submit</button> {/* ✅ Button disabled if form is invalid */}
    </form>
  );
}

export default SignUpForm2;
