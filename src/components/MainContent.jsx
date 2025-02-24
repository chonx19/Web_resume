import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import P2Project from '../assets/project2.png';
import P22Project from '../assets/project2_2.png';
import P3Project from '../assets/project3.png';
import P32Project from '../assets/project3_2.png';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function MainContent() {
  const projects = [
    {
      year: 'Year 1',
      title: 'Line-Following Car Project (Arduino Uno and ESP32)',
      description: 'Developed an autonomous car using Arduino Uno and ESP32 that could follow a pre-defined line path.',
      images: []
    },
    {
      year: 'Year 2',
      title: 'Automatic Bolt and Nut Sorting Machine Project',
      description: 'Designed and built a system for sorting bolts and nuts efficiently based on size and type',
      images: [P2Project, P22Project],
      links: [
        {
          href: 'https://drive.google.com/file/d/15do5yWmIihOwjg6GTI-LONQpqtSTcYe1/view?usp=sharing',
          text: 'View Project Documentation'
        }
      ]
    },
    {
      year: 'Year 3',
      title: 'Robotic Arm with Camera and Object Tracking',
      description: 'Created a robotic arm equipped with a camera for real-time object detection and tracking',
      images: [P32Project, P3Project],
      links: [
        {
          href: 'https://drive.google.com/file/d/15_brfkTIrXK04y6EXoFs2aKdkWK_-mdv/view?usp=sharing',
          text: 'View Project Documentation'
        },
        {
          href: 'https://www.facebook.com/share/v/1Wo7KVvBF2/',
          text: 'View Interview Project'
        }
      ]
    }
  ];

  return (
    <motion.div 
      className="main-content"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1>CHANAPRACHPAKORN NGERNMO</h1>
        <div className="subtitle">ROBOTICS AND AUTOMATION SYSTEM ENGINEERING</div>
      </motion.header>

      <motion.section 
        className="about-me"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2>ABOUT ME</h2>
        <p>
          Hello, my name is Earth or Chon. I am currently a third-year student in the
          second semester at Kasetsart University, Sriracha Campus, majoring in Robotics
          and Automation System Engineering (International Program). I have basic skills
          in designing and developing automation systems and a strong interest in
          furthering my expertise through hands-on experience. Additionally, I am a fast
          learner and skilled in machine repair. I am seeking an internship opportunity to
          enhance my practical knowledge and contribute to innovative projects.
        </p>
      </motion.section>

      <motion.section 
        className="experience"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h2>EXPERIENCE</h2>
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="exp-item"
            variants={item}
          >
            <h3>{project.title}</h3>
            <h4>{project.year}</h4>
            <p>{project.description}</p>
            {project.images && project.images.length > 0 && (
              <div className="project-images">
                {project.images.map((img, imgIndex) => (
                  <motion.img
                    key={imgIndex}
                    src={img}
                    alt={`${project.title} image ${imgIndex + 1}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                ))}
              </div>
            )}
            {project.links && (
              <div className="project-links">
                {project.links.map((link, linkIndex) => (
                  <motion.a
                    key={linkIndex}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.text}
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  );
}

export default MainContent;
