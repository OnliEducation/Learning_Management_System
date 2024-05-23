import { Link } from 'react-router-dom';
import { Button } from '../../../shared/ui/components/Button';

import styles from "./Intro.module.css"
import { IIntro } from '../model/types';

export function Intro({ className }: IIntro): JSX.Element {
 
    return (
                <section className={className ? styles.intro + ' ' + className : styles.intro }>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Unlock Your Potential with Byway</h2>
                        <p className={styles.description}>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success.</p>
                        <Link to={'/signup'} >
                            <Button>
                                Start Your Instructor Journey
                            </Button>
                        </Link>
                    </div>
                    <img className={styles.image} src={'src/shared/ui/images/Hero.png'} alt='Intro Image' />
                </section>
    )
}