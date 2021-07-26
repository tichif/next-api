import { Fragment, useState } from "react"

import { getData } from "../api/feedback"

const Feedbacks = (props) => {

  const [feedback, setFeedback] = useState()

  const loadFeedbackHandler = async (id) => {
    const res = await fetch(`/api/${id}`)
    const data = await res.json()
    setFeedback(data.feedback)
  }

  return (
    <Fragment>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {props.feedbacks.map(item => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={() => loadFeedbackHandler(item.id)}>Show Details</button>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export async function getStaticProps(){
  return {
    props: {
      feedbacks: getData()
    }
  }
}

export default Feedbacks