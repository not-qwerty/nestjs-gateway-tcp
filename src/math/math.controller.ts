import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('add')
export class MathController {
    private logger = new Logger('Math');

    constructor(private mathService: MathService) {}
    
    @Post()
    async accumulate(@Body('data') data: number[]) {
        this.logger.log('here is client');
        return this.mathService.accumulate(data);
    }
}
