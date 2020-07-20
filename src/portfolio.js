/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Shams's Portfolio",
    title: "Hi, I'm Shams Ibne Noor",
    subTitle: emoji("A Full-stack Software Developer having an experience of building Web & Mobile applications with Reactjs / React Native / Nodejs / Python and some other cool languages and frameworks."),
    resumeLink: "https://drive.google.com/file/d/1KXbZPbuOE7p_TLZ4Bl5lHygBOoEO0HIc/view?usp=sharing"
};

// Your Social Media Link by minhajul

const socialMediaLinks = {

    github: "https://github.com/shamsrupom94",
    linkedin: "https://www.linkedin.com/in/shams-ibne-noor-05aa9015a/",
    gmail: "shams.rupom@gmail.com",
    facebook: "https://www.facebook.com/shams.rupom"
    // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: "My Skills",
    subTitle: "A Computer Science graduate working as a full-stack developer with a passion for learning about new and exciting technologies",
    skills: [
        emoji("⚡ Specialist in MERN stack application for both web and android platform"),
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
        emoji("⚡ Integration of third party services such as Firebase/ Vimeo / GoogleAPIs etc. "),
        emoji("⚡ Excellent communication skills and business problem solving skills ")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "ReactJs / Native",
            fontAwesomeClassname: require("../src/assets/icons/react.png")
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: require("../src/assets/icons/node.png")
        },
        {
            skillName: "MongoDB",
            fontAwesomeClassname: require("../src/assets/icons/mongo.png")
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: require("../src/assets/icons/js.png")
        },
        {
            skillName: "Python",
            fontAwesomeClassname: require("../src/assets/icons/python.png")
        },
        {
            skillName: "Flask",
            fontAwesomeClassname: require("../src/assets/icons/flask.png")
        },
        {
            skillName: "Firebase",
            fontAwesomeClassname: require("../src/assets/icons/firebase.png")
        },
        {
            skillName: "Android",
            fontAwesomeClassname: require("../src/assets/icons/android.png")
        },
        // {
        //     skillName: "Redux",
        //     fontAwesomeClassname: require("../src/assets/icons/redux.png")
        // },
        // {
        //     skillName: "Redis",
        //     fontAwesomeClassname: require("../src/assets/icons/redis.png")
        // },
        // {
        //     skillName: "Postman",
        //     fontAwesomeClassname: require("../src/assets/icons/postman.png")
        // },
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "ReactJs & Native",  //Insert stack or technology you have experience in
            progressPercentage: "80%"  //Insert relative proficiency in percentage
        },
        {
            Stack: "Nodejs",
            progressPercentage: "75%"
        },
        {
            Stack: "Python / Flask",
            progressPercentage: "72%"
        },
        {
            Stack: "Programming",
            progressPercentage: "65%"
        }
    ]
};


// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "SQA Intern",
            company: "Binate Solutions Ltd.",
            companylogo: require("./assets/icons/binate.png"),
            date: "November 2018 – January 2019",
            desc: "Worked as and Software Quality Assurance intern with responsibilities like Software Testing, Database Testing, DB Schema Documentation, Documenting Test-cases and Software Documentation.",
            descBullets: [
                "PostMan & Swagger.io for api testing",
                "MongoDB compass for Database testing"
            ]
        },
        {
            role: "Software Engineer",
            company: "Tech Hive Ltd.",
            companylogo: require("./assets/images/eduhive.png"),
            date: "April 2019 – July 2020",
            desc: `Worked as a Full-stack (web & android) developer on "EduHive" and "TextHive" project. EduHive is a product of Tech Hive Ltd, which is one of the leading e-learning platform in Bangladesh. TextHive is a Bulk SMS service`,
            descBullets: [
                "Reactjs for front-end web development",
                "Nodejs, MongoDB and Expressjs for back-end development",
                "React Native for android app development"
            ]
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
//TODO
const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "shamsrupom94", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
    title: "Big Projects",
    subtitle: "Some large scale projects that I have contributed to",
    projects: [

        {
            image: require("../src/assets/icons/eduhive.png"),
            link: "https://play.google.com/store/apps/details?id=com.mlipa.kwikpay&hl=ky"
        },
        {
            image: require("../src/assets/icons/scholars.png"),
            link: "https://eduhive.com.bd/"
        },
        {
            image: require("../src/assets/icons/eduhive.png"),
            link: "https://topup.co/"
        },
        {
            image: require("../src/assets/icons/texthive.png"),
            link: "https://topup.co/"
        }
    ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achivementsCards: [
        {
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image:
                "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
            footerLink: [{
                name: "View Google Assistant Action",
                url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
            }]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: "https://scontent.fdac25-1.fna.fbcdn.net/v/t1.15752-9/104298374_3072205949535801_3127220028333452807_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_eui2=AeGNqYiUg-msz487eeq7Txz0WlTE6QEM-WlaVMTpAQz5aVzY2Ytk6_gAlFPaMpVaUyvto3M4dzf5wRPY7sX3089u&_nc_ohc=AJ",
            footerLink: [
                {name: "Certification", url: ""},
                {name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/"}
            ]
        }
    ]
};

// Blogs Section

const blogSection = {

    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ]
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/",
            image:
                "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
        }
    ]
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

//Completed by minhajul
const contactInfo = {
    title: emoji("Contact Me"),
    subtitle: "Want to say hi? My Inbox is open for all.",
    number: "+8801941083577",
    email_address: "shams.rupom@gmail.com"
};

//Twitter Section

const twitterDetails = {

    userName: "twitter"//Replace "twitter" with your twitter username without @

};
export {
    greeting,
    socialMediaLinks,
    skillsSection,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};
