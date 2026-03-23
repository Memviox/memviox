"use client";
import { Kimi, OpenAI, Qwen, Meta   } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';
import { 
  Search, 
  Brain, 
  Target, 
  Plug, 
  Bot,   
  ShieldCheck,
  Pencil,
  Trash2,
  Lock,
  Clock3,
  BrainCircuit,
  Layers3, 
} from "lucide-react";


const Hero = () => {

  const logoSize = 22;

  const iconSIze = 16;



  return (

    <section id='hero' className='hero'>

        <div className='hero-main'>


          <div className="hero-d1">

            <div className="hero-d1-1 hero-d1-n">

              <h1 className='hero-d1-1-title hero-d1-n-title'>
                Route every prompt to the best-fit model.
              </h1>

              <p className="hero-d1-1-subtitle hero-d1-n-subtitle">Using top world Open source model's</p>

              <ul className="hero-d1-1-ul hero-d1-n-ul">

                <li className="hero-d1-1-ul-li hero-d1-n-ul-li">

                  <h1 className=' '>Multi-model routing</h1>

                  <ul className='hero-d1-1-ul-li-ul'>
                    <li className='hero-d1-1-ul-li-ul-li'> 
                      <Meta size={logoSize} />
                      <a href="https://www.llama.com/" className='hero-d1-1-ul-li-ul-li-model'>llama-3.1-8b-instant</a> 
                    </li>

                    <li className='hero-d1-1-ul-li-ul-li'> 
                      <Qwen size={logoSize} />
                      <a href="https://huggingface.co/Qwen" className='hero-d1-1-ul-li-ul-li-model'>Qwen3-32B</a> 
                    </li>

                    <li className='hero-d1-1-ul-li-ul-li'> 
                      <Kimi size={logoSize} />
                      <a href="https://platform.moonshot.cn/docs" className='hero-d1-1-ul-li-ul-li-model'>Kimi-K2</a> 
                    </li>

                    <li className='hero-d1-1-ul-li-ul-li'> 
                      <OpenAI size={logoSize} />
                      <a href="https://platform.openai.com/docs/models" className='hero-d1-1-ul-li-ul-li-model'>GPT-OSS-120B</a> 
                    </li>
                  </ul>

                </li>

              </ul>

              <a className='hero-d1-n-a' href="#detail">See Model's</a>
              
            </div> 

            <div className="hero-d1-2 hero-d1-n">

              <h1 className="hero-d1-2-title hero-d1-n-title">
                Ask fast. Move faster.
              </h1>

              <p className="hero-d1-2-subtitle hero-d1-n-subtitle">Why <span>Memviox</span></p>

              <ul className='hero-d1-2-ul hero-d1-n-ul'>

                <li className='hero-d1-2-ul-li hero-d1-n-ul-li'>
                   <Search size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2} />
                  <p>Find the best model for each task</p>
                </li>

                <li className='hero-d1-2-ul-li hero-d1-n-ul-li'>
                   <Brain size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2} />
                  <p>Keep important context when you choose</p>
                </li>

                <li className='hero-d1-2-ul-li hero-d1-n-ul-li'>
                  <Target size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2}/>                  
                  <p>Built for focused, long-term work</p>
                </li>

                <li className='hero-d1-2-ul-li hero-d1-n-ul-li'>
                  <Plug size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2}/>
                  <p>Connect with tools that expand your workflow</p>
                </li>

                <li className='hero-d1-2-ul-li hero-d1-n-ul-li'>
                  <Bot size={iconSIze} className="feature-icon"color="#ffffff" strokeWidth={2.2} />
                  <p>Let agents handle tasks on your behalf</p>
                </li>

              </ul>

              <a className='hero-d1-n-a' href="#HIW">See how <span>Memviox</span> work's</a>

            </div>

            <div className="hero-d1-3 hero-d1-n">

              <h1 className='hero-d1-3-title hero-d1-n-title'>
                Keep what matters. Forget what doesn’t.
              </h1>

              <p className='hero-d1-3-subtitle hero-d1-n-subtitle'>Why should I trust Memviox with memory</p>

              <ul className='hero-d1-3-ul hero-d1-n-ul'>

                <li className='hero-d1-3-ul-li hero-d1-n-ul-li'>
                  <ShieldCheck size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2} />
                  <p>Review memory before it’s saved</p>
                </li>

                <li className='hero-d1-3-ul-li hero-d1-n-ul-li'>
                  <Pencil size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2} />
                  <p>Edit memory anytime</p>
                </li>

                <li className='hero-d1-3-ul-li hero-d1-n-ul-li'>
                  <Trash2 size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2} />
                  <p>Remove memory when it no longer matters</p>
                </li>

                <li className='hero-d1-3-ul-li hero-d1-n-ul-li'>
                  <Lock size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2} />
                  <p>Your privacy comes first</p>
                </li>

                <li className='hero-d1-3-ul-li hero-d1-n-ul-li'>
                  <Clock3 size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2} />
                  <p>Real-time memory updates are coming soon</p>
                </li>

                <li className='hero-d1-3-ul-li hero-d1-n-ul-li'>
                  <BrainCircuit size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2} />
                  <p>Time-aware context helps responses stay accurate</p>
                </li>

                <li className='hero-d1-3-ul-li hero-d1-n-ul-li'>
                  <Layers3 size={iconSIze} className="feature-icon" color="#ffffff" strokeWidth={2.2} />
                  <p>More flexible memory tiers are on the way</p>
                </li>

              </ul>

              <a className='hero-d1-n-a' href="#product">See Product overview.</a>

            </div>

          </div>

          <div className="hero-d2">

            <div className="d2-buttons">

              <button 
                className='button'
              >
                <a href="#GEA"> Join the waitlist </a>           
              </button>

              <button 
                className='button'
              > 
                <a href="#pricing"> View pricing </a>         
              </button>



            </div>

          </div>


        </div>

    </section>
  )
}

export default Hero