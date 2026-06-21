"use client";

import Navbar from "@/components/organisms/Navbar";
import CommitteeHero from "@/components/organisms/CommitteeHero";
import CommitteeSection from "@/components/organisms/CommitteeSection";
import Footer from "@/components/organisms/Footer";
import { CommitteeMember } from "@/types";

const img = (file: string) => `/assets/images/committee/${file}`;

const PROGRAM_COMMITTEE: CommitteeMember[] = [
  // PC Chairs first (per organisers' instruction)
  { id: "pc-1",  image: img("img3_GR.svg"),                  name: "R Govindarajan",         institute: "IISc, Bangalore",  position: "(PC Chair)",  link: "https://eecs.iisc.ac.in/people/govindarajan-r/" },
  { id: "pc-2",  image: img("img9_RR.svg"),                  name: "Ramana Radhakrishnan",   institute: "NVIDIA",           position: "(PC Chair)",  link: "https://in.linkedin.com/in/themadrasi" },
  // PC Members (alphabetical)
  { id: "pc-3",  image: img("abhijat-vichare.png"),          name: "Abhijat Vichare",       institute: "ACM India",        position: "(PC Member)", link: "https://www.linkedin.com/in/abhijat-vichare-8288222/" },
  { id: "pc-4",  image: img("ashish-mishra.jpg"),            name: "Ashish Mishra",          institute: "IIT Hyderabad",    position: "(PC Member)", link: "https://www.linkedin.com/in/ashishmishraiisc/" },
  { id: "pc-5",  image: img("img2_DD.svg"),                  name: "Dibyendu Das",           institute: "Qualcomm",         position: "(PC Member)", link: "https://www.linkedin.com/in/dibyendu-das-80341b8/" },
  { id: "pc-6",  image: img("saiyedul-islam.jpg"),           name: "Dr. Saiyedul Islam",     institute: "AMD",              position: "(PC Member)", link: "https://in.linkedin.com/in/saiyedulislam" },
  { id: "pc-7",  image: img("unnikrishnan-c.png"),           name: "Dr. Unnikrishnan C",     institute: "IIT Palakkad",     position: "(PC Member)", link: "https://unnikrishnan-c.github.io/" },
  { id: "pc-8",  image: img("girish-bharambe.jpg"),          name: "Girish Bharambe",        institute: "NVIDIA",           position: "(PC Member)", link: "https://www.linkedin.com/in/girish-bharambe-7444349/" },
  { id: "pc-9",  image: img("jyothi-vedurada.jpg"),          name: "Jyothi Vedurada",        institute: "IIT Hyderabad",    position: "(PC Member)", link: "https://www.linkedin.com/in/jyothi-vedurada-87084226/" },
  { id: "pc-10", image: img("img4_KN.svg"),                  name: "Kartik Nagar",           institute: "IIT Madras",       position: "(PC Member)", link: "https://kartiknagar.github.io/" },
  { id: "pc-11", image: img("kc-sivaramakrishnan.jpg"),      name: "KC Sivaramakrishnan",    institute: "IIT Madras",       position: "(PC Member)", link: "https://www.linkedin.com/in/kc-sivaramakrishnan-25061a14/" },
  { id: "pc-12", image: img("img6_KVR.svg"),                 name: "Komondoor V Raghavan",   institute: "IISc, Bangalore",  position: "(PC Member)", link: "https://www.linkedin.com/in/komondoor-v-raghavan-882b1b6/" },
  { id: "pc-13", image: img("img5_KRN.svg"),                 name: "Krishna Nandivada",      institute: "IIT Madras",       position: "(PC Member)", link: "http://www.cse.iitm.ac.in/~krishna/" },
  { id: "pc-14", image: img("img7_MT.svg"),                  name: "Manas Thakur",           institute: "IIT Bombay",       position: "(PC Member)", link: "https://www.cse.iitb.ac.in/~manas/" },
  { id: "pc-15", image: img("nikhil-hegde.jpg"),             name: "Nikhil Hegde",           institute: "IIT Dharwad",      position: "(PC Member)", link: "https://hegden.github.io/" },
  { id: "pc-16", image: img("img8_RU.svg"),                  name: "Ramakrishna Upadrasta",  institute: "IIT Hyderabad",    position: "(PC Member)", link: "https://people.iith.ac.in/ramakrishna/" },
  { id: "pc-17", image: img("sameera-deshpande.jpg"),        name: "Sameera Deshpande",      institute: "Quadric Inc.",     position: "(PC Member)", link: "https://www.linkedin.com/in/sameeradeshpande/" },
  { id: "pc-18", image: img("sanchari-sen.jpg"),             name: "Sanchari Sen",           institute: "IISc, Bangalore",  position: "(PC Member)", link: "https://in.linkedin.com/in/sanchari-sen" },
  { id: "pc-19", image: img("img10_SJ.svg"),                 name: "Saurabh Joshi",          institute: "Supra",            position: "(PC Member)", link: "https://sbjoshi.github.io/" },
  { id: "pc-20", image: img("shekhar-divekar.jpg"),          name: "Shekhar Divekar",        institute: "NVIDIA",           position: "(PC Member)", link: "https://www.linkedin.com/in/shekhardivekar/" },
  { id: "pc-21", image: img("subhajit-roy.jpg"),             name: "Subhajit Roy",           institute: "IIT Kanpur",       position: "(PC Member)", link: "https://www.linkedin.com/in/subhajit-roy-iitk/" },
  { id: "pc-22", image: img("swarnendu-biswas.jpg"),         name: "Swarnendu Biswas",       institute: "IIT Kanpur",       position: "(PC Member)", link: "https://www.cse.iitk.ac.in/users/swarnendu/" },
  { id: "pc-23", image: img("swati-jaiswal.png"),            name: "Swati Jaiswal",          institute: "VNIT, Nagpur",     position: "(PC Member)", link: "https://vnit.ac.in/engineering/cse/dr-swati-jaiswal/" },
  { id: "pc-24", image: img("img12_UB.svg"),                 name: "Uday Bondhugula",        institute: "IISc, Bangalore",  position: "(PC Member)", link: "https://www.csa.iisc.ac.in/~udayb/" },
  { id: "pc-25", image: img("img1_UK.svg"),                  name: "Uday Khedker",           institute: "IIT Bombay",       position: "(PC Member)", link: "https://www.cse.iitb.ac.in/~uday/" },
];

