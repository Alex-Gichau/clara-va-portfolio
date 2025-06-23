import { FiLinkedin, FiTwitter, FiInstagram, FiMail, FiPhoneCall } from "react-icons/fi";

// Define fields for footer data
export interface FooterData {
    id: number;
    Icon: React.ElementType;
    linkUrl: string;
    title: string;
}

export const footerData: FooterData[] = [
    {
        id:1,
        Icon: FiLinkedin,
        linkUrl:"https://www.linkedin.com/in/clara-njeri-0b8ab823a/",
        title:"LinkedIn"
    }, 
    {
        id:2,
        Icon: FiTwitter,
        linkUrl:"https://twitter.com/claranjeri_",
        title:"Twitter"
        },
    {
        id:3,
        Icon: FiInstagram,
        linkUrl:"https://www.instagram.com/claranjeri_/",
        title:"Instagram"
    },
    {
        id:4,
        Icon: FiMail,
        linkUrl:"mailto:claranjeri2@gmail.com",
        title:"Email"
    },
    {   
        id:5,
        Icon: FiPhoneCall,
        linkUrl:"tel:+254712345678",
        title:"Phone"
    }
];