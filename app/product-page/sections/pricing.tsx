"use client";
import { Flexbox } from '@lobehub/ui';
import { 

  Sparkles, 
  Zap, 
  Rocket, 
  Cpu, 
  Shield, 
  Brain, 
  Infinity, 
  Workflow, 
  Database, 
  Layers, 
  ShieldCheck, 
  Gauge
   
} from "lucide-react";

const Pricing = () => {
  return (
    <section id='pricing' className='pricing'>
      <div className='pricing-main'>

        <div className='pricing-d1 pricing-dn'>
          <h1 className='pricing-d1-tag pricing-dn-tag'>Pricing</h1>

          <h2 className='pricing-d1-title pricing-dn-title'>
            Start free. Upgrade when you need more power.
          </h2>

          <p className='pricing-d1-subtitle pricing-dn-subtitle'>
            Simple plans built for people testing, building, and working long-term with AI.
          </p>

        </div>

        <div className='pricing-d2'>

          <div className='pricing-d2-1 pricing-d2-n pricing-card'>

            <p className='pricing-card-tag'>Free</p>
            <h2 className='pricing-card-title'>$0</h2>

            <p className='pricing-card-subtitle'>For trying the product</p>

            <ul className='pricing-card-ul'>

              <li className='pricing-card-ul-li'><Sparkles size={16}/> Basic access to Memviox</li>
              <li className='pricing-card-ul-li'><Zap size={16}/> Limited usage</li>
              <li className='pricing-card-ul-li'><Rocket size={16}/> Try the core experience</li>
              <li className='pricing-card-ul-li'><Cpu size={16}/> Access to core AI models</li>
              <li className='pricing-card-ul-li'><Shield size={16}/> Standard performance & reliability</li>

            </ul>

            <a href="#GEA" className='pricing-button-a'>Get started</a>

          </div>

          <div className='pricing-d2-2 pricing-d2-n pricing-card'>

            <p className='pricing-card-tag'>Pro</p>
            <h2 className='pricing-card-title'>$15<span>/month</span></h2>

            <p className='pricing-card-subtitle'>For deeper work and more usage</p>

            <ul className='pricing-card-ul'>

              <li className='pricing-card-ul-li'><Brain size={16}/> Higher token limits</li>
              <li className='pricing-card-ul-li'><Infinity size={16}/> More room for longer workflows</li>
              <li className='pricing-card-ul-li'><Workflow size={16}/> Built for serious AI usage</li>
              <li className='pricing-card-ul-li'><Cpu size={16}/> Access to multiple advanced models</li>
              <li className='pricing-card-ul-li'><Zap size={16}/> Faster response speeds</li>
              <li className='pricing-card-ul-li'><Database size={16}/> Larger context handling</li>
              <li className='pricing-card-ul-li'><Layers size={16}/> Multi-model workflows</li>
              <li className='pricing-card-ul-li'><ShieldCheck size={16}/> Priority reliability</li>
              <li className='pricing-card-ul-li'><Gauge size={16}/> Optimized performance</li>
              <li className='pricing-card-ul-li'><Sparkles size={16}/> Early access to new features</li>

            </ul>

            <a href="#GEA" className='pricing-button-a'>Join waitlist</a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Pricing