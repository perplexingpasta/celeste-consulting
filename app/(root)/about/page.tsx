export const metadata = {
  title: 'About Us - Céleste Consulting'
};

const About = () => {
  return (
    <>
      <div id="about" className="pt-40">
        <header>
          {/* GRID/DOT BACKGROUND */}
          {/* <div className="absolute left-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.1]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
          </div> */}

          <h1 className="heading relative block !font-extrabold uppercase dark:hidden">
            <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
              About Us
            </span>
          </h1>
          <h1 className="heading relative hidden !font-extrabold uppercase dark:block">
            <span className="text-purple">About Us</span>
          </h1>
          <p className="relative mb-16 items-center justify-center py-4 text-center text-lg text-black-100 dark:text-white">
            The story behind céleste consulting
          </p>
        </header>

        <main>
          <section>
            <p></p>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
