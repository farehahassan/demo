
import { connectMongoDB } from "@/lib/mongoConnect";
import Contact from "@/models/contactModel";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ msg: "Only POST requests are allowed." });
        return;
    }

    const { name, email, message } = req.body;

    try {
        await connectMongoDB();
        const newContact = new Contact({
            name,
            email,
            message,
        });
        const savedContact = await newContact.save();
        console.log("Data saved to database", savedContact);
        res.status(201).json(savedContact);
    } catch (err) {
        console.log(err);
        res.status(400).json({ err, msg: "Something went wrong." });
    }
}


// import { connectMongoDB } from "@/lib/mongoConnect";
// import Contact from "@/models/contactModel";

// export default async function  handler(req, res) {
//     if(req.method !== "POST"){
//         res.status(405).send({msg:"only POST reequest are allowed."});
//         return
//     }

//     const {contact}= req.body

//     try{
//         await connectMongoDB()
//         Contact.create({contact}).then((data)=>{
//             console.log("Data saved to database", data);
//             res.status(201).send(data);
//         })
//     }catch(err){
//         console.log(err);
//         res.status(400).send({err, msg:"something went wrong."});

//     }
//   }