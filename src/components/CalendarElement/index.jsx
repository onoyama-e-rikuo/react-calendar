import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isSameDay, getMonth } from "../../services/calendar";
import Schedule from "../Schedule";

const CalendarElement = ({ day, month, schedules, ...props }) => {

  const today = dayjs();
  const isToday = isSameDay(day, today);
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);

  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
  return (
    <div className="element">
      <Typography
        className="date"
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? "today" : ""}>
          {day.format("D")}
        </span>
      </Typography>
      <div>
        {schedules.map(e => (
          <Schedule key={e.id} schedule={e} {...props} />
        ))}
      </div>
    </div>
  );
};

export default CalendarElement;