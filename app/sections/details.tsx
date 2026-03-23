"use client";

const Details = () => {
  return (
    <section id='detail' className='detail'>
      <div className='detail-main'>

        <div className='detail-d1 detail-dn'>

          <p className='detail-dn-tag'>Details</p>
          <h1 className='detail-dn-title'>
            Built around model choice, memory control, and future extensibility.
          </h1>
          <p className='detail-dn-subtitle'>
            The product is designed for people who want more than a single-model chatbot.
          </p>
        </div>

        <div className='detail-d2'>

          <div className='detail-d2-1 detail-item'>
            <h2 className='detail-item-title'>Multi-model intelligence</h2>
            <p className='detail-item-text'>
              Memviox is designed around the idea that no single model is best at everything.
              Different models can be used for different kinds of work, whether the goal is
              speed, reasoning, depth, or workflow support inside one system.
            </p>
          </div>

          <div className='detail-d2-2 detail-item'>
            <h2 className='detail-item-title'>Transparent memory control</h2>
            <p className='detail-item-text'>
              Memory should be useful, reviewable, and intentional. Memviox is built around
              persistent context that helps over time, while still giving users the ability
              to inspect, manage, edit, and remove what is remembered.
            </p>
          </div>

          <div className='detail-d2-3 detail-item'>
            <h2 className='detail-item-title'>Tools inside the workflow</h2>
            <p className='detail-item-text'>
              Memviox is not meant to stop at chat. It is being built as a workspace where
              tools, files, actions, and future integrations can extend what the system can
              actually do across real tasks and connected workflows.
            </p>
          </div>

          <div className='detail-d2-4 detail-item'>
            <h2 className='detail-item-title'>Built for ongoing execution</h2>
            <p className='detail-item-text'>
              Instead of starting from zero every session, Memviox is designed for projects,
              research, planning, building, and long-term work where context compounds and
              the system becomes more useful across repeated use.
            </p>
          </div>

          <div className='detail-d2-5 detail-item'>
            <h2 className='detail-item-title'>Context across projects</h2>
            <p className='detail-item-text'>
              Memviox is built to carry useful context across different conversations,
              files, and workflows so ideas do not stay trapped inside isolated chats.
            </p>
          </div>

          <div className='detail-d2-6 detail-item'>
            <h2 className='detail-item-title'>Designed to grow with the product</h2>
            <p className='detail-item-text'>
              The system is meant to become more capable over time through better memory,
              stronger tools, deeper integrations, and more advanced agent-based execution.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Details