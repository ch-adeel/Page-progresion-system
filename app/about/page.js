import Header from "@/components/Header";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div>
        <Header />
        <p className="py-8 ps-8 text-5xl pr-4 ">
          As a final year student, your Final Year Project FYP is a major
          milestone in your academic journey. It's an opportunity to demonstrate
          your knowledge and skills, and to showcase your potential to future
          employers. But with great opportunity comes great responsibility. Here
          are some tips to help you make the most of your FYP:
        </p>
        <h1 className="py-8 pr-8 ps-8 text-6xl underline decoration-1">
          Choose the right topic
        </h1>
        <p className="py-8 ps-8 text-2xl pr-4">
          The topic of your FYP is crucial. It should be something that you are
          interested in and passionate about, but also relevant to your field of
          study. Take the time to research different topics and find one that
          resonates with you.
        </p>
        <p className="py-8 ps-8 text-2xl pr-4"></p>
        <h1 className="py-8 pr-8 ps-8 text-6xl underline decoration-1">
          Develop a clear plan
        </h1>
        <p className="py-8 ps-8 text-2xl pr-4">
          Once you have chosen your topic, develop a clear plan of action. This
          should include a timeline for completing different stages of your
          project, as well as a list of resources and materials that you will
          need.
        </p>
        <p></p>
        <h1 className="py-8 pr-8 ps-8 text-6xl underline decoration-1">
          Communicate with your supervisor
        </h1>
        <p className="py-8 ps-8 text-2xl pr-4">
          Your supervisor is there to guide you and offer feedback on your work.
          Make sure to communicate with them regularly, and keep them informed
          of your progress. This will help you stay on track and avoid any
          last-minute surprises.
        </p>

        <h1 className="py-8 pr-8 ps-8 text-6xl underline decoration-1">
          Keep a record of your work
        </h1>
        <p className="py-8 ps-8 text-2xl pr-4">
          Throughout your FYP, keep a detailed record of your work. This can
          include notes, sketches, and screenshots. Not only will this help you
          to stay organized, but it will also be useful if you need to refer
          back to your work later on.
        </p>
        <h1 className="py-8 pr-8 ps-8 text-6xl underline decoration-1">
          Don't be afraid to ask for help
        </h1>
        <p className="py-8 ps-8 text-2xl pr-4">
          If you are struggling with a particular aspect of your project, don't
          be afraid to ask for help. Your supervisor, classmates, and even
          online communities can all be great sources of support and advice.
        </p>
      </div>
    </>
  );
};
export default AboutPage;
