"use client";

import Navbar from "@/components/organisms/Navbar";
import CommitteeHero from "@/components/organisms/CommitteeHero";
import CommitteeSection from "@/components/organisms/CommitteeSection";
import Footer from "@/components/organisms/Footer";
import { CommitteeMember } from "@/types";

const PROGRAM_COMMITTEE: CommitteeMember[] = [
  {
    id: "pc-1",
    image: "/assets/images/committee/img1_UK.svg",
    name: "Prof. Uday Khedker",
    institute: "IIT Bombay",
    position: "(PC Chair)",
    link: "https://www.cse.iitb.ac.in/~uday/",
  },
  {
    id: "pc-2",
    image: "/assets/images/committee/img2_DD.svg",
    name: "Dr. Dibyendu Das",
    institute: "Sr. Director of Engineering, Qualcomm Cloud AI and Compilers",
    position: "(PC Member)",
    link: "https://www.linkedin.com/in/dibyendu-das-80341b8/",
  },
  {
    id: "pc-3",
    image: "/assets/images/committee/img3_GR.svg",
    name: "Prof. Govindarajan Ramaswamy",
    institute: "IISc Bangalore",
    position: "(PC Member)",
    link: "https://eecs.iisc.ac.in/people/govindarajan-r/",
  },
  {
    id: "pc-4",
    image: "/assets/images/committee/img4_KN.svg",
    name: "Prof. Kartik Nagar",
    institute: "IIT Madras",
    position: "(PC Member)",
    link: "https://kartiknagar.github.io/",
  },
  {
    id: "pc-5",
    image: "/assets/images/committee/img5_KRN.svg",
    name: "Prof. Krishna Nandivada",
    institute: "IIT Madras",
    position: "(PC Member)",
    link: "http://www.cse.iitm.ac.in/~krishna/",
  },
  {
    id: "pc-6",
    image: "/assets/images/committee/img7_MT.svg",
    name: "Prof. Manas Thakur",
    institute: "IIT Bombay",
    position: "(PC Member)",
    link: "https://www.cse.iitb.ac.in/~manas/",
  },
  {
    id: "pc-7",
    image: "/assets/images/committee/img8_RU.svg",
    name: "Prof. Ramakrishna Upadrasta",
    institute: "IIT Hyderabad",
    position: "(PC Member)",
    link: "https://people.iith.ac.in/ramakrishna/",
  },
  {
    id: "pc-8",
    image: "/assets/images/committee/img9_RR.svg",
    name: "Ramana Radhakrishnan",
    institute: "Director - CPU Compilers, NVIDIA",
    position: "(PC Member)",
    link: "https://in.linkedin.com/in/themadrasi",
  },
  {
    id: "pc-9",
    image: "/assets/images/committee/img10_SJ.svg",
    name: "Dr. Saurabh Joshi",
    institute: "Director of R&D, Supra Research",
    position: "(PC Member)",
    link: "https://sbjoshi.github.io/",
  },
  {
    id: "pc-10",
    image: "/assets/images/committee/img11_SS.svg",
    name: "Prof. Subodh Sharma",
    institute: "IIT Delhi",
    position: "(PC Member)",
    link: "https://subodhvsharma.github.io/",
  },
  {
    id: "pc-11",
    image: "/assets/images/committee/img12_UB.svg",
    name: "Prof. Uday Bondhugula",
    institute: "IISc, Bangalore and Polymage Labs",
    position: "(PC Member)",
    link: "https://www.csa.iisc.ac.in/~udayb/",
  },
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
    image: "/assets/images/committee/image1_OC_AK.svg",
    name: "Aditya Kumar",
    institute: "Distinguished Speaker at ACM",
    position: "(General Chair)",
    link: "https://linkedin.com/in/hiraditya",
  },
  {
    id: "oc-2",
    image: "/assets/images/committee/image2_OC_AP.svg",
    name: "Ashutosh Pandey",
    institute: "AMD",
    position: "(Co-chair)",
    link: "https://www.linkedin.com/in/ashupdsce/",
  },
  {
    id: "oc-3",
    image: "/assets/images/committee/image3_OC_PK.svg",
    name: "Pradeep Kumar",
    institute: "NVIDIA",
    position: "(Co-chair)",
    link: "https://www.linkedin.com/in/pradeep-kumar-786a66114",
  },
  {
    id: "oc-4",
    image: "/assets/images/committee/image4_OC_PC.svg",
    name: "Prerona Chaudhuri",
    institute: "NVIDIA",
    position: "(Co-chair)",
    link: "https://www.linkedin.com/in/prerona-chaudhuri-893091141/",
  },
  {
    id: "oc-5",
    image: "/assets/images/committee/image5_OC_RK.svg",
    name: "Dr. Raveendra Kumar",
    institute: "TCS Research",
    position: "(Volunteer)",
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
