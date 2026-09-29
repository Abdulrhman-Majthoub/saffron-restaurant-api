import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { AuthModule } from "./auth/auth.module.js";
import { ReservationsModule } from "./reservations/reservations.module.js";
import { ProductsModule } from "./products/products.module.js";
import { OrdersModule } from "./orders/orders.module.js";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseUrl = configService.get<string>("DATABASE_URL");

        if (databaseUrl) {
          return {
            type: "postgres" as const,
            url: databaseUrl,
            ssl: {
              rejectUnauthorized: false,
            },
            autoLoadEntities: true,
            synchronize: true,
          };
        }

        return {
          type: "postgres" as const,
          host: "localhost",
          port: 5433,
          username: "saffron",
          password: "saffron_password",
          database: "saffron_restaurant",
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    AuthModule,
    ReservationsModule,
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}