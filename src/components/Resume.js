import ResumeImg from '../assets/resume.jpg';

export default function Resume () {
    const config = {
      link: "https://drive.google.com/file/d/1QBfzIMN3k9sDMbYgRuMhh7h5O22psDBO/view?usp=drive_link",
    };

    return (
      <section
        id="resume"
        className="flex flex-col md:flex-row bg-secondary px-5"
      >
        <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
          <img className="w-[300px]" src={ResumeImg} />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center text-white p-3">
            <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">
              Resume
            </h1>
            <p className="py-2">
              I am a UI developer with experience in building responsive and
              user-friendly web applications. I have a strong foundation in
              HTML, CSS, and JavaScript, and I am proficient in React.js and
              Tailwind CSS.
            </p>
            <p className="pb-5 flex items-center gap-2">
              You can view my resume
              <a className="btn" href={config.link} target="_blank" download>
                {" "}
                Download
              </a>
            </p>
          </div>
        </div>
      </section>
    );
}