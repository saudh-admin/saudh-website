import './project.scss';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import '../Services/services.scss'

const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        <img src={project.image} alt={project.title} />
        <div className='service-col-heading-text'>
                            <div className='head'><h1>{project.title}</h1><h3>2022</h3></div>
                            <div className='para'>{project.description}</div>
                        </div>
      </div>
    );
  };

export default ProjectCard;