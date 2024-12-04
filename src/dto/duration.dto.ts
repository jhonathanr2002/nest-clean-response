import {ApiProperty} from '@nestjs/swagger';

export class DurationDto {
    @ApiProperty({
        nullable: false,
        description: 'Duración en segundos de la petición',
        type: () => String,
    })
    public ms: string;

    @ApiProperty({
        nullable: false,
        description: 'Duración en milisegundos de la petición',
        type: () => String,
    })
    public seconds: string;

    constructor(seconds: string, ms: string) {
        this.seconds = seconds;
        this.ms = ms;
    }
}
