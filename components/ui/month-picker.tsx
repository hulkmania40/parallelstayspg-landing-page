import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
interface Props {
    value: Date;
    onChange: (date: Date) => void;
}
export default function MonthPicker({
    value,
    onChange
}: Props) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(value, "MMMM yyyy")}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Calendar
                    mode="single"
                    captionLayout="dropdown"
                    selected={value}
                    onSelect={(date) => {
                        if (date)
                            onChange(date);
                    }}
                    defaultMonth={value}
                />
            </PopoverContent>
        </Popover>
    );
}