import React, { useEffect, useState } from "react";

import {
  BiCaretUp,
  BiLock,
  BiCaretRightCircle,
  BiCheckCircle,
  BiHappyHeartEyes,
  BiCaretDown,
} from "react-icons/bi";
import styles from "../styles/myprogress.module.css";
import axios from "axios";
import CardClasses from "./CardClasses";
import Link from "next/link";

interface Section {
  title: string;
  numModules: number;
  numCompletedModules: number;
  Module: string[];
}

interface ModuleData {
  _id: string;
  name: string;
  classes: string[];
  subtitle: string;
}

function MyProgressSection(props: Section & { Module: string[] }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [moduleData, setModuleData] = useState<ModuleData[]>([]);

  const [isCollapsedModule, setisCollapsedModule] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleCollapseModules = () => {
    setisCollapsedModule(!isCollapsedModule);
  };

  useEffect(() => {
    const fetchData = async () => {
      const promises = props.Module.map((moduleId: string) => {
        return axios.get(
          `https://verbify.onrender.com/api/modules/${moduleId}`
        );
      });
      const results = await Promise.all(promises);
      const modules = results.map((res) => res.data);
      setModuleData(modules);
    };
    fetchData();
  }, []);

  return (
    <section>
      <div
        className={`${styles.container__section} ${
          isCollapsed ? "" : styles.collapsed
        }`}
      >
        <p>{props.title}</p>
        <button onClick={toggleCollapse}>
          {isCollapsed ? (
            <BiLock />
          ) : (
            <div className={styles.cardCourse__Count}>
              <h5>
                {props.numCompletedModules}/{props.numModules}
              </h5>
              <BiCaretUp />
            </div>
          )}
        </button>
      </div>
      <div className={styles.container__course}>
        {!isCollapsed &&
          moduleData?.map((module) => (
            <div key={module?._id}>
              <div className={styles.container_classes}>
                <div>
                  <button className={styles.button_BiHappy}>
                    <BiHappyHeartEyes
                      style={{ background: "#F1DDC5", borderRadius: 10 }}
                    />
                  </button>
                  <h3>{module?.name}</h3>
                </div>
                <div>
                  <button>
                    <Link
                      href={`/classroom/${module?.classes[0]}`}
                      style={{ color: "#2AEF4A" }}
                    >
                      <BiCaretRightCircle />
                    </Link>
                  </button>
                  <button>
                    <BiCheckCircle style={{ color: "#2AEF4A" }} />
                  </button>

                  <button onClick={toggleCollapseModules}>
                    {isCollapsedModule ? <BiCaretUp /> : <BiCaretDown />}
                  </button>
                </div>
              </div>
              <div className={styles.subtitle_class}>
                <p>{module?.subtitle}</p>
                <h1>0/{module?.classes?.length}</h1>
              </div>
              <div>
                <hr className={styles.line_Heigth} />
              </div>
              <div className={styles.container_class}>
                {isCollapsedModule && (
                  <CardClasses id={module?._id} classes={module?.classes} />
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default MyProgressSection;
