import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pb-4 text-4xl">Contact Me</h1>
      <ContactForm />
    </div>
  );
}
