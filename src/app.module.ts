import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config"

@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root1234',
        database: 'courses',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
        extra: {
          connectionLimit: 5
        }
      })
    }), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
