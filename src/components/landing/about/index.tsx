import React from "react";
import { Button } from "@components/common";

import { Link } from "react-router-dom";

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.aboutHeader}>What’s TARGET?</h1>
      <p className={styles.about}>
        Cat ipsum dolor sit amet, scratch the furniture. Spit up on light gray
        carpet instead of adjacent linoleum cough furball yet lounge in doorway
        but gnaw the corn cob and sit by the fire rub face on everything. Flop
        over under the bed, or immediately regret falling into bathtub but swat
        turds around the house. All of a sudden cat goes crazy bleghbleghvomit
        my furball really tie the room together for destroy couch. Need to chase
        tail inspect anything brought into the house, yet sleep on dog bed,
        force dog to sleep on floor. Cat snacks. Eat owner&aposs food nap all
        day, for chase imaginary bugs, yet throwup on your pillow.
        Bleghbleghvomit my furball really tie the room together sun bathe attack
        the dog then pretend like nothing happened Gate keepers of hell and
        destroy couch, so find empty spot in cupboard and sleep all day groom
        yourself 4 hours - checked, have your beauty sleep 18 hours - checked,
        be fabulous for the rest of the day - checked!.
      </p>

      <Link to="/sign-in">
        <Button type="button" value="Get started!" />
      </Link>
    </div>
  );
};

export { About };
