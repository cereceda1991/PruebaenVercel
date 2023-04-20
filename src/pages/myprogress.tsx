import styles from "../styles/myprogress.module.css";
import { BiSearchAlt } from "react-icons/bi";
import SideBar from "@/components/SideBar";
import SideBarMobile from "@/components/SideBarMobile";
import { useEffect, useCallback } from "react";
import MyProgressSection from "@/components/MyProgressSection";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getCourses } from "@/actions/coursesActions";

interface Course {
  _id: string;
  name: string;
  numModules: number;
  numCompletedModules: number;
  Module: [];
}

interface CoursesList {
  coursesList: Course[];
}

function MyProgress() {
  const dispatch = useAppDispatch();

  const fetchGetCourses = useCallback(() => {
    dispatch(getCourses());
  }, [dispatch]);

  useEffect(() => {
    fetchGetCourses();
  }, [fetchGetCourses]);

  const { coursesList } = useAppSelector(
    (rootReducer: { courses: CoursesList }) => rootReducer.courses
  );

  // const { authList } = useAppSelector((rootReducer) => rootReducer.auth);

  return (
    <div className={styles.container__mainmyprogress}>
      <div className={styles.container__sideBar}>
        <SideBar />
      </div>
      <div className={styles.container__sideBarmobile}>
        <SideBarMobile />
      </div>
      <div className={styles.container__myprogress}>
        <header>
          <h1>Mi progreso</h1>
          <form>
            <input></input>
            <button>
              <BiSearchAlt />
            </button>
          </form>
        </header>
        <div className={styles.container___sections}>
          {coursesList?.map((course) => (
            <MyProgressSection
              key={course?._id}
              title={course.name}
              numModules={course.Module.length}
              numCompletedModules={0}
              Module={course?.Module}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProgress;
