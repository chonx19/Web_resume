import { useSpring, animated, useTrail } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../assets/profile.jpg';

const Sidebar = () => {
  const profileAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 300, friction: 15 },
  });

  const contactItems = [
    { icon: faPhone, text: '096-987-1077' },
    { icon: faEnvelope, text: 'Chanaprachpakorn@ku.th' },
    { icon: faMapMarkerAlt, text: '121/57 Moo.2,Bueng, Si Racha, Chon Buri' },
  ];

  const contactTrail = useTrail(contactItems.length, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 300, friction: 20 },
    delay: 300,
  });

  const expertiseItems = [
    'SolidWorks Design',
    'AI Vision Training',
    'Python UI Development',
    'Mechanical Calculations',
    'Basic PLC Programming',
  ];

  const programItems = [
    'SolidWorks',
    'Visual studio code',
    'GX work3',
    'Arduino IDE',
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-corner corner-top-left"></div>
      <div className="sidebar-corner corner-top-right"></div>
      <div className="sidebar-corner corner-bottom-left"></div>
      <div className="sidebar-corner corner-bottom-right"></div>

      <animated.div style={profileAnimation} className="profile-image-container">
        <img src={profileImg} alt="Profile" className="profile-img" />
      </animated.div>

      <h2>📞 Contact</h2>
      <div className="contact-info">
        {contactTrail.map((style, index) => (
          <animated.p key={contactItems[index].text} style={style}>
            <FontAwesomeIcon icon={contactItems[index].icon} />
            {contactItems[index].text}
          </animated.p>
        ))}
      </div>

      <h2>🎓 Education</h2>
      <div className="education">
        <p>Kasetsart University</p>
        <p>Sriracha Campus</p>
        <p>2565 - 2568 GPA. 3.32</p>
      </div>

      <h2>💼 Skills & Tools</h2>
      <div className="skills-content">
        <h3>💡 Expertise</h3>
        <ul className="expertise-list">
          {expertiseItems.map((item, index) => (
            <animated.li 
              key={item}
              style={useSpring({
                from: { opacity: 0, transform: 'translateX(-20px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
                delay: index * 100,
              })}
            >
              {item}
            </animated.li>
          ))}
        </ul>

        <h3>🛠️ Programs</h3>
        <ul className="programs-list">
          {programItems.map((item, index) => (
            <animated.li
              key={item}
              style={useSpring({
                from: { opacity: 0, transform: 'translateX(-20px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
                delay: index * 100 + 500,
              })}
            >
              {item}
            </animated.li>
          ))}
        </ul>
      </div>

      <animated.div
        className="internship-note"
        style={useSpring({
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
          delay: 1200,
        })}
      >
        ***Can start internship in August***
      </animated.div>
    </aside>
  );
};

export default Sidebar;
