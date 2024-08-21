import IntroImage from "../../../6_shared/ui/images/Intro.png"
import { LinkComponent } from '../../../6_shared/ui/atoms/LinkComponent';
import { Icon } from "../../../6_shared/ui/atoms/Icon";

import { IIntro } from '../model/types';
import styles from "./Intro.module.css"

export function Intro({ className }: IIntro): JSX.Element {

    return (
        <section className={`${className ? className : ''} ${styles.intro}`}>
            <div className={styles.content}>
                <h1 className={`${styles.title} h1`}>Unlock Your Potential with Byway</h1>
                <p className={`${styles.description} p`}>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success.</p>
                <LinkComponent
                    className={styles.link}
                    to={'/sign-up'}>
                    <span>Start Your Instructor Journey</span>
                    <Icon className={styles.icon} name="chevron" size={24} />
                </LinkComponent>
            </div>
            <img className={styles.image} src={IntroImage} alt='Intro Image' />
        </section>
    )
}