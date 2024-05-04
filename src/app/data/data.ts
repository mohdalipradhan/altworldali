import data from "../../../public/300 (1).jpg";
import dataa from "../../../public/300 (2).jpg";
import datab from "../../../public/300 (3).jpg";
import datac from "../../../public/300 (4).jpg";
import datad from "../../../public/300.jpg";



let people = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    percentage: Math.round((70 + 60 + 50 + 80) / 4),
    behavioral: 60,
    communication: 50,
    situationHandling: 80,
    experience: "5 years in sales",
    hobbies: ["reading", "hiking"],
    introduction: "Experienced sales professional with a passion for reading and hiking.",
    avatar: data
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    percentage: Math.round((60 + 50 + 90 + 40) / 4),
    behavioral: 50,
    communication: 90,
    situationHandling: 40,
    experience: "3 years in marketing",
    hobbies: ["painting", "traveling"],
    introduction: "Creative marketing professional who enjoys painting and exploring new destinations.",
    avatar: dataa
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    percentage: Math.round((40 + 75 + 60 + 55) / 4),
    behavioral: 75,
    communication: 60,
    situationHandling: 55,
    experience: "8 years in finance",
    hobbies: ["photography", "gardening"],
    introduction: "Finance professional with a keen interest in photography and gardening.",
    avatar: datab
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    percentage: Math.round((37 + 70 + 80 + 61) / 4),
    behavioral: 70,
    communication: 80,
    situationHandling: 61,
    experience: "6 years in engineering",
    hobbies: ["playing guitar", "cooking"],
    introduction: "Experienced engineer who enjoys playing guitar and experimenting with new recipes.",
    avatar: datac
  },
  {
    name: "Emily Williams",
    email: "emily.williams@example.com",
    percentage: Math.round((65 + 44 + 44 + 44) / 4),
    behavioral: 50,
    communication: 44,
    situationHandling: 44,
    experience: "4 years in education",
    hobbies: ["playing piano", "volunteering"],
    introduction: "Passionate educator who loves playing piano and giving back to the community through volunteering.",
    avatar: datad
  }
];

export default people;
