import { useRef } from "react"

const HomePage = () => {

  const emailRef = useRef()
  const feedbackRef = useRef()

  const submitHandler = e => {
    e.preventDefault()

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value
  }

  return <div>
     <h1>HomePage</h1>
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Your email address </label> 
        <input type="email"  id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="feedback">Your feedback </label> 
        <textarea id="feedback" cols="30" rows="5" ref={feedbackRef}></textarea>
      </div>
      <button>Send Feedback</button>
    </form>
  </div>
}

export default HomePage