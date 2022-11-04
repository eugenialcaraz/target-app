import React from "react";
import { Button, Icon } from "@components/common";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={`${styles.container} flex-column`}>
      <div className="flex-column">
        <Icon name="logo" />
        <h1>
          Welcome to <strong>TARGET</strong>
        </h1>
        <h2>Find people near you & Connect</h2>
      </div>
      <ul>
        <li>
          <p>
            Create a target by clicking wherever on the map, specify the ratio
            and and a topic: Travel, Dating, Music, etc.
          </p>
        </li>
        <li>
          <p>
            <strong>TARGET </strong>will start a chat whenever you’ve a match.
            <br />
            You can always dismiss a conversation if you’re not interested.
          </p>
        </li>
      </ul>
      <Button type="button" value="OK; GOT IT!" />
    </div>
  );
};

export { Welcome };
