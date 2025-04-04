import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png';
import hipster from '../../assets/hipsster.png';
import fitness from '../../assets/fitlift.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard 
            src={viberr} 
            link={'https://www.google.co.uk/' } 
            h3="Viberr" 
            p="Streaming app" 
          />
          <ProjectCard 
            src={freshBurger} 
            link={'https://www.google.co.uk/' } 
            h3="Fresh Burger" 
            p="Restaurant app"
          />
          <ProjectCard 
            src={hipster} 
            link={'https://www.google.co.uk/' } 
            h3="Hipster" 
            p="Glasses Shop"
          />
          <ProjectCard 
            src={fitness} 
            link={'https://www.google.co.uk/' } 
            h3="FitLift" 
            p="Fitness app"
          />
        </div>
      </section>
  )
}

export default Projects

