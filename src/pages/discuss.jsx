import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { HeadComponent } from "@/components/core/Head";
import { setCookie , getCookie } from "cookies-next";

const Discuss = () => {
  const [isSubmitted , setIsSubmitted] = React.useState(false)
  const [reload , setReload ] = React.useState(false)
  React.useEffect(()=>{
    if(typeof window !== "undefined"){

      const value = getCookie('isSubmitted')
      // setIsSubmitted()
      setIsSubmitted(value ?? false)
      
    }


  },[reload])


  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      services: [],
      budget: "",
      email: "",
      phone: "",
      description: "",
      isIndian: "no",
    },
  });

  const watchIsIndian = watch("isIndian");

  const services = [
    "S&M posts",
    "Web development",
    "Video editing",
    "logo design",
  ];

  const NoneIndianBudget = [
    "$5,000 Minimum Engagement",
    "$5,000 to $25,000",
    "More than $25,000",
  ];

  const IndianBudget = [
    "Rs 40,000 Minimum Engagement",
    "Rs 40,000 to Rs 2,00,000",
    "More than Rs 2,00,000",
  ];

  const sendEmail = (data) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          to_name: data.name,
          message: JSON.stringify(data),
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setCookie("isSubmitted", JSON.stringify(true), {
            path: "/",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
          });

          setReload(!reload)
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };


 



    return (
      <>
        <HeadComponent title="Discuss with us" />
        <section className="flex justify-center items-center md:h-screen h-full">
          <div className="glass md:w-1/2 w-full md:max-h-full px-6 py-10 rounded-md text-sm   ">
            {!isSubmitted ? (
              <>
                <form
                  onSubmit={handleSubmit(sendEmail)}
                  className="flex flex-col gap-8"
                >
                  <div className="flex md:flex-row flex-col gap-4">
                    <label htmlFor="contact">
                      Contact Information :
                      <input
                        className="input"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <h4 className="text-red-400">Name field is required</h4>
                      )}
                    </label>
                    <label htmlFor="isIndian">
                      Are you Indian?
                      <select className="input" {...register("isIndian", {})}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>

                  <div className="flex md:flex-row flex-col gap-2">
                    <label htmlFor="email">
                      Email :
                      <input
                        className="input"
                        {...register("email", {
                          required: true,
                          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <h4 className="text-red-400">
                          Email field is required
                        </h4>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <h4 className="text-red-400">Invalid Email</h4>
                      )}
                    </label>
                    <label htmlFor="phone">
                      Phone :
                      <input
                        className="input"
                        {...register("phone", {
                          required: true,
                          minLength: 10,
                        })}
                      />
                      {errors.phone && errors.phone.type === "required" && (
                        <h4 className="text-red-400">
                          Phone field is required
                        </h4>
                      )}
                      {errors.phone && errors.phone.type === "minLength" && (
                        <h4 className="text-red-400">Invalid Phone Number</h4>
                      )}
                    </label>
                  </div>

                  <div>
                    <h2>Budget *</h2>

                    {watchIsIndian === "yes" ? (
                      <>
                        {" "}
                        <div className="flex flex-wrap gap-4">
                          {IndianBudget.map((budget, index) => {
                            return (
                              <label key={index}>
                                <input
                                  className="bg-transparent"
                                  type="radio"
                                  value={budget}
                                  {...register("budget")}
                                />
                                {budget}
                              </label>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-wrap gap-4">
                          {NoneIndianBudget.map((budget, index) => {
                            return (
                              <label key={index}>
                                <input
                                  className="bg-transparent"
                                  type="radio"
                                  value={budget}
                                  {...register("budget")}
                                />
                                {budget}
                              </label>
                            );
                          })}
                        </div>{" "}
                      </>
                    )}
                  </div>
                  <div>
                    <h2>Services *</h2>
                    <div className="flex gap-2 flex-wrap ">
                      {services.map((service, index) => {
                        return (
                          <label htmlFor="budget" key={index}>
                            <input
                              type="checkbox"
                              value={service}
                              {...register("services")}
                            />
                            {service}
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <textarea
                    {...register("description", {
                      required: true,
                      minLength: 50,
                    })}
                    className="border-none p-3 bg-black/40 outline-none "
                    cols="30"
                    rows="3"
                  ></textarea>
                  {errors.description &&
                    errors.description.type === "required" && (
                      <h4 className="text-red-400">
                        Description field is required
                      </h4>
                    )}
                  {errors.description &&
                    errors.description.type === "minLength" && (
                      <h4 className="text-red-400">
                        Minimum 50 words required
                      </h4>
                    )}

                  <button type="submit" className="outline_btn">
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <>
                <h1 className="text-lg ">
                  {" "}
                  🙏 Thanks for Choosing us. We appreciate You
                </h1>
              </>
            )}
          </div>
        </section>
      </>
    );
  
};

export default Discuss;
