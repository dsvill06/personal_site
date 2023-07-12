import React from "react";

export default function EmailForm() {
  return (
    <div>
      <section class="">
        <div class="">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-orange-600">
            Contact Us
          </h2>
          <form action="#" class="space-y-3">
            <div>
              <label
                for="email"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                style={{background: "#062630"}}
                class="shadow-sm border border-gray-400 text text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@domain.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="email"
                id="email"
                style={{background: "#062630"}}
                class="shadow-sm border border-gray-400 text text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Subject"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                style={{background: "#062630"}}
                class="block p-2.5 w-full text-md text rounded-lg shadow-sm border border-gray-400 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="text-center pl-3 pt-5">
                <button
                  type="submit"
                  class="hoverButton text py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-stone-700 sm:w-fit "
                >
                  Send message
                </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
