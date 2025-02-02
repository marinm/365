import { Dayjs } from "dayjs";
import { DayDotType } from "../types/DayDotType";
import DayDot from "./DayDot";

function dots(now: Dayjs): DayDotType[] {
    const firstDay = now.startOf("year");
    const lastDay = now.endOf("year");

    const nDays = lastDay.diff(firstDay, "day");
    const iToday = now.diff(firstDay, "day");

    return Array(nDays)
        .fill(0)
        .map((_, index) => ({
            i: index,
            isPast: index < iToday,
            isToday: index === iToday,
            isFuture: index > iToday,
        }));
}

export function DotGrid({ now }: { now: Dayjs }) {
    return (
        <div className="dot-grid">
            {dots(now).map((dot) => (
                <DayDot dot={dot} key={`${dot.i}`} />
            ))}
        </div>
    );
}
