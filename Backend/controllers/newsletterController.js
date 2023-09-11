const newsletterModel = require("../models/newsletterModel");
const nodemailer = require("nodemailer");
const expressAsyncHandler = require("express-async-handler");


// Subscribe to Newletter
exports.subscribeToNewsletter = expressAsyncHandler(async (req, res) => {
    try {
      const subscribe = await newsletterModel.create({
        mail: req.body.mail,
      });
  
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'georgette.johnston@ethereal.email',
          pass: 'JtnhEq7Pw1Pn2Xpa34'
      }
      });
  
      
      
      
  
   // send mail with defined transport object
  let info =  transporter.sendMail({
    from: 'WorkUp@gmail.com', // sender address
    to: subscribe.mail, // list of receivers
    subject: "Welcome to WorkUp NewsLetter", // Subject line
    text: `Hello 
    
  Thank you for joining WorkUp. We are excited to have you on board.

  Please feel free to reach out if you have any questions or need assistance.

  Best regards,

  Your WorkUp Team`, // plain text body
  },
  function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log("Email sent: " + info.response)
    }
  })
    res.status(201).json("Congradulation you subscribe to our NewsLetter !")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})
  
////////////////////////////////////////////////////////////////////////

// get all subscribers 
exports.getAllSubscribers = expressAsyncHandler(async (req, res) => {
    try {
      const subscribers = await newsletterModel.find({});
      const emails = subscribers.map((subscriber) => subscriber.mail);
      res.status(200).json(emails);
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  });

// DELTE 
exports.deleteSubscriber = expressAsyncHandler(async (req, res) => {
  try {
    const subscriberId = req.params.id; // Assuming the subscriber ID is provided in the request parameters

    // Find and delete the subscriber with the provided ID
    const deletedSubscriber = await newsletterModel.findByIdAndDelete(subscriberId);

    if (deletedSubscriber) {
      res.status(200).json({ message: 'Subscriber deleted successfully' });
    } else {
      res.status(404).json({ message: 'Subscriber not found' });
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});



  /////////////////////////////////////////////////////////////////

  // Send Group Email
exports.sendGroupEmail = expressAsyncHandler(async (req, res) => {
    try {
      const subscribers = await newsletterModel.find({});
      const emails = subscribers.map((subscriber) => subscriber.mail);
  
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'georgette.johnston@ethereal.email',
          pass: 'JtnhEq7Pw1Pn2Xpa34'
      }
      });
  
      const mailOptions = {
        from: 'WorkUp@gmail.com',
        to: emails.join(','),
        subject: 'WorkUp Newsletter',
        text: 'Hello,\n\nThis is a group email sent to all subscribers of the WorkUp Newsletter.\n\nBest regards,\nYour WorkUp Team'
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          throw new Error('Failed to send group email.');
        } else {
          console.log('Group email sent:', info.response);
          res.status(200).json('Group email sent successfully!');
        }
      });
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  });
  