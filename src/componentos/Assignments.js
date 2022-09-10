import React, { useState } from "react";
import "./Assignments.css";
import AssignmentTask from "./AssignmentTask";

const tasks = [
    {
        id: 1,
        name: "psych essay",
        done: false,
    },
    {
        id: 2,
        name: "stats assignment",
        done: false,
    },
    {
        id: 3,
        name: "oosd project 2A",
        done: true,
    }
];

export default function Assignments() {
    const [assignmentTasks, setAssignmentTasks] = useState(tasks);

    const setDone = (id) => {
        setAssignmentTasks(assignmentTasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done,
                }
            }
            return task;
        }))
    }

    return (
        <div id="assignments-container">
            <h2>Assignments</h2>
            <hr />
            <article id="assignment-tasks">
                {
                    assignmentTasks.map(task => (
                        <AssignmentTask key={task.id} task={task} setDone={setDone} />
                    ))
                }
            </article>
        </div>
  );
}
