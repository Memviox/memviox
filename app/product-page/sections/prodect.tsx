"use client";

const Product = () => {
  return (
    <section id='product' className='product'>
      <div className='product-main'>

        <div className='product-d1 product-dn'>

          <h1 className='product-d1-tag product-dn-tag'>Product overview</h1>

          <h2 className='product-d1-title product-dn-title'>
            One place to think, route, remember, and act.
          </h2>

          <p className='product-d1-subtitle product-dn-subtitle'>
            Memviox brings multi-model chat, memory, tools, and agents into one workflow.
          </p> 

        </div>

        <div className='product-d2'>

          <div className='product-card product-card-1'>

            <h2 className='product-card-title'>Multi-model chat</h2>
            <p className='product-card-text'>
              Route prompts to the best-fit model instead of forcing one model to do everything.
            </p>

          </div>

          <div className='product-card product-card-2'>

            <h2 className='product-card-title'>Rare memory</h2>
            <p className='product-card-text'>
              Save what matters, ignore what doesn’t, and keep context useful over time.
            </p>

          </div>

          <div className='product-card product-card-3'>

            <h2 className='product-card-title'>Tool use</h2>
            <p className='product-card-text'>
              Expand what the AI can do with actions, utilities, and external workflows.
            </p>

          </div>

          <div className='product-card product-card-4'>

            <h2 className='product-card-title'>Agents</h2>
            <p className='product-card-text'>
              Move from simple chat into systems that can help execute tasks for you.
            </p>

          </div>

          <div className='product-card product-card-5'>

            <h2 className='product-card-title'>Privacy first</h2>
            <p className='product-card-text'>
                Your data stays yours. Conversations, memory, and workflows are built with privacy at the core.
            </p>

          </div>

          <div className='product-card product-card-6'>

            <h2 className='product-card-title'>External connectors</h2>
            <p className='product-card-text'>
                Connect tools like GitHub, files, and other services so the AI can understand your real projects.
            </p>

          </div>

          <div className='product-card product-card-7'>

            <h2 className='product-card-title'>Persistent context</h2>
            <p className='product-card-text'>
                Keep long-term understanding of your work, projects, and ideas instead of starting from zero each time.
            </p>

          </div>
          
          <div className='product-card product-card-8'>

            <h2 className='product-card-title'>Project awareness</h2>
            <p className='product-card-text'>
                Understand your files, repositories, and workflows so the AI can reason about real projects instead of isolated prompts.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Product