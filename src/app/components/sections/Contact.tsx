import { Button } from "../Button";

export const Contact = () => {
  return (
    <section id="contact" className="scroll-snap-section">
      <div className="flex flex-col items-center justify-center p-8 gap-12 bg-lightBeige text-darkCharcoal text-center">
        <h2 className="text-4xl text-sky-500">Contact Me</h2>
        <p>
          Please contact me directily at{" "}
          <a
            href="mailto:rossathompson94@gmail.com"
            className="text-sky-500 underline"
          >
            rossathompson94@gmail.com
          </a>{" "}
          or by submitting this form.
        </p>
        <form
          action=""
          className="flex flex-col gap-4 sm:min-w-[400px] min-w-[300px]"
        >
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded-[5px]"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="p-2 rounded-[5px] h-32"
            required
          ></textarea>
          <Button type="submit" text="Submit" />
        </form>
      </div>
    </section>
  );
};
