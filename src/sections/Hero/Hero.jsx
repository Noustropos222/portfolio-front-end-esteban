import styles from './HeroSyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import TwitterLight from '../../assets/twitter-light.svg';
import TwitterDark from '../../assets/twitter-dark.svg';
import GithubLight from '../../assets/github-light.svg';
import GithubDark from '../../assets/github-dark.svg';
import LinkedinLight from '../../assets/linkedin-light.svg';
import LinkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? TwitterLight : TwitterDark;
    const GithubIcon = theme === 'light' ? GithubLight : GithubDark;
    const LinkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;

  return (
    <section id="hero" className={styles. Container}>
        <div className={styles.colorModeContainer}>
            <img
            className={styles.hero}
            src={heroImg}
            alt="Profile picture"
            />
            <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>Harry
                <br />
                Johnsen
            </h1>
            <h2>Front End Developer</h2>
            <span>
                <a href='https://www.twitter.com/' target='_blank'>
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href='https://www.github.com/' target='_blank'>
                    <img src={GithubIcon} alt="Github icon" />
                </a>
                <a href='https://www.Linkedin.com/' target='_blank'>
                    <img src={LinkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <a href={CV} download>
                <button className='hover' download>
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero;