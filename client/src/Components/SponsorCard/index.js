//imports
import styles from "./SponsorCard.module.scss";

const SponsorCard = (params) => {
    return (
        <div className={styles.SponsorCard} title={params.name}>
            <a href={params.link} target="_blank" rel="noreferrer">
                <div className={styles.imageContainer}>
                    <img src={params.logo} alt={params.name} />
                </div>
            </a>
        </div>
    );
};
export default SponsorCard;
