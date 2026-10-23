import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { OrganizationsModule } from './organizations/organizations.module.js';
import { PropertiesModule } from './properties/properties.module.js';
import { ExperiencesModule } from './experiences/experiences.module.js';
import { GeoModule } from './geo/geo.module.js';
import { PlacesModule } from './places/places.module.js';
import { AnalyticsModule } from './analytics/analytics.module.js';

@Module({
  imports: [OrganizationsModule, PropertiesModule, ExperiencesModule, GeoModule, PlacesModule, AnalyticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
