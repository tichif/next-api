import { getData } from "../api/feedback"

const Feedbacks = (props) => {
  return <ul>
    {props.feedbacks.map(item => <li key={item.id}>{item.feedback}</li>)}
  </ul>
}

export async function getStaticProps(){
  return {
    props: {
      feedbacks: getData()
    }
  }
}

export default Feedbacks