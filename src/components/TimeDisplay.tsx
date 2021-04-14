import React, { memo } from "react";
import * as dayjs from "dayjs";

// Using dayjs to take advantage of some great formatting features that native JS dates dont have
const DATE_TIME_DISPLAY_FORMAT = "MMM D, YYYY, h:mm A";
export const TimeDisplay = memo(({ time }: { time: number }) => {
  const dateTimeObject = dayjs(new Date(time));
  return <>{dateTimeObject.format(DATE_TIME_DISPLAY_FORMAT)}</>;
});
