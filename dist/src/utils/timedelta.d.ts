interface TimeDelta {
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
    weeks?: number;
}
export declare function timedelta(options: TimeDelta): number;
export {};
