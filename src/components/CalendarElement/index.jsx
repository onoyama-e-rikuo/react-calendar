import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay, getMonth } from "../../services/calendar";

const CalendarElement = ({ day, month }) => {
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
    </div>
  );
};

export default CalendarElement;