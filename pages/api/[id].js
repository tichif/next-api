import { getData } from "./feedback";

function handler(req, res){
  if(req.method === 'GET'){
    const feedbackId = req.query.id;

    const data = getData()
    const feedback = data.find(item => item.id === feedbackId)

    return res.status(200).json({ feedback })
  }
}

export default handler