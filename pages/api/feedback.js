import fs from 'fs'
import path from 'path'

function getData(){
  const filePath = path.join(process.cwd(),'data','feedback.json')
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)
  return data;
}

function handler(req, res){
  if(req.method === 'POST'){
    const email = req.body.email
    const feedback = req.body.feedback

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback
    }

    const data = getData()
    data.push(newFeedback)
    fs.writeFileSync(filePath, JSON.stringify(data))

    return res.status(201).json({
      message: 'Success',
      feedback: newFeedback
    })
  }else{
    res.status(200).json({
      message: 'It works',
      data: getData()
    })
  }
}

export default handler