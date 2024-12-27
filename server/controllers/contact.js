const Contact =require('../models/contactModel');

export default getcontact('/api/contact', async (req,res)=>{
    try{
        const {name,email,phone,message}=req.body;
    

    if(!name || !email ||!message){
        return res.status(400).json({error : 'Name, email and message are not'});
    
    }
    const newContact = new Contact({
        name,
        email,
        phone,
        message,
    });
    const savedContact = await newContact.save();

    res.status(201).json({message: 'Contact Form Submitted Successfully',contact:savedContact});
    }catch(error){
        console.error(error)
        ser.status(500).json({error :'occurred while submitting the form'});

    }
});

