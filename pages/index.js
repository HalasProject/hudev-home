import { useState } from 'react'
import Subscribe from '@/components/Subscribe'

function IndexPage() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen w-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        alt="main background image"
        src="images/oran.png"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        {subscribed ? (
          <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
            You have subscribed!
          </h1>
        ) : (
          <div className="space-y-8">
            <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
              Innovative solutions for a connected{' '}
              <span className="text-palette-primary">world.</span>
            </h1>
            <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
              Let's get in touch! Fill out your email below and we will contact
              you to learn more about your needs and discuss how we can help
            </p>
            <Subscribe setSubscribed={setSubscribed} />
          </div>
        )}
      </div>
    </div>
  )
}

export default IndexPage
