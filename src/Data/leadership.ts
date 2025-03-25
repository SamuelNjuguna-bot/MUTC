import image from "../assets/profiles/man1.jpeg";
import man2 from "../assets/profiles/man2.jpeg";
import man3 from "../assets/profiles/man3.jpeg";
import man4 from "../assets/profiles/man4.jpeg";
import man5 from "../assets/profiles/man5.jpeg";
import lady1 from "../assets/profiles/lady1.jpeg";
import lady5 from "../assets/profiles/lady5.jpeg";
import lady2 from "../assets/profiles/lady2.jpeg";
import lady3 from "../assets/profiles/lady3.jpeg";
import lady4 from "../assets/profiles/lady4.jpeg";
import man6 from "../assets/profiles/man6.jpeg";


interface myleaders{
    id:number,
    leadername:string,
    imageUrl:string,
    role?:string,
    leaderDetails:string,
}
const leadersDetails:myleaders[]= [
    {
        id:2,
        leadername: "Victory Njeri",
        role:"Chairperson of the club.",
        imageUrl: lady1,
        leaderDetails:"Victory Njeri is a visionary leader passionate about empowering students through technology. She ensures MUTC provides opportunities for hands-on learning, collaboration, and growth in the tech industry."
    },
    {
        id:1,
        leadername: "Dr John Ndia",
        role: " Patron of the club",
        imageUrl: image,
        leaderDetails: "Dr. John Ndia is a seasoned educator and tech enthusiast dedicated to mentoring students in innovation and research. With years of experience, he guides MUTC towards excellence in technology."
    }
,
    {
        id:3,
        leadername: "Allan Muhari",
        role:"Vice Chairperson of the club",
        imageUrl: man2,
        leaderDetails:"Allan Muhari is an advocate for technological advancement, helping shape MUTC’s strategic direction. He supports members in gaining industry-relevant skills through mentorship and practical projects."
    }
    ,
    {
        id:4,
        leadername: "Bridget Gitonga",
        role: "secretary of the club",
        imageUrl: lady2,
        leaderDetails:"Bridget Gitonga is a dedicated organizer ensuring seamless communication within MUTC. She plays a key role in coordinating events, keeping records, and fostering teamwork among members."
    }
    ,
    {
        id:5,
        leadername: "Ruth Mutisya",
        role:" treasurer of the club",
        imageUrl: lady3,
        leaderDetails:"Ruth Mutisya is responsible for managing MUTC’s finances efficiently. She ensures proper resource allocation, helping sustain club activities and support initiatives that benefit all members."
    }
    ,
    {
        id:6,
        leadername: "Webster Ifedha",
        role: " cyber security lead",
        imageUrl: man3,
        leaderDetails:"Webster Ifedha is passionate about protecting digital assets. He leads cybersecurity initiatives in MUTC, educating members on ethical hacking, data protection, and online security best practices."
    }
    ,
    {
        id:7,
        leadername: "Manase Gunga",
        role: "UI/UX lead",
        imageUrl: man4,
        leaderDetails:"Manase Gunga is a creative designer specializing in user-centered experiences. He leads UI/UX workshops at MUTC, teaching members how to create visually appealing and functional interfaces."
    }
    ,
    {
        id:8,
        leadername: "Carolyne Githenduka",
        role: "web development lead",
        imageUrl: lady4,
        leaderDetails:"Carolyne Githenduka is a skilled web developer dedicated to building modern web applications. She leads MUTC’s web development team, helping members master front-end and back-end technologies."
    }
    ,
    {
        id:9,
        leadername: "stanley Amunze",
        role: "Mobile apps development lead",
        imageUrl: man5,
        leaderDetails:"Stanley Amunze is passionate about mobile technology and app development. He teaches MUTC members how to create innovative and user-friendly mobile applications for real-world use."
    }
    ,
    {
        id:10,
        leadername: "Paul Karanja",
        role:"cloud engineering lead",
        imageUrl: man6,
        leaderDetails:"Paul Karanja specializes in cloud computing and infrastructure management. He educates MUTC members on cloud technologies, helping them build scalable and secure cloud-based applications."
    }
    ,
    {
        id:11,
        leadername: "Evyonb Mbithe",
        role:"power platform lead",
        imageUrl: lady5,
        leaderDetails:"Evyonn Mbithe is an expert in Microsoft’s Power Platform, enabling students to create low-code applications. She guides MUTC members in building automation solutions and business applications."
    }
]

export default leadersDetails