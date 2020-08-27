import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MathController } from './math/math.controller';
import { MathService } from './math/math.service';

@Module({
  imports: [],
  controllers: [MathController],
  providers: [AppService, MathService],
})
export class AppModule {}
