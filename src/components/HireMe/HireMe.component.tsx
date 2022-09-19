import React, { useRef } from 'react'
import { ChangeText } from './components/ChangeText/ChangeText.component'
import './HireMe.component.scss'

interface IHireMeProps {
  title?: string
  linkedinProfile?: string
  githubProfile?: string
}

const HireMe: React.FC<IHireMeProps> = ({ title = 'Hire Me', linkedinProfile, githubProfile }) => {
  const fromRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLTextAreaElement>(null)
  const handleSend = () => {
    const topic = fromRef.current && fromRef.current.value
    const body = bodyRef.current && bodyRef.current.value

    if (topic !== '' && body !== '') {
      window.open(`mailto:fookoo@gmail.com?subject=${topic}&body=${body}`)
    }
  }
  const lookingFor = [
    'Frontend Developer ?',
    'React Developer ?',
    'Angular Developer ?',
    'Team Player ?'
  ]

  const destinations = ['EUROPE / WARSAW', 'EVERYWHERE / REMOTE']

  return (
    <section className="hire-me">
      <header>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-xs-12">
            <h2 className="overline">{title}</h2>
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-lg-3 col-md-4 hide-xs" />
        <div className="col-lg-9 col-md-8 col-xs-12">
          <div className="row">
            <div className="col-xs-12">
              <p>
                Looking for <ChangeText texts={lookingFor} />
              </p>
              <p>I am currently looking for new opportunities.</p>
              <p>
                I can work in <ChangeText texts={destinations} />
              </p>
              <p>If you would like to cooperate please use form below</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 flex">
              <input ref={fromRef} name="name" placeholder={'I am CEO from Google'} />
              <textarea
                ref={bodyRef}
                name="text"
                placeholder={'Your skill set is a perfect match for our open position...'}
              />
              <button onClick={handleSend}>
                Send <img alt="send icon" src="assets/send.png" />
              </button>
              <span>or</span>
              <span>find me on</span>
              <div className="social">
                {linkedinProfile && (
                  <a href={linkedinProfile} title="Linkedin Profile">
                    <img src="assets/linkedin.png" alt="Linkedin Icon" />
                  </a>
                )}
                {githubProfile && (
                  <a href={githubProfile} title="GitHub Profile">
                    <img src="assets/github.png" alt="Github Icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HireMe
