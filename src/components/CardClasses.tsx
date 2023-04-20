import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BiCaretRightCircle } from "react-icons/bi";
import styles from "../styles/myprogress.module.css";
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { getModuleById } from "@/actions/modulesActions";

interface ClassData {
  _id: string;
  name: string;
  content: string;
  // otros campos que necesites
}

interface CardClassesProps {
  id: string;
  classes: string[];
}

function CardClasses(props: CardClassesProps) {
  const [classData, setClassData] = useState<ClassData[]>([]);

  const dispatch = useAppDispatch();

  const setModuleForUnitsBox = useCallback(() => {
    dispatch(getModuleById(props.id));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = props.classes.map((classId: string) => {
        return axios.get(`https://verbify.onrender.com/api/classes/${classId}`);
      });
      const results = await Promise.all(promises);
      const classes = results?.map((res) => res.data);
      setClassData(classes);
    };
    fetchData();
  }, [props.classes]);

  return (
    <div className={styles.card_class}>
      {classData?.map((classInfo) => (
        <div key={classInfo?._id}>
          {classInfo?.name !== null && classInfo?.name.length > 0 && (
            <div
              className={styles.classes_content}
              onClick={setModuleForUnitsBox}
            >
              <Link
                href={`/classroom/${classInfo._id}`}
                style={{ color: "#2AEF4A" }}
              >
                <BiCaretRightCircle size={20} />
              </Link>
              <h4>
                <Link href={`/classroom/${classInfo._id}`}>
                  {classInfo?.name}
                </Link>
              </h4>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default CardClasses;
