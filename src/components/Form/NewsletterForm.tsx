import styles from "./Form.module.scss";
import React from "react";

const NewsletterForm: React.FC = () => {
  return (
    <div className={styles.form}>
      <h4 className={styles.title}>Newsletter</h4>
      <form>
        <div className={styles.field}>
          <input
            type="email"
            name={"email"}
            id={"email"}
            required
            placeholder={"Enter your email address"}
          />
        </div>
        <button className={`${styles.button} button`}>Subscribe Now</button>
      </form>
    </div>
  );
};

export default NewsletterForm;
