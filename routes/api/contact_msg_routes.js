const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

//Message Model
const Message = require('../../Models/Message')

//route GET api/contact_msg
// desc : Get all messages
//access public
router.get('/' , (req ,res) => {
    Message.find()
    .sort({date: -1})
    .then(messages => res.json(messages))
});

//route POST api/contact_msg
// desc : post a message
//access private
//auth middleware removed
router.post('/' , (req ,res) => {
    Message.find()
    const sendMessage  = new Message({
        email :req.body.email,
        subject:req.body.subject,
        message:req.body.message
    });
    sendMessage.save().then(message =>res.json(message))
});

//route DELETE api/contact_msg/:id
// desc : delete a message
//access private
router.delete('/:id' , auth  , (req,res) => {
Message.findById(req.params.id)
.then(message => message.remove().then(() => res.json({success:true})))
.catch(err => res.status(404).json({success:false}));
});

module.exports = router;