import styles from './Team.module.css';
import brettZiegler from '../assets/images/Brett-Z.png';
import brettBorle from '../assets/images/Brett-B.png';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Brett Ziegler',
    role: 'PARTNER',
    image: brettZiegler,
    bio: "From an early fascination with building and problem-solving to leading a travel tech company, Brett has always been drawn to tackling complex challenges. Whether conquering mountain trails or starting his next venture, Brett brings deliberate strategy and transparency to every opportunity, ensuring you're supported and confident at every step of your investment journey.",
  },
  {
    name: 'Brett Borle',
    role: 'PARTNER',
    image: brettBorle,
    bio: "Beginning his career in the energy industry, Brett applies his sharp analytical mind to find property investments full of potential, personally guiding you through smart, lasting acquisitions. Whether taking his best shot on the soccer field or hunting for the next valuable property, Brett's drive for success will help build and protect your carefully crafted portfolio.",
  },
];

const Team = () => {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          The <em>Expertise</em> Behind Your Investment.
        </h2>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.name} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.memberImage}
                />
              </div>

              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
