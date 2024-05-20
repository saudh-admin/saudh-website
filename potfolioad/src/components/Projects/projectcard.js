import './project.scss';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="project-card-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-card-content">
        <div className="project-card-header">
          <h2 className="project-card-title">{project.title}</h2>
          <p className="project-card-year">2022</p>
        </div>
        <div className="project-card-explore">
          <motion.img
                    src="right-arrow.png"
                    alt="Right Arrow"
                    className="project-card-arrow"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
          <a href={`/project/${project.id}`} className="project-card-explore-link">
            Explore
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;