import Post from "../models/Post.js"

const  fetchPost = async(req,res) => {
    const id = req.params.id;
    try {
        const data = await Post.find({userId:id});
        return res.status(200).json({data})
    } catch (error) {
        return res.status(500).json({error});
    }
  
}

export default fetchPost