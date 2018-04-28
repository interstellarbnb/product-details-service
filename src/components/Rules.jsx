import React from 'react';
import { Panel } from 'react-bootstrap';
import styles from '../../stylesheets/rules-style.css';

const Rules = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}> House Rules </p>
      </div>
      <div className={styles.ruleContainer}>
        <div className={styles.list}>
        {props.info.list.map((rule) => (
          <p className={styles.rule} key={rule}> {rule} </p>
          ))
        }
          <Panel className={styles.panelContainer}>
            <Panel.Toggle className={styles.panelTitle}> Read all rules </Panel.Toggle>
            <Panel.Collapse>
              <Panel.Body>
                {props.info.expanded.map(rule => (
                  <p>{rule}</p>
                ))}
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default Rules;
