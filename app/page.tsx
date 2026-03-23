"use client";

import Nav from "./sections/nav";
import Hero from "./sections/hero";
import Prodect from "./sections/prodect";
import HowItWorks from "./sections/HIW";
import Details from "./sections/details";
import Pricing from "./sections/pricing";
import Vision from "./sections/vision";
import GEA from "./sections/GEA";
import Footer from "./sections/footer";


export default function HomePage() {
  return (

    <>
      <div id="memviox-lp" className="memviox-lp">

        <Nav />
        <Hero />
        <Prodect />
        <HowItWorks />
        <Details />
        <Pricing />
        <Vision />
        <GEA />
        <Footer />
            


      </div>
    
    </>

  );
}

// "dev": "next dev  --webpack",

    // <main className="memviox-main" style={{ padding: "4rem 1.5rem", maxWidth: "800px", margin: "0 auto" }}>
      
    //   <h1 className="title glow">Memviox</h1>

    //   <section className="hero">

    //     <p className="eyebrow">Launching soon</p>
    //     <h1 className="glow">Memviox</h1>
    //     <p className="subtitle">
    //       An upcoming AI workspace focused on memory, tools, and persistent project context.
    //     </p>
    //     <p>Launching soon.</p>

    //   </section>    


    //   <section className="about">

    //     <h1 className="glow">What is Memviox ??</h1>

    //     <p>
    //       Memviox is an upcoming AI workspace built to make working with artificial
    //       intelligence more useful, more organized, and more persistent over time.
    //       Instead of relying on a single model or starting from zero every session,
    //       Memviox is being designed as a system where multiple AI models, memory,
    //       tools, and project context can work together in one place.
    //     </p>

    //     <p>
    //       The vision behind Memviox is to move beyond the idea of AI as a simple chat
    //       box. It is being built as a more intelligent environment for thinking,
    //       building, researching, and creating, where context can last longer, tools can
    //       be integrated directly into workflows, and users can work with AI in a way
    //       that feels more continuous and useful across real projects.
    //     </p>

    //     <p>
    //       Memviox was founded on December 21, 2025 by Mustafa and is being developed
    //       under CloudBrain.AI, part of Syntherra Technologies.
    //     </p>
      
    //   </section>

    //   <section className="founded">

    //     <h1 className="glow">Founding</h1>

    //     <p>
    //       Memviox was founded on December 21, 2025 by Mustafa and is being
    //       developed under CloudBrain.AI, part of Syntherra Technologies.
    //     </p>

    //   </section>

    //   <section className="socials">

    //     <h1 className="glow">Follow Memviox on social media for updates as development continues.</h1>

    //     <div className="socials-tag">
    //       <a href="https://www.instagram.com/memviox/" target="_blank" aria-label="Instagram">

    //         <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
    //           <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm8.75 1.125a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z"/>
    //         </svg>

    //       </a>

    //       <a href="https://x.com/memviox" target="_blank" aria-label="X">  

    //         <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
    //           <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.494h2.039L6.486 3.244H4.298l13.313 17.403Z"/>
    //         </svg>

    //       </a>

    //     </div>

    //   </section>

    // </main>