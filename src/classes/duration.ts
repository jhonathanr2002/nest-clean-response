import * as moment from 'moment-timezone';
import { DurationDto } from '../dto/duration.dto';

export class Duration {
    private readonly _startTime: number | null;

    constructor(startTime: number | null) {
        this._startTime = startTime;
    }

    private get seconds() {
        if (this._startTime == null) {
            return 'N/A s';
        }

        const durationInMs = Date.now() - this.startTime;
        const durationInSeconds: number = moment.duration(durationInMs, 'milliseconds').asSeconds();
        return durationInSeconds + ' s';
    }

    private get ms() {
        if (this._startTime == null) {
            return 'N/A ms';
        }

        const durationInMs = Date.now() - this.startTime;
        return durationInMs + ' ms';
    }

    private get startTime(): number {
        return this._startTime;
    }

    public static getDuration(startTime: number | null) {
        return new Duration(startTime);
    }

    public toObject() {
        return new DurationDto(this.seconds, this.ms);
    }
}
