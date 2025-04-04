import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext.jsx';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skills="HTML" />
            <SkillList src={checkMarkIcon} skills="CSS" />
            <SkillList src={checkMarkIcon} skills="Javascript" />
            <SkillList src={checkMarkIcon} skills="Typescript" />
            <SkillList src={checkMarkIcon} skills="Node" />
        </div>
        <hr />
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skills="React" />
            <SkillList src={checkMarkIcon} skills="Angular" />
            <SkillList src={checkMarkIcon} skills="Vue" />
            <SkillList src={checkMarkIcon} skills="Tailwind CSS" />
        </div>
        <hr />
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skills="Redux" />
            <SkillList src={checkMarkIcon} skills="webpack" />
            <SkillList src={checkMarkIcon} skills="Git" />
            <SkillList src={checkMarkIcon} skills="Jest" />
            <SkillList src={checkMarkIcon} skills="Bootstrap" />
        </div>
    </section>
  );
}

export default Skills;
