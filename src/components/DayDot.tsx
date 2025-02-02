import { DayDotType } from "../types/DayDotType";
import { classes } from "../utils/classes";

export default function DayDot({ dot }: { dot: DayDotType }) {
    const className = classes({
        dot: true,
        "dot-past": dot.isPast,
        "dot-today": dot.isToday,
        "dot-future": dot.isFuture,
    });

    return <div className={className}>•</div>;
}
