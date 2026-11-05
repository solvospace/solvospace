import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import appConfig from "./app.config";

const socialLinks = [
    {
        label: "View the repository on GitHub",
        href: appConfig.links.github,
        title: "View the repository on GitHub",
        icon: FaGithub,
    },
    {
        label: "View X page",
        href: appConfig.links.x,
        title: "View X page",
        icon: FaXTwitter,
    },
    {
        label: "View LinkedIn page",
        href: appConfig.links.linkedin,
        title: "View LinkedIn page",
        icon: FaLinkedin,
    },
];

export default socialLinks;