const STEERING_COMMITTEE: CommitteeMember[] = [
  {
    id: "sc-1",
    image: "/assets/images/committee/prof_krishna_nandivada.webp",
    name: "Prof. Krishna Nandivada",
    institute: "IIT Madras",
    position: "(SC Member)",
    link: "http://www.cse.iitm.ac.in/~krishna/",
  },
  {
    id: "sc-2",
    image: "/assets/images/committee/img9_RR.svg",
    name: "Ramana Radhakrishnan",
    institute: "Director - CPU Compilers, NVIDIA",
    position: "(SC Member)",
    link: "https://in.linkedin.com/in/themadrasi",
  },
  {
    id: "sc-3",
    image: "/assets/images/committee/sameer_sahasrabuddhe.webp",
    name: "Sameer Sahasrabuddhe",
    institute: "Principal Member Of Technical Staff at AMD",
    position: "(SC Member)",
    link: "https://www.linkedin.com/in/sameerds/",
  },
  {
    id: "sc-4",
    image: "/assets/images/committee/professor_sorav_bansal.webp",
    name: "Prof. Sorav Bansal",
    institute: "Graviton Fellow at Graviton Research LLP | IIT Delhi",
    position: "(SC Member)",
    link: "https://sorav.compiler.ai/",
  },
  {
    id: "sc-5",
    image: "/assets/images/committee/img1_UK.svg",
    name: "Prof. Uday Khedker",
    institute: "IIT Bombay",
    position: "(SC Member)",
    link: "https://www.cse.iitb.ac.in/~uday/",
  },
];

const ORGANIZING_COMMITTEE: CommitteeMember[] = [
  {
    id: "oc-1",
    image: "/assets/images/committee/image2_OC_AP.svg",
    name: "Ashutosh Pandey",
    institute: "AMD",
    position: "(Chair)",
    link: "https://www.linkedin.com/in/ashupdsce/",
  },
  {
    id: "oc-2",
    image: "/assets/images/committee/image3_OC_PK.svg",
    name: "Pradeep Kumar",
    institute: "NVIDIA",
    position: "(Co-chair)",
    link: "https://www.linkedin.com/in/pradeep-kumar-786a66114",
  },
  {
    id: "oc-3",
    image: "/assets/images/committee/image4_OC_PC.svg",
    name: "Prerona Chaudhuri",
    institute: "NVIDIA",
    position: "(Co-chair)",
    link: "https://www.linkedin.com/in/prerona-chaudhuri-893091141/",
  },
  {
    id: "oc-4",
    image: "/assets/images/committee/image5_OC_RK.svg",
    name: "Dr. Raveendra Kumar",
    institute: "TCS Research",
    position: "(Co-chair)",
    link: "https://www.linkedin.com/in/raveendrakumar/",
  },
];

export default function CommitteeContainer() {
  return (
    <main style={{ backgroundColor: "var(--color-background)" }}>
      <Navbar onOpenModal={() => {}} />
      <CommitteeHero />
      <CommitteeSection
        id="program-committee"
        kicker="Program Committee"
        title="Meet the"
        highlight="Program Committee"
        members={PROGRAM_COMMITTEE}
      />
      <CommitteeSection
        id="steering-committee"
        kicker="Steering Committee"
        title="Meet the"
        highlight="Steering Committee"
        members={STEERING_COMMITTEE}
      />
      <CommitteeSection
        id="organizing-committee"
        kicker="Organizing Committee"
        title="Meet the"
        highlight="Organizing Committee"
        members={ORGANIZING_COMMITTEE}
      />
      <Footer />
    </main>
  );
}
