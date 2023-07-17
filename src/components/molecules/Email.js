import React, {useState} from "react";
import axios from "axios";

export default function EmailForm() {
  const [submitted, changeSubmit] = useState(false);
  const [record, setRecord] = useState({
    email:"",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(record)
    const emailData = {
      // Get the form values
      email: record.email,
      subject: record.subject,
      message: record.message,
    };

    try {
      const response = await axios.post("https://819ov9iuk5.execute-api.us-east-1.amazonaws.com/dev/send", emailData);
      // Handle the response
      const data = response.data.json();
      console.log(response);
      changeSubmit(true)
      console.log(data);
    } catch (error) {
      // Handle the error
      console.log(`Error was found: ${error}`);
    }
    setRecord({
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <section>
        <div>
          <h2 className="mb-4 text-4xl tracking-tight text-center text-orange-600">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                style={{ background: "#062630" }}
                value={record.email}
                className="shadow-sm border border-gray-400 text text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@domain.com"
                onChange={(e) => {setRecord({...record,email:e.target.value})}}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                value={record.subject}
                id="subject"
                style={{ background: "#062630" }}
                className="shadow-sm border border-gray-400 text text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Subject"
                onChange={(e) => {setRecord({...record,subject:e.target.value})}}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={record.message}
                style={{ background: "#062630" }}
                className="block p-2.5 w-full text-md text rounded-lg shadow-sm border border-gray-400 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                onChange={(e) => {setRecord({...record,message:e.target.value})}}
                required
              ></textarea>
            </div>
            <div className="text-center pl-3 pt-5">
              <button
                type="submit"
                className="hoverButton text py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-stone-700 sm:w-fit"
              >
                Send message
              </button>
            </div>
          </form>
          {!submitted ? null:<div>fahsldkfasdf</div>}
        </div>
      </section>
    </div>
  );
}