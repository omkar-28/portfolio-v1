import SectionTitle from "./SectionTitle";

const Footer = () => {
  return (
    <section className="contact text-center pt-24 pb-20">
      <SectionTitle>Get in touch</SectionTitle>

      <div className="flex flex-col sm:flex-col md:flex-row items-center gap-4">
        <div className="p-5 basis-2/4">
          <p className="text-left font-medium text-md md:text-lg">I’m open to new job opportunities!. If my profile suite the job requirement, you contact me through my Networks or send me an E-mail to the following link.</p>

          <div className="mt-3 pt-8 w-full">
            <a href="mailto:omikhatavkar2@gmail.com" className="px-8 py-2 m-2 text-lg font-semibold shadow-lg text-gray-600 rounded dark:text-slate-200 border-2 border-indigo-500 dark:border-slate-500 hover:bg-indigo-500/[.1] hover:shadow-indigo-900/50 dark:hover:bg-indigo-500/[.1] dark:hover:shadow-gray-900/50 transition-all duration-500 ease-in-out">
              Say Hey
            </a>
          </div>
        </div>
        <div className="contact_img m-auto basis-2/4">
          <svg version="1.2" className="w-full h-72 fill-slate-500 dark:fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 933 647" width="933" height="647">
            <title>undraw_hey_email_liaa-svg</title>
            <defs>
              <linearGradient id="g1" x1="327.5" y1="318.2" x2="935.9" y2="318.2" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2d6dd0" />
                <stop offset="1" stopColor="#6c139c" />
              </linearGradient>
              <linearGradient id="g2" x1="327.6" y1="319.7" x2="935.9" y2="319.7" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2d6dd0" />
                <stop offset="1" stopColor="#6c139c" />
              </linearGradient>
            </defs>
            <path
              id="Layer"
              className="s0"
              d="m26.9 646.1q-2.9-0.7-5.5-2-2.7-1.2-5.1-2.8-2.4-1.6-4.5-3.6-2.2-2-3.9-4.3-1.8-2.3-3.2-4.8-1.3-2.5-2.3-5.2-1-2.7-1.6-5.5-0.6-2.8-0.8-5.6-0.1-2.9 0.2-5.7 0.4-2.9 1.2-5.6 0.9-2.7 2.2-5.3 1.4-2.5 3.1-4.7c6.5-8 15.5-12 24-14.3 10.1-2.7 20.6-2.9 30.9-2.1 11.4 1 22.8 3.1 34.2 4.5q16.6 1.9 33.2 2.6 8.2 0.3 16.5 0.4 8.2 0 16.4-0.3 8.3-0.3 16.5-1 8.2-0.6 16.4-1.5 8.2-1 16.3-2.2 8.2-1.3 16.3-2.9 8.1-1.6 16.1-3.5 8.1-1.9 16-4.1c10.4-2.9 20.7-6.1 30.9-10 8.8-3.4 17.6-7.4 25.5-13.7 6.1-4.8 12.8-12.1 13.4-22.1 0.7-12.7-7.9-22.8-15.3-29-8.9-7.6-19-12.6-28.8-17.7l-32.3-16.9-64.9-34q-16-8.4-32-16.9-3.7-1.8-7.3-3.8-3.6-1.9-7.2-4-3.5-2-7-4.2-3.5-2.1-6.9-4.4c-8.7-6-17.2-13.1-23.8-22.7-5.5-8.1-9.9-18.2-9.9-29.3 0.2-21.4 16.3-34.9 29.6-42.4 39-21.9 83.2-10.4 123.3-26.5q3.3-1.3 6.6-2.9 3.2-1.6 6.3-3.4 3.1-1.9 6-4.1 2.9-2.1 5.6-4.5c6.1-5.6 11.8-13.2 13.6-23 4.2-22-13-39.8-25.6-49.2-18.1-13.6-39.1-19.3-59.1-25.6-10-3.2-20.1-6.4-29.9-10.6-9.3-4-18.5-8.8-26.6-16.2-6.1-5.7-12.6-13.4-14.1-23.5q-0.4-2.9-0.2-5.9 0.2-3 1-5.9 0.9-2.8 2.3-5.5 1.4-2.6 3.3-4.9c5.7-6.8 13.1-10.7 20.3-13.7q3.1-1.2 6.4-2.3 3.2-1.1 6.5-2.1 3.3-0.9 6.6-1.8 3.3-0.8 6.7-1.4c1.7-0.4 2.5 3.2 0.7 3.6q-3.2 0.6-6.3 1.4-3.2 0.7-6.3 1.6-3.1 0.9-6.2 1.9-3.1 1.1-6.1 2.2c-11.9 4.7-33 17.2-24.2 38.2 4.3 10.2 12.7 17 20.4 22.1 9 6 18.9 9.8 28.6 13.3 20 7.1 40.4 11.9 59.8 21.2q3.5 1.6 6.8 3.5 3.3 1.8 6.5 3.9 3.2 2.2 6.2 4.5 3 2.4 5.8 5c6.5 6 12.7 13.4 16.6 22.8q1.3 3 2.2 6.2 0.8 3.2 1.1 6.4 0.3 3.3 0.2 6.6-0.2 3.3-0.9 6.5-0.8 3.1-2 6-1.1 3-2.7 5.7-1.6 2.8-3.5 5.3-2 2.5-4.2 4.7c-14.4 14.6-33.3 20.9-51 24.1-21.9 4-44.2 4-66 8.1-17.7 3.3-37.2 9.7-51 25.4-5.5 6.3-10.1 14.8-10.2 24.8-0.2 12 5.4 22.8 11.8 30.8 7.3 9.2 16.3 15.9 25.3 21.6 9.6 6.1 19.7 11.2 29.6 16.4 42.6 22.3 85.3 44.6 127.8 67 9.2 4.9 18.5 9.8 26.6 17.4 6.7 6.3 13.3 15.2 14.2 26.5 1.6 21.2-18.3 32.6-30.6 38.5q-3.5 1.6-7 3.1-3.5 1.4-7.1 2.8-3.6 1.3-7.2 2.5-3.6 1.2-7.3 2.3-15.4 4.9-31.1 8.5-15.8 3.6-31.9 6.1-16 2.4-32.2 3.6-16.2 1.2-32.5 1.2-16.2-0.1-32.4-1.3c-11.1-0.9-22.1-2.3-33.1-3.9-11.1-1.7-22.3-3.2-33.6-2.6-9.7 0.5-19.8 2.6-28.7 8.2-6.4 4-12.6 10.1-14.2 19.7-3.2 19.2 11.9 33.3 24.4 36.6 1.8 0.5 1 4.1-0.7 3.6z"
            />
            <path id="Layer" className="s0" d="m323.2 538.7c-11.7 0-21.2-9.5-21.2-21.2 0-11.7 9.5-21.2 21.2-21.2 11.7 0 21.2 9.5 21.2 21.2 0 11.7-9.5 21.2-21.2 21.2z" />
            <path id="Layer" className="s0" d="m103.6 347.3c-11.7 0-21.2-9.4-21.2-21.2 0-11.7 9.5-21.1 21.2-21.1 11.7 0 21.1 9.4 21.1 21.1 0 11.8-9.4 21.2-21.1 21.2z" />
            <path
              id="a85aa9a8-70f8-49a0-91e4-e8ca3e9b5e25-490"
              className="s1"
              d="m929.2 230.2c0.9 0.4 1.6 1.1 2.2 1.9 0.5 0.8 0.8 1.8 0.8 2.7 0 1-0.3 2-0.8 2.8l-46.5 100.3q-0.8 2-1.4 4-0.7 2-1.1 4.1-0.4 2-0.7 4.1-0.3 2.1-0.3 4.2v43.8 0.1c-0.1 1.1-0.3 2.3-0.7 3.3-0.5 1-1.1 2-1.9 2.7-0.8 0.8-1.7 1.4-2.8 1.9-1 0.4-2.1 0.6-3.3 0.6h-29.6c-1.1 0-2.3-0.2-3.3-0.7-1-0.4-2-1-2.8-1.8-0.8-0.8-1.4-1.7-1.8-2.8-0.4-1-0.7-2.1-0.7-3.3v-43.8q0-2.1-0.3-4.2-0.3-2.1-0.7-4.1-0.5-2.1-1.1-4.1-0.7-2-1.5-4l-28.1-61.1q-0.9-1.7-2.2-3.1-1.2-1.4-2.8-2.4-1.6-1-3.4-1.6-1.8-0.6-3.7-0.7h-43.4-0.1c-1.1 0-2.2 0.2-3.3 0.7-1 0.4-1.9 1-2.7 1.8-0.8 0.8-1.4 1.8-1.8 2.8-0.5 1.1-0.7 2.2-0.7 3.3v10.6c0 1.1 0.3 2.2 0.7 3.2 0.4 1.1 1 2 1.8 2.8 0.8 0.8 1.8 1.5 2.8 1.9 1 0.4 2.1 0.7 3.3 0.7h32c1.2 0 2.3 0.2 3.3 0.6 1 0.4 2 1.1 2.8 1.9 0.8 0.8 1.4 1.7 1.8 2.7 0.4 1.1 0.7 2.2 0.7 3.3v22c0 1.1-0.3 2.2-0.7 3.3-0.4 1-1 2-1.8 2.7-0.8 0.8-1.8 1.5-2.8 1.9-1 0.4-2.1 0.6-3.3 0.6h-32c-1.2 0.1-2.3 0.3-3.3 0.7-1 0.5-2 1.1-2.8 1.9-0.8 0.8-1.4 1.7-1.8 2.8-0.4 1-0.7 2.1-0.7 3.3v14.4c0 1.2 0.3 2.3 0.7 3.3 0.4 1 1 2 1.8 2.8 0.8 0.8 1.8 1.4 2.8 1.9 1 0.4 2.1 0.6 3.3 0.6h53.1c1.1 0 2.2 0.3 3.3 0.7 1 0.4 1.9 1 2.7 1.8 0.8 0.8 1.4 1.8 1.9 2.8 0.4 1 0.6 2.2 0.6 3.3v22c0 1.1-0.2 2.2-0.6 3.2-0.5 1.1-1.1 2-1.9 2.8-0.8 0.8-1.7 1.4-2.7 1.9-1.1 0.4-2.2 0.6-3.3 0.6h-100.1c-1.1 0-2.2-0.2-3.3-0.6-1-0.5-1.9-1.1-2.7-1.9-0.8-0.8-1.5-1.7-1.9-2.8-0.4-1-0.6-2.1-0.6-3.2v-53.1-0.1c0-1.1-0.3-2.2-0.7-3.3-0.4-1-1.1-1.9-1.9-2.7-0.8-0.8-1.7-1.4-2.8-1.9-1-0.4-2.1-0.6-3.2-0.6h-35.6q-1.7 0.1-3.2 0.8-1.5 0.7-2.7 1.9-1.1 1.2-1.8 2.7-0.6 1.6-0.6 3.2v53.1c0 1.2-0.2 2.3-0.6 3.3-0.5 1.1-1.1 2-1.9 2.8-0.8 0.8-1.7 1.4-2.8 1.8-1 0.5-2.1 0.7-3.2 0.7h-29.7c-1.1 0-2.2-0.2-3.3-0.7-1-0.4-2-1-2.8-1.8-0.8-0.8-1.4-1.7-1.8-2.8-0.5-1-0.7-2.1-0.7-3.3v-25.9c15.8-54.6 15.8-91.2 0-111.3v-22.5c0-1.2 0.2-2.3 0.7-3.3 0.4-1 1-2 1.8-2.8 0.8-0.8 1.8-1.4 2.8-1.8 1.1-0.4 2.2-0.7 3.3-0.7h29.7q1.6 0.1 3.1 0.8 1.5 0.7 2.7 1.9 1.1 1.2 1.7 2.7 0.6 1.5 0.6 3.2v48.7c0.1 1.1 0.3 2.2 0.7 3.3 0.5 1 1.1 1.9 1.9 2.7 0.8 0.8 1.7 1.5 2.8 1.9 1 0.4 2.1 0.7 3.3 0.7h35.6c1.1 0 2.2-0.2 3.3-0.7 1-0.4 1.9-1 2.7-1.8 0.8-0.8 1.5-1.8 1.9-2.8 0.4-1.1 0.7-2.2 0.7-3.3v-48.7c0-1.1 0.2-2.3 0.6-3.3 0.4-1 1.1-2 1.9-2.8 0.8-0.8 1.7-1.4 2.7-1.8 1.1-0.4 2.2-0.7 3.3-0.7h122.7q1.9 0.1 3.7 0.7 1.7 0.6 3.2 1.7 1.6 1 2.7 2.5 1.2 1.4 1.9 3.2l7.2 20.8c1.6 4.5 4.1 11.7 5.6 16.2l7.8 23.2q0.3 1.1 0.7 2.1 0.4 1.1 0.8 2.1 0.4 1 0.9 2 0.5 1 1.1 1.9 0.5-0.9 1-1.9 0.5-1 0.9-2 0.4-1 0.8-2 0.3-1 0.7-2.1l8.1-23.4 5.8-16.1 7.2-20.8q0.7-1.7 1.8-3.2 1.2-1.4 2.7-2.5 1.5-1.1 3.3-1.7 1.7-0.6 3.6-0.7h31.9c0.9-0.1 1.9 0 2.8 0.4z"
            />
            <path
              id="ab32811a-36b8-48f6-a9b0-164845ebe4b4-491"
              fillRule="evenodd"
              className="s2"
              d="m559 258.7c2.6 0 5.2 0.3 7.8 1 2.5 0.7 5 1.7 7.2 3 2.3 1.4 4.4 3.1 6.2 5 16.7 18.9 12.8 64-12.2 134-0.7 1.8-2.1 3.3-3.8 4.2-1.8 0.8-3.8 0.9-5.6 0.3-1.9-0.7-3.4-2-4.2-3.8-0.9-1.8-1-3.8-0.3-5.6 31.4-87.8 21-112.7 15.1-119.4q-1.4-1.3-3.1-2.3-1.8-0.9-3.7-1.4-1.9-0.4-3.8-0.4-2 0.1-3.9 0.7-4.3 1.3-8.4 3.3-4.1 2-7.8 4.6-3.7 2.7-6.9 5.9-3.2 3.2-5.8 6.9c10.3 41.5 17.9 88.9 5 107.8q-1.2 1.8-2.7 3.2-1.5 1.5-3.3 2.6-1.8 1.1-3.8 1.8-2 0.7-4.1 0.9-1.7 0.2-3.3-0.1-1.7-0.2-3.2-0.9-1.6-0.6-2.9-1.7-1.3-1-2.4-2.3c-13.9-16.5-6.7-76.8 0.6-103.4q0.3-1.3 0.8-2.7 0.5-1.3 1-2.6 0.6-1.3 1.2-2.6 0.6-1.3 1.3-2.5c-0.7-2.8-1.5-5.7-2.3-8.7-13.3-47.9-34.7-84.6-42.3-84.6-5.8 3.7-21.2 36.2 14.1 132.1 0.7 1.8 0.6 3.7-0.2 5.5-0.7 1.7-2.1 3.1-3.9 3.8-1.7 0.7-3.7 0.7-5.5 0.1-1.7-0.7-3.2-2.1-4-3.8-36.4-79-53.7-101.9-60.2-108.5-2.5 12.2-4 48.3 39.4 127.9 0.9 1.7 1.1 3.7 0.6 5.5-0.5 1.8-1.6 3.4-3.3 4.4-1.6 1-3.5 1.3-5.4 0.9-1.8-0.5-3.5-1.6-4.5-3.2-20.8-31.2-48.5-72.6-59.6-83.9-1.2 11.6 2.5 46.2 40.1 103.3 1.2 1.6 1.6 3.6 1.3 5.5-0.3 1.9-1.4 3.6-3 4.8-1.6 1.1-3.5 1.6-5.4 1.2-2-0.3-3.7-1.4-4.8-2.9-26.8-34.3-40.5-42.4-45.3-44.4 0.6 9.1 10.6 38.7 33.4 63.4 15.2 16.5 40.4 34.9 73.8 28.4q0.2-0.1 0.3-0.1c1.9-0.3 3.9 0.1 5.5 1.2 1.6 1.2 2.7 2.9 3 4.8 0.4 1.9-0.1 3.9-1.2 5.5-1.1 1.6-2.8 2.7-4.7 3q-2.1 0.4-4.2 0.7-2.1 0.3-4.2 0.5-2.1 0.2-4.2 0.3-2.1 0.1-4.2 0.1c-40.3 0-68-29-81.8-47.9-17.1-23-30.9-56.9-24.3-69q0.7-1.3 1.7-2.4 1.1-1.1 2.3-1.9 1.3-0.8 2.7-1.3 1.4-0.5 2.9-0.6 2.8 0.2 5.4 0.8 2.7 0.6 5.3 1.7 2.5 1 4.9 2.5 2.3 1.5 4.4 3.3c-16.2-36.9-16.8-61.7-11.6-71.5q0.6-1.3 1.6-2.5 0.9-1.1 2.2-1.9 1.2-0.9 2.6-1.3 1.4-0.5 2.9-0.6c6.1-0.3 11.5 2.7 28.9 26.6-14.5-44.2-8.5-64.7-5.6-71.3q0.6-1.5 1.6-2.7 1-1.3 2.3-2.2 1.4-0.9 2.9-1.4 1.5-0.4 3.1-0.5c4.4 0.1 13.9 0 41.3 50.1-7.1-44.1 1-67.4 13.5-74.7q1.5-0.8 3.1-1.3 1.7-0.5 3.4-0.6 1.8 0 3.5 0.3 1.7 0.3 3.3 1.1c19.9 8.2 40.3 58.6 49.8 91.9q3-3.2 6.4-6 3.5-2.7 7.3-4.9 3.7-2.3 7.8-4 4-1.7 8.3-2.9c2.5-0.7 5.1-1.1 7.8-1.2zm-42.3 61.9c-6 31.2-6 69.4-0.6 75.8q0.4-0.1 0.8-0.3 0.4-0.2 0.7-0.5 0.3-0.3 0.5-0.6 0.3-0.3 0.5-0.7c2.8-3.8 9.3-19.7-1.9-73.7z"
            />
            <path
              id="Layer"
              fillRule="evenodd"
              className="s0"
              d="m240.8 0c1.4 0 2.8 0.2 4.1 0.7 1.3 0.6 2.5 1.3 3.5 2.3 1 1 1.8 2.1 2.4 3.4l18.2 42c0.6 1.3 0.9 2.7 0.9 4.1 0 1.4-0.2 2.8-0.7 4.1-0.5 1.3-1.3 2.5-2.3 3.5-1 1-2.1 1.8-3.4 2.4l-58.8 25.5c-1.3 0.6-2.7 0.9-4.1 0.9-1.4 0-2.8-0.2-4.1-0.7-1.3-0.6-2.5-1.3-3.5-2.3-1-1-1.8-2.1-2.3-3.4l-18.3-42c-0.6-1.3-0.8-2.7-0.9-4.1 0-1.4 0.3-2.8 0.8-4.1 0.5-1.3 1.2-2.5 2.2-3.5 1-1 2.2-1.8 3.4-2.4l58.8-25.5c1.3-0.6 2.7-0.9 4.1-0.9zm-60.4 32q-0.1 0.1-0.2 0.1-0.1 0.1-0.2 0.1-0.1 0.1-0.2 0.2-0.1 0-0.2 0.1l40.8 11.2 19.9-37.5q-0.2 0-0.3 0-0.2 0.1-0.3 0.1-0.1 0-0.3 0.1-0.1 0-0.2 0.1zm82.1 23.8q0.6-0.7 1-1.5 0.3-0.9 0.3-1.8 0-0.9-0.4-1.7l-18-41.4-20.8 39.2q-0.2 0.5-0.6 0.8-0.4 0.4-0.9 0.6-0.5 0.2-1 0.2-0.5 0.1-1-0.1l-43-11.7 18.1 41.6q0.4 0.8 1.1 1.5 0.6 0.6 1.5 0.9 0.8 0.4 1.7 0.3 0.9 0 1.8-0.3l58.7-25.6q0.9-0.4 1.5-1z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-16">
        <a href="https://github.com/omkar-28" target={"_blank"} rel={"noopener noreferrer"} className="flex items-center justify-center text-3xl w-10 h-10 sm:h-12 sm:w-12 rounded-full bg-indigo-500 text-gray-200 dark:bg-gray-700 dark:text-gray-900 shadow-xl hover:-translate-y-1 hover:dark:bg-gray-600 hover:dark:text-gray-800 transition ease-in-out duration-500">
          <span className="sr-only">Github Icon</span>
          <i className="devicon-github-original"></i>
        </a>
        <a href="https://www.linkedin.com/in/omkar-khatavkar-bb7051117/" target={"_blank"} rel={"noopener noreferrer"} className="mx-3 flex items-center justify-center text-2xl w-10 h-10 sm:h-12 sm:w-12 rounded-full bg-indigo-500 text-gray-200 dark:bg-gray-700 dark:text-gray-900 shadow-xl hover:-translate-y-1 hover:dark:bg-gray-600 hover:dark:text-gray-800 transition ease-in-out duration-500">
          <span className="sr-only">LinkedIn Icon</span>

          <i className="devicon-linkedin-plain"></i>
        </a>
        <a href="mailto:omikhatavkar2@gmail.com" target={"_blank"} rel={"noopener noreferrer"} className="flex items-center justify-center text-3xl w-10 h-10 sm:h-12 sm:w-12 rounded-full bg-indigo-500 text-gray-200 dark:bg-gray-700 dark:text-gray-900 shadow-xl hover:-translate-y-1 hover:dark:bg-gray-600 hover:dark:text-gray-800 transition ease-in-out duration-500">
          <span className="sr-only">Gmail Icon</span>
          <svg className="fill-gray-200 dark:fill-gray-900 hover:dark:bg-gray-600 hover:fill-gray-200 transition ease-in-out duration-500" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="current">
            <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
