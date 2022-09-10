import React from "react";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { Checkbox } from "@mui/material";
import { styled } from '@mui/material/styles';

import "./AssignmentTask.css";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: "#85B2AA",
    '&.Mui-checked': {
      color: "#85B2AA",
    },
  }));

export default function AssignmentTask({ task, setDone }) {
    return (
        <div className="assignment-task">
            <div className="task-name">{task.name}</div>
            <CustomCheckbox 
                icon={<CircleOutlinedIcon />}
                checkedIcon={<CircleIcon />}
                checked={task.done}
                onClick={() => setDone(task.id)}
            />
        </div>
    );
}