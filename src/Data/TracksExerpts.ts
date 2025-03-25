import Cyber from "../assets/tracks/track-cyber.jpeg";
import Cloud from "../assets/tracks/cloud.jpeg";
import webdesign from "../assets/tracks/web-design.jpeg";
import mobile from "../assets/tracks/mobile-app.jpeg";
import powerbi from "../assets/tracks/powerbi.jpeg";
import uiUx from "../assets/tracks/ui-ux.jpeg";
interface tracksdata{
    id:number;
    exerpt:string;
    whatToExpect:string;
    imageUrl:string;

    
}
const tracksExerpts :tracksdata[]= [
    {   id:1,
        exerpt:"Dive into the world of cybersecurity and learn how to protect systemsnetworks, and data from cyber threats. Our program covers securityprotocols, ethical hacking, encryption techniques, and threat analysis Engage in hands-on projects and real-world scenarios where you will identify vulnerabilities and implement security solutions.",
        whatToExpect: "By the end of this track, you will have the skills to safeguard digital environments, conduct security audits, and implement robustsecurity measures. You’ll be prepared to tackle real-world cybersecurity challenges and help defend against cyber attacks.",
        imageUrl:Cyber
    },
    {   id:2,
        exerpt: " Engage in hands-on labs and practical projects to build and manage scalable, secure cloud infrastructures.",
        whatToExpect: "By the end of this track, you will be proficient in leveraging cloud technologies to design and maintaincloud-based solutions for various applications and services.",
        imageUrl:Cloud
    },
    {   id:3,
        exerpt:"Learn to design and build mobile applications for Android and iOS platforms using Java, Kotlin, Swift, and Dart.Work on hands-on projects that focus on building user-friendly and efficient mobile applications.",
        whatToExpect: "By the end of this track, you will be capable of building, testing, and deploying high-performance mobileapplications for smartphones and tablets.",
        imageUrl:mobile
    },
    {   id:4,
        exerpt: "Explore the principles of creating user-friendly and visually appealing interfaces. Learn user research,wireframing, prototyping, and usability testing through interactive projects. Gain hands-on experience designing intuitive user interfaces and enhancing user experiences with  industry-standard tools and techniques.",
        whatToExpect:"By the end of this track, you will be proficient in UI/UX design, ready to create effective, user-centric designs for websites and mobile applications.",
        imageUrl: uiUx},
    {   id:5,
        exerpt: "Explore Microsoft's Power Platform, including Power BI, Power Apps, Power Automate, and Power Virtual Agents.Learn to create custom business applications, automate workflows, and analyze data. Gain hands-on experience in developing integrated solutions that enhance business processes.",
        whatToExpect:" By the end of this track, you will be skilled in using the Power Platform to transform organizational operationsand improve efficiency with minimal coding.",
        imageUrl:powerbi},
    {   id:6,
        exerpt: " Learn how to build dynamic and responsive websites using front-end technologies like HTML, CSS, and JavaScript,  along with back-end frameworks such as Node.js and databases.Engage in hands-on projects that develop both the client-side and server-side of web applications.",
        whatToExpect:"By the end of this track, you will have the skills to design, develop, and deploy full-stack web applications,creating robust and scalable solutions.",
        imageUrl: webdesign
    }
]
export default tracksExerpts
