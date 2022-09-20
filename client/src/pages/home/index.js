import React from "react";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your name"
        />

        <select className={styles.input}>
          <option value="javascript">Javascript</option>
          <option value="node">Node</option>
          <option value="react">React</option>
          <option value="express">Express</option>
        </select>
        <button className="btn btn-secondary">Join Room</button>
      </div>
    </div>
  );
};

export default Home;
