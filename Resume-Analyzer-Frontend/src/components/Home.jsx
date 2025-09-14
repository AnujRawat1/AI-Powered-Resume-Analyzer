import React from 'react'
import { resumes } from '../../constants'
import ResumeCard from './ResumeCard'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      
      <main className="bg-[url('./images/bg-main.svg')] bg-no-repeat bg-cover">
        <Navbar></Navbar>
        <section className='main-section'>
          <div className='page-heading py-10'>
            <h1>Track Your Applications & Resume Ratings</h1>
            <h2>Review your submissions and check AI-Powered Feedback</h2>
          </div>
        </section>


        {resumes.length > 0 && (

            <div className='resumes-section flex'>
              {resumes.map( (resume) => (
                <ResumeCard key={resume.id} resume={resume} />
              ))}
            </div>

        )}

      </main>

    </>
  )
}

export default Home
