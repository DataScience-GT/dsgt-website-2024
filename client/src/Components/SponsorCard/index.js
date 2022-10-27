//imports
import styles from "./SponsorCard.module.scss";

const SponsorCard = (params) => {
    return (
        <div className={styles.SponsorCard}>
            <div className={styles.imageContainer}>
                <img src={params.image} alt={params.name} />
            </div>
        </div>
    );
};
export default SponsorCard;
