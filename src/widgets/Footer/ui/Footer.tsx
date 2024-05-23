import { IFooter } from "../model/types";
import styles from "./Footer.module.css"
import Logo from "../../../shared/ui/icons/logo.svg?react"
import GitHub from "../../../shared/ui/icons/github.svg?react"
import Facebook from "../../../shared/ui/icons/facebook.svg?react"
import Google from "../../../shared/ui/icons/google.svg?react"
import Twitter from "../../../shared/ui/icons/twitter.svg?react"
import Microsoft from "../../../shared/ui/icons/microsoft.svg?react"

export function Footer({ className }: IFooter): JSX.Element {
    return (
        <div className={className ? styles.main + ' ' + className : styles.main}>
            <div className={styles.description}>
                <span className={styles.logoWrapper}>
                    <Logo />
                    ByWay
                </span>
                <p>Empowering learners through accessible and engaging online education.<br /> Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.</p>
            </div>

            <div className={styles.help}>
                <h3 className={styles.title}>Get Help</h3>
                <ul className={styles.list}>
                    <li>Contact Us</li>
                    <li>Latest Articles</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div className={styles.programs}>
                <h3 className={styles.title}>Programs</h3>
                <ul className={styles.list}>
                    <li>Art & Design</li>
                    <li>Business</li>
                    <li>IT & Software</li>
                    <li>Languages</li>
                    <li>Programming</li>
                </ul>
            </div>

            <div className={styles.contact}>
                <h3 className={styles.title}>Contact Us</h3>
                <address className={styles.address}>
                    <dl className={styles.descriptionList}>
                        <div className={styles.descriptionElement}>
                            <dt className={styles.descriptionTermin}>Address:</dt>
                            <dd className={styles.descriptionDetails}>123 Main Street, Anytown, CA 12345</dd>
                        </div>

                        <div className={styles.descriptionElement}>
                            <dt className={styles.descriptionTermin}>Tel:</dt>
                            <dd className={styles.descriptionDetails}>
                                <a href="tel:+1234567890">+(123) 456-7890</a>
                            </dd>
                        </div>

                        <div className={styles.descriptionElement}>
                            <dt className={styles.descriptionTermin}>Mail:</dt>
                            <dd className={styles.descriptionDetails}>
                                <a href="mailto:bywayedu@webkul.in">bywayedu@webkul.in</a>
                            </dd>
                        </div>

                    </dl>
                </address>

                <ul className={styles.social}>
                    <li>
                        <a href="https://github.com/OnliEducation/Learning_Management_System">
                            <span className={styles.cirle}>
                                <Facebook className={styles.icon} />
                            </span>

                            <span className="visually-hidden">Our facebook.</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/OnliEducation/Learning_Management_System">
                            <span className={styles.cirle}>
                                <GitHub className={styles.icon} />
                            </span>
                            <span className="visually-hidden">Our github.</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/OnliEducation/Learning_Management_System">
                            <span className={styles.cirle}>
                                <Google className={styles.icon} />
                            </span>
                            <span className="visually-hidden">Our google.</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/OnliEducation/Learning_Management_System">
                            <span className={styles.cirle}>
                                <Twitter className={styles.icon} />
                            </span>
                            <span className="visually-hidden">Our twitter.</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/OnliEducation/Learning_Management_System">
                            <span className={styles.cirle}>
                                <Microsoft className={styles.icon} />
                            </span>
                            <span className="visually-hidden">Our microsoft.</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}